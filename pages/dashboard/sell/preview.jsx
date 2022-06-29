import FeatherIcon from 'feather-icons-react'
import { withRouter } from 'next/router'
import Button from '../../../components/base/Button'
import MainLayout from '../../../components/layout/MainLayout'
import CardPrice from '../../../components/product/CardPrice'
import CarouselProduct from '../../../components/product/CarouselProduct'
import DescProduct from '../../../components/product/DescProduct'
import CardProfile from '../../../components/user/CardProfile'

export default withRouter(function PreviewProduct({ router }) {
  return (
    <>
      <div className="hidden md:block">
        <MainLayout pageTitle="Preview Product">
          <div className="mx-auto mt-10 grid max-w-4xl grid-cols-7 gap-6">
            <div className="col-span-4">
              <CarouselProduct />
              <DescProduct />
            </div>
            <div className="col-span-3 space-y-6">
              <CardPrice>
                <Button width="full" onClick={() => router.push('/dashboard')}>
                  Terbitkan
                </Button>
                <Button
                  variant="outline"
                  width="full"
                  onClick={() => router.push('/dashboard/sell')}
                >
                  Edit
                </Button>
              </CardPrice>
              <CardProfile />
            </div>
          </div>
        </MainLayout>
      </div>

      <div className="w-full md:hidden">
        <div className="absolute top-[44px] left-4 z-50 flex h-7 w-7 justify-center rounded-full bg-neutral-01 md:hidden">
          <button onClick={() => router.replace('/dashboard/sell')}>
            <FeatherIcon icon="arrow-left" />
          </button>
        </div>
        <div className="absolute top-0 h-full w-full">
          <CarouselProduct />
        </div>
        <div className="relative mt-[42vh] space-y-4 px-4 pb-20">
          <CardPrice />
          <CardProfile />
          <DescProduct />
        </div>
        <div className="fixed bottom-0 mb-6 w-full px-4">
          <div className="px-6">
            <Button width="full" onClick={() => router.replace('/dashboard')}>
              Terbitkan
            </Button>
          </div>
        </div>
      </div>
    </>
  )
})
