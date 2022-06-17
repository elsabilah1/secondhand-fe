import CardProfile from '../../components/user/CardProfile'
import FeatherIcon from 'feather-icons-react'
import MainLayout from '../../components/layout/MainLayout'
import NavDashboard from '../../components/product/NavDashboard'
import Text from '../../components/base/Text'
import { withRouter } from 'next/router'
import CardProduct from '../../components/product/CardProduct'

const products = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

export default withRouter(function SellerDashboard({ router }) {
  return (
    <MainLayout pageTitle="Dashboard" headerTitleBold="Daftar Jual Saya">
      <div className="mx-auto my-2 flex max-w-5xl flex-col gap-6 md:my-10">
        <div className="hidden px-4 md:block">
          <Text type="heading/20" weight="bold">
            Daftar Jual Saya
          </Text>
        </div>

        <div className="px-4">
          <CardProfile edit />
        </div>
        <div className="gap-x-8 md:grid md:grid-cols-6">
          <div className="pl-4 md:col-span-2">
            <NavDashboard />
          </div>
          <div className="mt-6 grid grid-cols-2 gap-6 px-4 md:col-span-4 md:mt-0 md:grid-cols-3 md:px-0 md:pr-4">
            <button
              className="border border-dashed border-neutral-02 text-neutral-03 hover:border-primary-03 hover:text-primary-03 active:scale-95"
              onClick={() => router.replace('/dashboard/sell')}
            >
              <FeatherIcon icon="plus" className="mb-2 inline" />
              <Text type="body/12">Tambah Produk</Text>
            </button>
            {products.map((item) => (
              <CardProduct key={item} />
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  )
})
