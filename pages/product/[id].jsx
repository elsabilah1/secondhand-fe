import FeatherIcon from 'feather-icons-react'
import cookies from 'next-cookies'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { Toaster } from 'react-hot-toast'
import { useSelector } from 'react-redux'
import Button from '../../components/base/Button'
import MainLayout from '../../components/layout/MainLayout'
import Header from '../../components/layout/MainLayout/Header'
import CardPrice from '../../components/product/CardPrice'
import CarouselProduct from '../../components/product/CarouselProduct'
import DescProduct from '../../components/product/DescProduct'
import ModalMakeOffer from '../../components/product/ModalMakeOffer'
import CardProfile from '../../components/user/CardProfile'
import { wrapper } from '../../store'
import { fetchUser } from '../../store/slices/auth'
import { Get } from '../../utils/Api'

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (ctx) => {
    const { token } = cookies(ctx)
    await store.dispatch(fetchUser(token))

    const { data } = await Get(`/products/${ctx.query.id}`)

    return { props: { item: data } }
  }
)

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
      <div>
        <div className="hidden md:block">
          <Header />
        </div>

        <div className="absolute top-[44px] left-4 z-50 flex h-7 w-7 justify-center rounded-full bg-neutral-01 md:hidden">
          <button onClick={() => router.replace('/')}>
            <FeatherIcon icon="arrow-left" />
          </button>
        </div>

        <div className="mx-auto max-w-4xl md:mt-10 md:grid md:grid-cols-7 md:gap-6">
          <div className="absolute top-0 h-full w-full md:relative md:col-span-4">
            <CarouselProduct images={images} />
            <div className="hidden md:block">
              <DescProduct content={item.description} />
            </div>
          </div>
          <div className="col-span-3 mt-[42vh] space-y-4 px-4 pb-20 md:mt-0 md:space-y-6">
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
            <div className="md:hidden">
              <DescProduct content={item.description} />
            </div>
          </div>
        </div>

        <div className="fixed bottom-0 mb-6 w-full px-4 md:hidden">
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
