import MainLayout from '../components/layout/MainLayout'

const NotFound = () => {
  return (
    <div className="grid h-96 place-items-center">
      <h1 className="text-5xl font-bold text-danger">
        Halaman Tidak ditemukan
      </h1>
    </div>
  )
}

export default NotFound

NotFound.getLayout = (page) => {
  return (
    <MainLayout
      pageTitle="Not Found"
      headerTitle="Halaman tidak ditemukan"
      arrowLink="/"
    >
      {page}
    </MainLayout>
  )
}
