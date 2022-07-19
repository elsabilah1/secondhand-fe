import FeatherIcon from 'feather-icons-react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useCallback, useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import {
  Button,
  Dropzone,
  InputField,
  SelectField,
  Text,
  TextAreaField,
} from '../../../components/base'
import MainLayout from '../../../components/layout/MainLayout'
import ModalPreview from '../../../components/product/ModalPreview'
import { createNewProduct, reset } from '../../../store/slices/product'
import { Get } from '../../../utils/Api'

export const getServerSideProps = async () => {
  const { data } = await Get('/products/categories')

  return {
    props: { categories: data },
  }
}

const SellProductForm = ({ categories }) => {
  const router = useRouter()
  const dispatch = useDispatch()
  const { loading, error, message } = useSelector((state) => state.product)
  const { user } = useSelector((state) => state.auth)
  const [selected, setSelected] = useState([])
  const [selectedImages, setSelectedImages] = useState([])
  const [formValues, setFormValues] = useState({})
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (message) {
      error ? toast.error(message) : toast.success(message)
      dispatch(reset())

      !error && router.replace('/dashboard')
    }
  }, [dispatch, error, message, router])

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

  const hasNull = () => {
    for (const data in user) {
      if (user[data] == null) return true
    }
    return false
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormValues({ ...formValues, [name]: value })
  }

  const handlePreview = () => {
    setIsOpen(true)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (hasNull()) {
      return router.push('/profile/edit')
    }

    const formData = new FormData()
    selected.forEach((file) => formData.append('categories', file.id))
    selectedImages.forEach((file) => formData.append('images', file))

    for (const key in formValues) {
      formData.append(key, formValues[key])
    }

    dispatch(createNewProduct(formData))
  }

  if (isOpen)
    return (
      <ModalPreview
        user={user}
        formValues={formValues}
        selected={selected}
        selectedImages={selectedImages}
        setIsOpen={setIsOpen}
      />
    )

  return (
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
            defaultValue={formValues.name ?? ''}
            onChange={handleInputChange}
            disabled={loading}
          />

          <InputField
            type="text"
            placeholder="Rp 0,00"
            label="Harga Produk"
            name="price"
            defaultValue={formValues.price ?? ''}
            onChange={handleInputChange}
            disabled={loading}
          />

          <SelectField
            label="Kategori"
            selected={selected}
            setSelected={setSelected}
            data={categories}
            placeholder="Pilih Kategori"
            multiple
            disabled={loading}
          />

          <TextAreaField
            name="description"
            placeholder="Contoh: Jalan Ikan Hiu 33"
            label="Deskripsi"
            rows="3"
            cols="30"
            defaultValue={formValues.description ?? ''}
            onChange={handleInputChange}
            disabled={loading}
          />

          <div>
            <div className="mb-2">
              <Text type="body/12">Foto Produk</Text>
            </div>
            <div className="inline-flex">
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
            </div>
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
              onClick={handlePreview}
              disabled={loading}
            >
              Preview
            </Button>
            <Button width="full" type="submit" loading={loading}>
              Terbitkan
            </Button>
          </div>
        </form>
      </div>
    </MainLayout>
  )
}

export default SellProductForm
