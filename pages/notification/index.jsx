import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MainLayout from '../../components/layout/MainLayout'
import NotifItem from '../../components/layout/MainLayout/NotifItem'
import { setNotifications } from '../../store/slices/notification'
import { Get } from '../../utils/Api'

const Notification = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state) => state.notification)

  useEffect(() => {
    const fetchNotif = async () => {
      const res = await Get('/notifications')
      if (res.data) {
        dispatch(setNotifications(res.data))
      } else {
        dispatch(setNotifications([]))
      }
    }
    fetchNotif()
  })

  return (
    <div>
      <MainLayout
        pageTitle="Notifikasi"
        headerTitle="Notifikasi"
        arrowLink="/dashboard"
      >
        {items?.map((item) => (
          <NotifItem key={item.id} data={item} />
        ))}
      </MainLayout>
    </div>
  )
}

export default Notification
