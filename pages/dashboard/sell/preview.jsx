import { withRouter } from 'next/router'
import MainLayout from '../../../components/layout/MainLayout'

export default withRouter(function PreviewProduct() {
  // const [product] = useState(router.query)
  // console.log(product)

  return (
    <>
      <div className="hidden md:block">
        <MainLayout pageTitle="Preview Product">
          {/* <div className="mx-auto mt-10 grid max-w-4xl grid-cols-7 gap-6">
            <div className="col-span-4">
              <CarouselProduct images={product.images} />
              <DescProduct content={product.description} />
            </div>
            <div className="col-span-3 space-y-6">
              <CardPrice item={product}>
                <Button width="full" onClick={() => router.push('/dashboard')}>
                  Terbitkan
                </Button>
                <Button
                  variant="outline"
                  width="full"
                  onClick={() =>
                    router.replace(
                      {
                        pathname: '/dashboard/sell',
                        query: { ...product },
                      },
                      '/dashboard/sell'
                    )
                  }
                >
                  Edit
                </Button>
              </CardPrice>
              <CardProfile />
            </div>
          </div> */}
        </MainLayout>
      </div>

      <div className="w-full md:hidden">
        {/* <div className="absolute top-[44px] left-4 z-50 flex h-7 w-7 justify-center rounded-full bg-neutral-01 md:hidden">
          <button onClick={() => router.replace('/dashboard/sell')}>
            <FeatherIcon icon="arrow-left" />
          </button>
        </div>
        <div className="absolute top-0 h-full w-full">
          <CarouselProduct images={product.images} />
        </div>
        <div className="relative mt-[42vh] space-y-4 px-4 pb-20">
          <CardPrice item={product} />
          <CardProfile />
          <DescProduct content={product.description} />
        </div>
        <div className="fixed bottom-0 mb-6 w-full px-4">
          <div className="px-6">
            <Button width="full" onClick={() => router.replace('/dashboard')}>
              Terbitkan
            </Button>
          </div>
        </div> */}
      </div>
    </>
  )
})
