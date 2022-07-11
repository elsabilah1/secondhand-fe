import FeatherIcon from 'feather-icons-react'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
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
    const res = await Get('/products/categories')
    const categories = res.data

    return {
      props: { categories },
    }
  })
)

const Home = ({ categories }) => {
  const router = useRouter()
  const dispatch = useDispatch()
  const { user, loading } = useSelector((state) => state.auth)
  const { itemList, loading: productLoading } = useSelector(
    (state) => state.product
  )
  const [cat, setCat] = useState(null)

  useEffect(() => {
    dispatch(getProductList(cat))
  }, [cat, dispatch])

  return (
    <>
      <FilterProduct data={categories} cat={cat} setCat={setCat} />
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
