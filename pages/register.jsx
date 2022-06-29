import Link from 'next/link'
import { withRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import Button from '../components/base/Button'
import InputField from '../components/base/InputField'
import Text from '../components/base/Text'
import AuthLayout from '../components/layout/AuthLayout'
import { register, reset } from '../store/slices/auth'

const initialState = {
  name: '',
  email: '',
  password: '',
}

export default withRouter(function Register({ router }) {
  const dispatch = useDispatch()
  const [formValues, setFormValues] = useState(initialState)
  // const { error } = useSelector((state) => state.auth)

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

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(reset())
    dispatch(register(formValues))
    // !error && router.push('/login')
  }

  return (
    <AuthLayout pageTitle="Register">
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
          <Button width="full" type="submit">
            Daftar
          </Button>
        </div>
      </form>
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
