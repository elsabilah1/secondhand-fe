import FeatherIcon from 'feather-icons-react'
import { withRouter } from 'next/router'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import Button from '../../components/base/Button'
import MainLayout from '../../components/layout/MainLayout'
import CardPrice from '../../components/product/CardPrice'
import CarouselProduct from '../../components/product/CarouselProduct'
import DescProduct from '../../components/product/DescProduct'
import ModalMakeBid from '../../components/product/ModalMakeBid'
import CardProfile from '../../components/user/CardProfile'
import { wrapper } from '../../store'
import { fetchUser } from '../../store/slices/auth'
import { getProductById } from '../../store/slices/product'
import { requireAuth } from '../../utils/requireAuth'

export const getServerSideProps = wrapper.getServerSideProps((store) =>
  requireAuth(async (context) => {
    await store.dispatch(fetchUser())
    await store.dispatch(getProductById(context.query.productId))
  })
)
export default withRouter(function DetailProduct({ router }) {
  const [isOpen, setIsOpen] = useState(false)
  const { item } = useSelector((state) => state.product)
  const { user } = useSelector((state) => state.auth)
  const [images] = useState(item.ProductResources.map((item) => item.filename))
  console.log({ item })

  return (
    <>
      <ModalMakeBid isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="hidden md:block">
        <MainLayout pageTitle="Detail Product">
          <div className="mx-auto mt-10 grid max-w-4xl grid-cols-7 gap-6">
            <div className="col-span-4">
              <CarouselProduct images={images} />
              <DescProduct content={item.description} />
            </div>
            <div className="col-span-3 space-y-6">
              <CardPrice item={item}>
                <Button width="full" onClick={() => setIsOpen(true)}>
                  Saya Tertarik dan Ingin Nego
                </Button>
              </CardPrice>
              <CardProfile user={user} />
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
          <CardProfile user={user} />
          <DescProduct content={item.description} />
        </div>
        <div className="fixed bottom-0 mb-6 w-full px-4">
          <div className="px-6">
            <Button width="full" onClick={() => setIsOpen(true)}>
              Saya Tertarik dan Ingin Nego
            </Button>
          </div>
        </div>
      </div>
    </>
  )
})
