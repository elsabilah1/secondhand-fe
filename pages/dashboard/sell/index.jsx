import FeatherIcon from 'feather-icons-react'
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
import { createNewProduct, reset } from '../../../store/slices/product'
import { Get } from '../../../utils/Api'

export default withRouter(function SellProductForm({ router, categories }) {
  const dispatch = useDispatch()
  const { loading, error, message } = useSelector((state) => state.product)
  const [selected, setSelected] = useState([])
  const [formValues, setFormValues] = useState({ categories: [] })
  const [selectedImages, setSelectedImages] = useState([])

  if (error && message) {
    setTimeout(() => {
      dispatch(reset())
    }, 4000)
  }

  if (!error && message) {
    setTimeout(() => {
      dispatch(reset())
      router.replace('/dashboard')
    }, 4000)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormValues({ ...formValues, [name]: value })
  }

  const handlePreview = () => {
    if (selected.length > 0) {
      formValues.categories = selected.map((item) => item.category)
    }

    if (selectedImages.length > 0) {
      formValues.images = selectedImages.map((file) => file.preview)
    }

    router.push(
      {
        pathname: '/dashboard/sell/preview',
        query: {
          ...formValues,
        },
      },
      '/dashboard/sell/preview'
    )
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

    dispatch(createNewProduct(formData))
  }

  const onDrop = useCallback((acceptedFiles) => {
    const images = acceptedFiles.map((file) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
      })
    )
    setSelectedImages((prev) => [...images, ...prev])
  }, [])

  const handleDelete = (idx) => {
    setSelectedImages((prev) => prev.filter((_, i) => i !== idx))
  }

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
              defaultValue={router.query.name ?? ''}
              onChange={handleInputChange}
            />

            <InputField
              type="text"
              placeholder="Rp 0,00"
              label="Harga Produk"
              name="price"
              defaultValue={router.query.price ?? ''}
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
              defaultValue={router.query.description ?? ''}
              onChange={handleInputChange}
            ></TextareaField>

            <div>
              <div className="mb-2">
                <Text type="body/12">Foto Produk</Text>
              </div>
              <Dropzone multiple={true} maxFiles={5} onDrop={onDrop}>
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
              <div className="mt-4 grid grid-cols-3 gap-1 sm:grid-cols-5">
                {selectedImages?.map((file, idx) => (
                  <div key={idx} className="relative h-24 w-24 rounded-xl">
                    <Image
                      src={file.preview}
                      alt={file.name}
                      layout="fill"
                      objectFit="contain"
                    />
                    <button
                      type="button"
                      className="absolute z-50 h-full w-full cursor-pointer rounded-sm bg-danger/20 opacity-0 transition-all hover:opacity-100"
                      onClick={() => handleDelete(idx)}
                    >
                      <FeatherIcon icon="x" className="w-full text-danger" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-1 flex gap-4">
              <Button
                variant="outline"
                width="full"
                onClick={() => handlePreview()}
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

export const getServerSideProps = wrapper.getServerSideProps(() => async () => {
  const res = await Get('/products/categories')
  const categories = res.data.data

  return {
    props: { categories },
  }
})
