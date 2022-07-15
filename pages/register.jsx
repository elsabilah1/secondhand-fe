import { useRouter } from 'next/router'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../components/base/Button'
import InputField from '../components/base/InputField'
import Text from '../components/base/Text'
import AuthLayout from '../components/layout/AuthLayout'
import { register } from '../store/slices/auth'

const Register = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const { error, message } = useSelector((state) => state.auth)
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    password: '',
  })

  if (!error && message) {
    router.replace('/login')
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
    dispatch(register(formValues))
  }

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="mb-10 space-y-6">
          <Text type="heading/24" weight="bold">
            Daftar
          </Text>
          <div className="space-y-4">
            <InputField
              type="text"
              placeholder="Nama Lengkap"
              label="Nama"
              name="name"
              onChange={handleInputChange}
            />
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
          <div data-testid="btn-register">
            <Button width="full" type="submit">
              Daftar
            </Button>
          </div>
        </div>
      </form>
      <div className="flex w-full justify-center gap-1">
        <Text>Sudah punya akun?</Text>
        <button
          onClick={() => router.replace('/login')}
          className="text-primary-04 hover:text-primary-03 focus:outline-none"
        >
          <Text weight="bold">Masuk di sini</Text>
        </button>
      </div>
    </>
  )
}

export default Register

Register.getLayout = (page) => {
  return <AuthLayout pageTitle="Register">{page}</AuthLayout>
}
