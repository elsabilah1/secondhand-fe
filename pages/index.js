import Text from '../components/base/Text'
import MainLayout from '../components/layout/MainLayout'

export default function Home() {
  return (
    <MainLayout pageTitle="Home">
      <div className="grid h-screen place-items-center">
        <div className="space-y-6 text-center">
          <Text type="heading/24" weight="bold">
            HomePage
          </Text>
        </div>
      </div>
    </MainLayout>
  )
}
