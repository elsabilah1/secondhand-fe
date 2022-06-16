import Text from '../components/base/Text'
import AuthLayout from '../components/layout/AuthLayout'
import InputField from '../components/base/InputField'
import Button from '../components/base/Button'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Login() {
  const router = useRouter()

  return (
    <AuthLayout pageTitle="Login">
      <div className="mb-10 space-y-6">
        <Text type="heading/24" weight="bold">
          Masuk
        </Text>
        <div className="space-y-4">
          <InputField
            type="email"
            // value=""
            placeholder="Contoh: johndee@gmail.com"
            label="Email"
            name="email"
            // onChange=""
          />
          <InputField
            type="password"
            // value=""
            placeholder="Masukkan password"
            label="Password"
            name="password"
            // onChange=""
          />
        </div>
        <Button width="full" onClick={() => router.replace('/')}>
          Masuk
        </Button>
      </div>
      <div className="flex w-full justify-center gap-1">
        <Text>Belum punya akun?</Text>
        <Link href="/register" replace>
          <a className="text-primary-04 hover:text-primary-03 focus:outline-none">
            <Text weight="bold">Daftar di sini</Text>
          </a>
        </Link>
      </div>
    </AuthLayout>
  )
}
