import Text from '../components/base/Text'
import LayoutAuth from '../components/layout/LayoutAuth'
import InputField from '../components/base/InputField'
import Button from '../components/base/Button'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Register() {
  const router = useRouter();
  return (
    <LayoutAuth>
       <div className='w-full space-y-6'>
        <Text type="heading/24" weight="bold">Daftar</Text>
        <div className='space-y-4'>
          <InputField 
            type="Nama"
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
        <Button width="full" onClick={() => router.push("/login")}>
          Daftar
        </Button>
        <div className='w-full flex gap-1 justify-center'>
          <Text>Sudah punya akun?</Text>
          <Link href="/login">
            <a className='text-primary-04 hover:text-primary-03'><Text weight="bold">Masuk di sini</Text></a>
          </Link>
        </div>
      </div>
    </LayoutAuth>
  )
}
