import FeatherIcon from 'feather-icons-react'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import Button from '../components/base/Button'
import MainLayout from '../components/layout/MainLayout'
import CardProduct from '../components/product/CardProduct'
import FilterProduct from '../components/product/FilterProduct'
import { wrapper } from '../store'
import { fetchUser } from '../store/slices/auth'
import { getProductList } from '../store/slices/product'
import { Get } from '../utils/Api'
import { requireAuth } from '../utils/requireAuth'

export const getServerSideProps = wrapper.getServerSideProps((store) =>
  requireAuth(async () => {
    await store.dispatch(fetchUser())
    await store.dispatch(getProductList())
    const res = await Get('/products/categories')
    const categories = res.data

    return {
      props: { categories },
    }
  })
)

const Home = ({ categories }) => {
  const router = useRouter()
  const { user, loading } = useSelector((state) => state.auth)
  const { itemList, loading: productLoading } = useSelector(
    (state) => state.product
  )

  return (
    <>
      <FilterProduct data={categories} />
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
        {productLoading ? (
          <div className="animate-pulse">Loading...</div>
        ) : (
          itemList?.map((item, idx) => (
            <CardProduct item={item} key={idx} />
          )) ?? <div>Empty List</div>
        )}
      </div>

      <div
        className={`${
          loading ? 'hidden' : 'fixed'
        } inset-x-0 bottom-5 z-30 text-center`}
      >
        <Button
          onClick={() => router.replace(user ? '/dashboard/sell' : '/login')}
        >
          <div className="flex gap-2">
            <FeatherIcon icon="plus" className="inline h-5 w-5" />
            Jual
          </div>
        </Button>
      </div>
    </>
  )
}

export default Home

Home.getLayout = (page) => {
  return <MainLayout pageTitle="Home">{page}</MainLayout>
}
