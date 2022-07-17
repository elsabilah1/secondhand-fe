import { useSelector } from 'react-redux'
import MainLayout from '../../components/layout/MainLayout'
import NotifItem from '../../components/layout/MainLayout/NotifItem'

const Notification = () => {
  const { items } = useSelector((state) => state.notification)

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
