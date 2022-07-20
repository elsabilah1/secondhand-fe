import cookies from 'next-cookies'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import Text from '../../components/base/Text'
import MainLayout from '../../components/layout/MainLayout'
import MenuProfile from '../../components/user/MenuProfile'
import NavProfile from '../../components/user/NavProfile'
import { wrapper } from '../../store'
import { fetchUser } from '../../store/slices/auth'

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (ctx) => {
    const { token } = cookies(ctx)
    await store.dispatch(fetchUser(token))
  }
)

const DetailProfile = () => {
  const { user } = useSelector((state) => state.auth)

  return (
    <div className="flex h-screen flex-col">
      <div className="mx-auto my-6 w-full flex-1 px-4">
        <Text weight="bold" type="heading/20">
          Akun Saya
        </Text>

        <div className="relative mx-auto mt-3 h-24 w-24 rounded-xl border border-primary-03">
          <Image
            src={user.profilePicture}
            alt={user.name}
            layout="fill"
            objectFit="contain"
            className="rounded-xl"
            priority
          />
        </div>

        <div>
          <MenuProfile />
          <div className="text-center text-neutral-03">
            <Text type="body/12">Version 1.0</Text>
          </div>
        </div>
      </div>
      <NavProfile />
    </div>
  )
}

export default DetailProfile

DetailProfile.getLayout = (page) => {
  return (
    <MainLayout pageTitle="Profile" manual>
      {page}
    </MainLayout>
  )
}
