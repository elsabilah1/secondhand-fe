import { useDispatch, useSelector } from 'react-redux'

import AuthLayout from '../components/layout/AuthLayout'
import Button from '../components/base/Button'
import InputField from '../components/base/InputField'
import Link from 'next/link'
import Loader from '../components/base/Loader'
import Text from '../components/base/Text'
import { login } from '../store/slices/auth'
import { useState } from 'react'
import { withRouter } from 'next/router'

const initialState = {
  email: '',
  password: '',
}

export default withRouter(function Login({ router }) {
  const [formValues, setFormValues] = useState(initialState)
  const dispatch = useDispatch()
  const { message, loading, error } = useSelector((state) => state.auth)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormValues({
      ...formValues,
      [name]: value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await dispatch(login(formValues))
    router.push('/dashboard')
  }

  return (
    <AuthLayout pageTitle="Login">
      {loading && <Loader />}
      <div className="mb-10 space-y-6">
        <Text type="heading/24" weight="bold">
          Masuk
        </Text>
        <div className="text-primary-03">
          <Text>{message}</Text>
        </div>
        <form onSubmit={(e) => handleSubmit(e)} className="space-y-6">
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
        </form>
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
