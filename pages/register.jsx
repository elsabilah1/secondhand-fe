import AuthLayout from '../components/layout/AuthLayout'
import Button from '../components/base/Button'
import InputField from '../components/base/InputField'
import Link from 'next/link'
import Text from '../components/base/Text'
import { useState } from 'react'
import { withRouter } from 'next/router'
import { Post } from '../utils/Api'

const initialState = {
  name: '',
  email: '',
  password: '',
}

export default withRouter(function Register({ router }) {
  const [formValues, setFormValues] = useState(initialState)
  const [alert, setAlert] = useState('')

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormValues({
      ...formValues,
      [name]: value,
    })
  }

  const handleSubmit = async () => {
    const res = await Post('/register', formValues)
    console.log(res)
    setAlert(res.message)
    setTimeout(() => {
      router.replace('/login')
    }, 3000)
  }

  return (
    <AuthLayout pageTitle="Register">
      <div className="mb-10 space-y-6">
        <Text type="heading/24" weight="bold">
          Daftar
        </Text>
        <div className="text-primary-03">
          <Text>{alert}</Text>
        </div>
        <div className="space-y-4">
          <InputField
            type="text"
            placeholder="Nama Lengkap"
            label="Nama"
            name="name"
            onChange={handleInputChange}
          />
          <InputField
            type="email"
            placeholder="Contoh: johndee@gmail.com"
            label="Email"
            name="email"
            onChange={handleInputChange}
          />
          <InputField
            type="password"
            placeholder="Masukkan password"
            label="Password"
            name="password"
            onChange={handleInputChange}
          />
        </div>
        <Button width="full" onClick={handleSubmit}>
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
})
