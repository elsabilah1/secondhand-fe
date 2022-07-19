import MainLayout from '../components/layout/MainLayout'

const NotFound = () => {
  return <div>NotFound</div>
}

export default NotFound

NotFound.getLayout = (page) => {
  return <MainLayout pageTitle="Not Found">{page}</MainLayout>
}
