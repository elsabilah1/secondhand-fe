import FeatherIcon from 'feather-icons-react'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { Toaster } from 'react-hot-toast'
import { useSelector } from 'react-redux'
import Button from '../../components/base/Button'
import MainLayout from '../../components/layout/MainLayout'
import CardPrice from '../../components/product/CardPrice'
import CarouselProduct from '../../components/product/CarouselProduct'
import DescProduct from '../../components/product/DescProduct'
import ModalMakeOffer from '../../components/product/ModalMakeOffer'
import CardProfile from '../../components/user/CardProfile'
import { Get } from '../../utils/Api'

export const getServerSideProps = async (context) => {
  const { data } = await Get(`/products/${context.query.id}`)

  return { props: { item: data } }
}

const DetailProduct = ({ item }) => {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const { user } = useSelector((state) => state.auth)
  const images = item?.ProductResources?.map((item) => item.filename)

  return (
    <>
      <Toaster />
      <ModalMakeOffer
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        setLoading={setLoading}
        item={item}
      />
      <div className="hidden md:block">
        <MainLayout pageTitle="Detail Product">
          <div className="mx-auto mt-10 grid max-w-4xl grid-cols-7 gap-6">
            <div className="col-span-4">
              <CarouselProduct images={images} />
              <DescProduct content={item.description} />
            </div>
            <div className="col-span-3 space-y-6">
              <CardPrice item={item}>
                <Button
                  width="full"
                  onClick={() => {
                    user ? setIsOpen(true) : router.push('/login')
                  }}
                  disabled={user ? user.id === item.sellerId : false}
                  loading={loading}
                >
                  Saya Tertarik dan Ingin Nego
                </Button>
              </CardPrice>
              <CardProfile user={item?.User?.Profile} />
            </div>
          </div>
        </MainLayout>
      </div>

      <div className="w-full md:hidden">
        <div className="absolute top-[44px] left-4 z-50 flex h-7 w-7 justify-center rounded-full bg-neutral-01 md:hidden">
          <button onClick={() => router.replace('/')}>
            <FeatherIcon icon="arrow-left" />
          </button>
        </div>
        <div className="absolute top-0 h-full w-full">
          <CarouselProduct images={images} />
        </div>
        <div className="relative mt-[42vh] space-y-4 px-4 pb-20">
          <CardPrice item={item} />
          <CardProfile user={item?.User?.Profile} />
          <DescProduct content={item.description} />
        </div>
        <div className="fixed bottom-0 mb-6 w-full px-4">
          <div className="px-6">
            <Button
              width="full"
              onClick={() => {
                user ? setIsOpen(true) : router.push('/login')
              }}
              disabled={user ? user.id === item.sellerId : false}
              loading={loading}
            >
              Saya Tertarik dan Ingin Nego
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default DetailProduct

DetailProduct.getLayout = (page) => {
  return (
    <MainLayout pageTitle="Detail Product" manual>
      {page}
    </MainLayout>
  )
}
