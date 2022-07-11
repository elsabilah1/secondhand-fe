import { useRouter } from 'next/router'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, InputField, Text } from '../components/base'
import AuthLayout from '../components/layout/AuthLayout'
import { login } from '../store/slices/auth'

const Login = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const { error, message } = useSelector((state) => state.auth)
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
  })

  if (!error && message) {
    router.replace('/dashboard')
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormValues({
      ...formValues,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(login(formValues))
  }

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="mb-10 space-y-6">
          <Text type="heading/24" weight="bold">
            Masuk
          </Text>
          <div className="space-y-4">
            <InputField
              type="text"
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
          <Button width="full" type="submit">
            Masuk
          </Button>
        </div>
      </form>
      <div className="flex w-full justify-center gap-1">
        <Text>Belum punya akun?</Text>
        <button
          onClick={() => router.replace('/register')}
          className="text-primary-04 hover:text-primary-03 focus:outline-none"
        >
          <Text weight="bold">Daftar di sini</Text>
        </button>
      </div>
    </>
  )
}

export default Login

Login.getLayout = (page) => {
  return <AuthLayout pageTitle="Login">{page}</AuthLayout>
}
