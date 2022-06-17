import AuthLayout from '../components/layout/AuthLayout'
import Button from '../components/base/Button'
import InputField from '../components/base/InputField'
import Link from 'next/link'
import Text from '../components/base/Text'
import { withRouter } from 'next/router'
import { useState } from 'react'
import { Post } from '../utils/Api'

const initialState = {
  email: '',
  password: '',
}

export default withRouter(function Login({ router }) {
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
    const res = await Post('/auth/login', formValues)
    console.log(res)
    setAlert(res.message)
    // setTimeout(() => {
    //   router.replace('/login')
    // }, 3000)
  }

  return (
    <AuthLayout pageTitle="Login">
      <div className="mb-10 space-y-6">
        <Text type="heading/24" weight="bold">
          Masuk
        </Text>
        <div className="text-primary-03">
          <Text>{alert}</Text>
        </div>
        <div className="space-y-4">
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
})
