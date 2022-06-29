import FeatherIcon from 'feather-icons-react'
import cookies from 'next-cookies'
import { withRouter } from 'next/router'
import { useSelector } from 'react-redux'
import Button from '../components/base/Button'
import MainLayout from '../components/layout/MainLayout'
import CardProduct from '../components/product/CardProduct'
import FilterProduct from '../components/product/FilterProduct'
import { wrapper } from '../store'
import { fetchUser } from '../store/slices/auth'

const products = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

export default withRouter(function Home({ router }) {
  const { user } = useSelector((state) => state.auth)

  return (
    <>
      <MainLayout pageTitle="Home">
        <FilterProduct />
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
          {products.map((item) => (
            <CardProduct key={item} />
          ))}
        </div>
      </MainLayout>
      <div className="fixed inset-x-0 bottom-5 z-30 text-center">
        <Button
          onClick={() => router.replace(user ? '/dashboard/sell' : '/login')}
        >
          <FeatherIcon icon="plus" className="inline h-5 w-5" /> Jual
        </Button>
      </div>
    </>
  )
})

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (ctx) => {
    const { token } = cookies(ctx)
    await store.dispatch(fetchUser(token))

    return {
      props: {},
    }
  }
)
