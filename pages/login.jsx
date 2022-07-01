import { withRouter } from 'next/router'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../components/base/Button'
import InputField from '../components/base/InputField'
import Text from '../components/base/Text'
import AuthLayout from '../components/layout/AuthLayout'
import { login } from '../store/slices/auth'

const initialState = {
  email: '',
  password: '',
}

export default withRouter(function Login({ router }) {
  const dispatch = useDispatch()
  const [formValues, setFormValues] = useState(initialState)
  const { error, message } = useSelector((state) => state.auth)

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
        <button
          onClick={() => router.replace('/register')}
          className="text-primary-04 hover:text-primary-03 focus:outline-none"
        >
          <Text weight="bold">Daftar di sini</Text>
        </button>
      </div>
    </AuthLayout>
  )
})
