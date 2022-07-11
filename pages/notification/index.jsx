import MainLayout from '../../components/layout/MainLayout'
import NotifItem from '../../components/layout/MainLayout/NotifItem'

const Notification = () => {
  return (
    <div>
      <MainLayout
        pageTitle="Notifikasi"
        headerTitle="Notifikasi"
        arrowLink="/dashboard"
      >
        <NotifItem />
        <NotifItem />
        <NotifItem />
      </MainLayout>
    </div>
  )
}

export default Notification
