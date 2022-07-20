import FeatherIcon from 'feather-icons-react'
import cookies from 'next-cookies'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import Button from '../components/base/Button'
import MainLayout from '../components/layout/MainLayout'
import CardProduct from '../components/product/CardProduct'
import FilterProduct from '../components/product/FilterProduct'
import Loader from '../components/product/Loader'
import useProduct from '../hooks/useProduct'
import { wrapper } from '../store'
import { fetchUser } from '../store/slices/auth'
import { Get } from '../utils/Api'

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (ctx) => {
    const { token } = cookies(ctx)
    await store.dispatch(fetchUser(token))

    const { data } = await Get('/products/categories')

    return {
      props: { categories: data },
    }
  }
)

const Home = ({ categories }) => {
  const router = useRouter()
  const { user, loading } = useSelector((state) => state.auth)
  const { category, keyword } = useSelector((state) => state.product)
  const { products, isLoading, isError } = useProduct(category, keyword)

  return (
    <>
      <FilterProduct data={categories} />
      {isLoading ? (
        <div className="grid grid-cols-2 gap-2 md:grid-cols-4 lg:grid-cols-6">
          <Loader length={6} />
        </div>
      ) : products?.length > 0 ? (
        <div className="grid grid-cols-2 gap-2 md:grid-cols-4 lg:grid-cols-6">
          {products.map((item, idx) => (
            <CardProduct item={item} key={idx} href={`/product/${item.id}`} />
          ))}
        </div>
      ) : (
        <div>{isError?.data?.message ?? 'Produk tidak ditemukan'}</div>
      )}
      <div
        className={`${
          loading ? 'hidden' : 'fixed'
        } inset-x-0 bottom-5 z-30 text-center`}
      >
        <Button
          onClick={() => router.replace(user ? '/dashboard/sell' : '/login')}
        >
          <FeatherIcon icon="plus" className="inline h-5 w-5" />
          Jual
        </Button>
      </div>
    </>
  )
}

export default Home

Home.getLayout = (page) => {
  return <MainLayout pageTitle="Home">{page}</MainLayout>
}
