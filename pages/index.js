import Text from '../components/base/Text'
import Button from '../components/base/Button'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()

  return (
    <div className="grid h-screen place-items-center">
      <div className="space-y-6 text-center">
        <Text type="heading/24" weight="bold">
          HomePage
        </Text>
      </div>
    </div>
  )
}
