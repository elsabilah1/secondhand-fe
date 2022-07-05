/* eslint-disable no-undef */
import Cookies from 'js-cookie'
import { useEffect } from 'react'
import { wrapper } from '../store'
import '../styles/globals.css'
import { _axios } from '../utils/Api'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const token = Cookies.get('token')
    if (token) {
      const requestInt = _axios.interceptors.request.use(
        (config) => {
          config.headers.Authorization = `Bearer ${token}`
          return config
        },
        (error) => {
          return Promise.reject(error.response)
        }
      )
      return () => {
        _axios.interceptors.request.eject(requestInt)
      }
    }
  }, [])

  return <Component {...pageProps} />
}

export default wrapper.withRedux(MyApp)
