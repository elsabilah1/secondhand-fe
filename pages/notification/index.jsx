import Cookies from 'js-cookie'
import cookies from 'next-cookies'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MainLayout from '../../components/layout/MainLayout'
import NotifItem from '../../components/layout/MainLayout/NotifItem'
import { wrapper } from '../../store'
import { fetchUser } from '../../store/slices/auth'
import { setNotifications } from '../../store/slices/notification'
import { Get } from '../../utils/Api'

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (ctx) => {
    const { token } = cookies(ctx)
    await store.dispatch(fetchUser(token))
  }
)

const Notification = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state) => state.notification)

  useEffect(() => {
    const fetchNotif = async () => {
      const token = Cookies.get('token')
      if (token) {
        const res = await Get('/notifications')
        if (res.data) {
          dispatch(setNotifications(res.data))
        } else {
          dispatch(setNotifications([]))
        }
      }
    }
    fetchNotif()
  })

  return (
    <>
      {items?.map((item) => (
        <NotifItem key={item.id} data={item} />
      ))}
    </>
  )
}

export default Notification

Notification.getLayout = (page) => {
  return (
    <MainLayout
      pageTitle="Notifikasi"
      headerTitle="Notifikasi"
      arrowLink="/dashboard"
    >
      {page}
    </MainLayout>
  )
}
