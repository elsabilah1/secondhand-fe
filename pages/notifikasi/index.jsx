import Notifikasi from "../../components/base/Notifikasi"
import MainLayout from "../../components/layout/MainLayout"

export default function FormNotifikasi() {
  return (
    <div>
      <MainLayout
      pageTitle="Notifikasi"
      headerTitle="Notifikasi"
      arrowLink="/dashboard"
    >
    <Notifikasi/>
    <Notifikasi/>
    </MainLayout>
    </div>
  )
}
