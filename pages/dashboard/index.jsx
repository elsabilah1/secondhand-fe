import { Tab } from '@headlessui/react'
import FeatherIcon from 'feather-icons-react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { Fragment } from 'react'
import { useSelector } from 'react-redux'
import Text from '../../components/base/Text'
import MainLayout from '../../components/layout/MainLayout'
import CardProduct from '../../components/product/CardProduct'
import Loader from '../../components/product/Loader'
import NavDashboard from '../../components/product/NavDashboard'
import CardProfile from '../../components/user/CardProfile'
import { useDashboardProducts } from '../../hooks/useProduct'

const SellerDashboard = () => {
  const router = useRouter()
  const { user } = useSelector((state) => state.auth)
  const { sortBy } = useSelector((state) => state.product)
  const { products, isLoading, isError } = useDashboardProducts(sortBy)

  return (
    <div className="mx-auto mt-2 flex max-w-6xl flex-col gap-6 md:mt-10">
      <div className="hidden px-4 md:block">
        <Text type="heading/20" weight="bold">
          Daftar Jual Saya
        </Text>
      </div>

      <CardProfile user={user} edit />

      <Tab.Group as="div" className="gap-x-8 md:grid md:grid-cols-6">
        <Tab.List className="md:col-span-2">
          <NavDashboard />
        </Tab.List>
        <Tab.Panels as={Fragment}>
          {/* All Products */}
          <Tab.Panel className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-3 md:col-span-4 md:mt-0 md:gap-6 md:pr-4">
            <button
              className="h-60 rounded border border-dashed border-neutral-02 py-10 text-neutral-03 shadow-sm hover:border-primary-03 hover:text-primary-03 active:scale-95"
              onClick={() => router.replace('/dashboard/sell')}
            >
              <FeatherIcon icon="plus" className="mb-2 inline" />
              <Text type="body/12">Tambah Produk</Text>
            </button>
            {isLoading ? (
              <Loader length={2} />
            ) : (
              products?.map((item) => (
                <CardProduct
                  item={item}
                  key={item.id}
                  href={`/product/${item.id}`}
                />
              )) ?? <Text>{isError?.data?.message}</Text>
            )}
          </Tab.Panel>

          {/* Wishlist Products */}
          <Tab.Panel className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-3 md:col-span-4 md:mt-0 md:pr-4">
            {isLoading ? (
              <Loader length={3} />
            ) : (
              products?.map((item) =>
                item.ProductOffers.map((offer) => (
                  <CardProduct
                    item={item}
                    priceOffer={offer.priceOffer}
                    statusOffer={offer.status}
                    key={offer.id}
                    href={`/dashboard/info/${offer.id}`}
                    variant="wishlist"
                  />
                ))
              ) ?? (
                <div className="col-span-full grid h-full place-items-center">
                  <div className="w-full max-w-[300px] space-y-5 text-center text-neutral-03 md:max-w-xs">
                    <div className="mx-auto mt-20 max-w-[172px] md:mt-0 md:max-w-none">
                      <Image
                        src="/empty_wishlist.png"
                        alt="empty wishlist"
                        width={276}
                        height={194}
                        objectFit="contain"
                        layout="responsive"
                      />
                    </div>
                    <Text>
                      Belum ada produkmu yang diminati nih, sabar ya rejeki
                      nggak kemana kok
                    </Text>
                  </div>
                </div>
              )
            )}
          </Tab.Panel>

          {/* Sold Products */}
          <Tab.Panel className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-3 md:col-span-4 md:mt-0 md:pr-4">
            {isLoading ? (
              <Loader length={3} />
            ) : (
              products?.map((item) => (
                <CardProduct
                  item={item}
                  key={item.id}
                  href={`/dashboard/info/${item.id}?status=sold`}
                  variant="sold"
                />
              )) ?? <Text>{isError?.data?.message}</Text>
            )}
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}

export default SellerDashboard

SellerDashboard.getLayout = (page) => (
  <MainLayout pageTitle="Dashboard" headerTitleBold="Daftar Jual Saya">
    {page}
  </MainLayout>
)
