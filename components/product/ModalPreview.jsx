import FeatherIcon from 'feather-icons-react'
import { useRouter } from 'next/router'
import { Toaster } from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { createNewProduct } from '../../store/slices/product'
import { Button } from '../base'
import Header from '../layout/MainLayout/Header'
import CardProfile from '../user/CardProfile'
import CardPrice from './CardPrice'
import CarouselProduct from './CarouselProduct'
import DescProduct from './DescProduct'

const ModalPreview = ({
  user,
  setIsOpen,
  selected,
  selectedImages,
  formValues,
}) => {
  const router = useRouter()
  const dispatch = useDispatch()
  const { loading } = useSelector((state) => state.product)

  const hasNull = () => {
    for (const data in user) {
      if (user[data] == null) return true
    }
    return false
  }

  const handleSubmit = async () => {
    if (hasNull()) {
      return router.push('/profile/edit')
    }

    selected.map((item) => console.log(item.id))

    const formData = new FormData()
    selected.forEach((file) => formData.append('categories', file.id))
    selectedImages.forEach((file) => formData.append('images', file))

    for (const key in formValues) {
      formData.append(key, formValues[key])
    }

    dispatch(createNewProduct(formData))
  }

  return (
    <>
      <Toaster />
      <div className="absolute top-[44px] left-4 z-50 flex h-7 w-7 justify-center rounded-full bg-neutral-01 md:hidden">
        <button onClick={() => setIsOpen(false)}>
          <FeatherIcon icon="arrow-left" />
        </button>
      </div>

      <div className="hidden md:block">
        <Header />
      </div>

      <div className="mx-auto max-w-4xl md:mt-10 md:grid md:grid-cols-7 md:gap-6">
        <div className="absolute top-0 h-full w-full md:relative md:col-span-4">
          <CarouselProduct images={selectedImages} />
          <div className="hidden md:block">
            <DescProduct content={formValues.description} />
          </div>
        </div>
        <div className="col-span-3 mt-[42vh] space-y-4 px-4 pb-20 md:mt-0 md:space-y-6">
          <CardPrice item={formValues}>
            <Button width="full" onClick={handleSubmit} loading={loading}>
              Terbitkan
            </Button>
            <Button
              variant="outline"
              width="full"
              onClick={() => setIsOpen(false)}
              disabled={loading}
            >
              Edit
            </Button>
          </CardPrice>
          <CardProfile user={user} />
          <div className="md:hidden">
            <DescProduct content={formValues.description} />
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 mb-6 w-full px-4 md:hidden">
        <div className="px-6">
          <Button width="full" onClick={handleSubmit} loading={loading}>
            Terbitkan
          </Button>
        </div>
      </div>
    </>
  )
}

export default ModalPreview
