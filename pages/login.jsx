import { login, reset } from '../store/slices/auth'
import { useEffect, useState } from 'react'

import AuthLayout from '../components/layout/AuthLayout'
import Button from '../components/base/Button'
import InputField from '../components/base/InputField'
import Link from 'next/link'
import Text from '../components/base/Text'
import { useDispatch } from 'react-redux'
import { withRouter } from 'next/router'

const initialState = {
  email: '',
  password: '',
}

export default withRouter(function Login({ router }) {
  const [formValues, setFormValues] = useState(initialState)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(reset())
  }, [])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormValues({
      ...formValues,
      [name]: value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    dispatch(reset())
    await dispatch(login(formValues))
    // router.reload()
  }

  return (
    <AuthLayout pageTitle="Login">
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
        <Link href="/register" replace>
          <a className="text-primary-04 hover:text-primary-03 focus:outline-none">
            <Text weight="bold">Daftar di sini</Text>
          </a>
        </Link>
      </div>
    </AuthLayout>
  )
})
