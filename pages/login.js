import LayoutAuth from '../components/layout/LayoutAuth'
import InputField from '../components/base/InputField'

export default function Login() {
  return (
    <LayoutAuth>
      <div className='w-full'>
      Masuk
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
    </LayoutAuth>
  )
}
