import Text from '../components/base/Text'
import AuthLayout from '../components/layout/AuthLayout'
import InputField from '../components/base/InputField'
import Button from '../components/base/Button'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Register() {
  const router = useRouter()

  return (
    <AuthLayout pageTitle="Register">
      <div className="mb-10 space-y-6">
        <Text type="heading/24" weight="bold">
          Daftar
        </Text>
        <div className="space-y-4">
          <InputField
            type="text"
            // value=""
            placeholder="Nama Lengkap"
            label="Nama"
            name="nama"
            // onChange=""
          />
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
        <Button width="full" onClick={() => router.replace('/login')}>
          Daftar
        </Button>
      </div>
      <div className="flex w-full justify-center gap-1">
        <Text>Sudah punya akun?</Text>
        <Link href="/login" replace>
          <a className="text-primary-04 hover:text-primary-03 focus:outline-none">
            <Text weight="bold">Masuk di sini</Text>
          </a>
        </Link>
      </div>
    </AuthLayout>
  )
}
