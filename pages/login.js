import LayoutAuth from '../components/layout/LayoutAuth'
import Text from '../components/base/Text'
import InputField from '../components/base/InputField'
import Button from '../components/base/Button'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Login() {
  const router = useRouter();
  return (
    <LayoutAuth>
      <div className='w-full space-y-6'>
        <Text type="heading/24" weight="bold">Masuk</Text>
        <div className='space-y-4'>
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
        <Button width="full" onClick={() => router.push("/")}>
          Masuk
        </Button>
        <div className='w-full flex gap-1 justify-center'>
          <Text>Belum punya akun?</Text>
          <Link href="/register">
            <a className='text-primary-04 hover:text-primary-03'><Text weight="bold">Daftar di sini</Text></a>
          </Link>
        </div>
      </div>
    </LayoutAuth>
  )
}
