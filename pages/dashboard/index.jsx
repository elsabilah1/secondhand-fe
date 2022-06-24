import CardProduct from '../../components/product/CardProduct'
import CardProfile from '../../components/user/CardProfile'
import FeatherIcon from 'feather-icons-react'
import MainLayout from '../../components/layout/MainLayout'
import NavDashboard from '../../components/product/NavDashboard'
import Text from '../../components/base/Text'
import { withRouter } from 'next/router'
import { Tab } from '@headlessui/react'
import { Fragment } from 'react'
import Image from 'next/image'

const products = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

export default withRouter(function SellerDashboard({ router }) {
  return (
    <MainLayout pageTitle="Dashboard" headerTitleBold="Daftar Jual Saya">
      <div className="mt-2 flex flex-col gap-6 md:mt-10">
        <div className="hidden px-4 md:block">
          <Text type="heading/20" weight="bold">
            Daftar Jual Saya
          </Text>
        </div>

        <div className="px-4">
          <CardProfile edit />
        </div>

        <Tab.Group as="div" className="gap-x-8 md:grid md:grid-cols-6">
          <Tab.List className="pl-4 md:col-span-2">
            <NavDashboard />
          </Tab.List>
          <Tab.Panels as={Fragment}>
            {/* All Products */}
            <Tab.Panel className="mt-6 grid grid-cols-2 gap-6 px-4 sm:grid-cols-3 md:col-span-4 md:mt-0 md:px-0 md:pr-4">
              <button
                className="rounded border border-dashed border-neutral-02 text-neutral-03 shadow-sm hover:border-primary-03 hover:text-primary-03 active:scale-95"
                onClick={() => router.replace('/dashboard/sell')}
              >
                <FeatherIcon icon="plus" className="mb-2 inline" />
                <Text type="body/12">Tambah Produk</Text>
              </button>
              {products.map((item) => (
                <CardProduct key={item} />
              ))}
            </Tab.Panel>

            {/* Wishlist Products */}
            <Tab.Panel className="mt-6 grid grid-cols-2 gap-6 px-4 sm:grid-cols-3 md:col-span-4 md:mt-0 md:px-0 md:pr-4">
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
                    Belum ada produkmu yang diminati nih, sabar ya rejeki nggak
                    kemana kok
                  </Text>
                </div>
              </div>
            </Tab.Panel>

            {/* Sold Products */}
            <Tab.Panel className="mt-6 grid grid-cols-2 gap-6 px-4 sm:grid-cols-3 md:col-span-4 md:mt-0 md:px-0 md:pr-4">
              {products.map((item) => (
                <CardProduct key={item} />
              ))}
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </MainLayout>
  )
})
