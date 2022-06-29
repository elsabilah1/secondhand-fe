import FeatherIcon from 'feather-icons-react'
import cookies from 'next-cookies'
import Image from 'next/image'
import { withRouter } from 'next/router'
import { useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Alert from '../../../components/base/Alert'
import Button from '../../../components/base/Button'
import Dropzone from '../../../components/base/Dropzone'
import InputField from '../../../components/base/InputField'
import Loader from '../../../components/base/Loader'
import SelectField from '../../../components/base/SelectField'
import Text from '../../../components/base/Text'
import TextareaField from '../../../components/base/TextareaField'
import MainLayout from '../../../components/layout/MainLayout'
import { wrapper } from '../../../store'
import { fetchUser } from '../../../store/slices/auth'
import { createNewProduct } from '../../../store/slices/product'
import { Get } from '../../../utils/Api'

export default withRouter(function SellProductForm({
  router,
  categories,
  token,
}) {
  const dispatch = useDispatch()
  const { loading, error, message } = useSelector((state) => state.product)
  const [selected, setSelected] = useState([])
  const [formValues, setFormValues] = useState()
  const [selectedImages, setSelectedImages] = useState([])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormValues({ ...formValues, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const formData = new FormData()
    if (selected.length > 0) {
      formValues.categories = selected.map((item) => categories.push(item.id))
    }
    selectedImages.forEach((file) => formData.append('images', file))
    setFormValues({ ...formValues })

    for (const key in formValues) {
      formData.append(key, formValues[key])
    }

    dispatch(createNewProduct({ formData, token }))
  }

  const onDrop = useCallback((acceptedFiles) => {
    setSelectedImages(
      acceptedFiles.map((file) =>
        Object.assign(file, { preview: URL.createObjectURL(file) })
      )
    )
  }, [])

  return (
    <>
      {loading && <Loader />}
      {message && <Alert error={error} message={message} />}
      <MainLayout
        pageTitle="Jual Produk"
        headerTitle="Lengkapi Detail Produk"
        arrowLink="/dashboard"
      >
        <div className="mx-auto mt-6 flex max-w-2xl md:my-10">
          <div className="hidden w-2/12 md:block">
            <button onClick={() => router.replace('/dashboard')}>
              <FeatherIcon icon="arrow-left" />
            </button>
          </div>

          <form
            encType="multipart/form-data"
            className="w-full space-y-4 md:w-10/12"
            onSubmit={(e) => handleSubmit(e)}
          >
            <InputField
              type="text"
              placeholder="Nama Produk"
              label="Nama Produk"
              name="name"
              onChange={handleInputChange}
            />

            <InputField
              type="text"
              placeholder="Rp 0,00"
              label="Harga Produk"
              name="price"
              onChange={handleInputChange}
            />

            <SelectField
              label="Kategori"
              selected={selected}
              setSelected={setSelected}
              data={categories}
              placeholder="Pilih Kategori"
              multiple
            />

            <TextareaField
              name="description"
              placeholder="Contoh: Jalan Ikan Hiu 33"
              label="Deskripsi"
              rows="3"
              cols="30"
              onChange={handleInputChange}
            ></TextareaField>

            <div>
              <div className="mb-2">
                <Text type="body/12">Foto Produk</Text>
              </div>
              <Dropzone maxFiles={5} onDrop={onDrop}>
                <button
                  type="button"
                  className="group h-24 w-24 rounded-xl border border-dashed border-[#D0D0D0] group-hover:border-primary-03"
                >
                  <FeatherIcon
                    icon="plus"
                    className="inline h-6 w-6 text-neutral-03 active:scale-95 group-hover:text-primary-03"
                  />
                </button>
              </Dropzone>
              <div className="mt-4 flex flex-wrap gap-3">
                {selectedImages?.map((file, idx) => (
                  <div key={idx} className="rounded-xl">
                    <Image
                      src={file.preview}
                      alt={file.name}
                      width={96}
                      height={96}
                      objectFit="contain"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-1 flex gap-4">
              <Button
                variant="outline"
                width="full"
                onClick={() => router.push('/dashboard/sell/preview')}
              >
                Preview
              </Button>
              <Button width="full" type="submit">
                Terbitkan
              </Button>
            </div>
          </form>
        </div>
      </MainLayout>
    </>
  )
})

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (ctx) => {
    const { token } = cookies(ctx)
    await store.dispatch(fetchUser(token))
    const res = await Get('/products/categories')
    const categories = res.data.data

    return {
      props: { categories, token },
    }
  }
)
