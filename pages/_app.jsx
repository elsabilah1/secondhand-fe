import cookies from 'next-cookies'
import Router from 'next/router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { wrapper } from '../store'
import { fetchUser } from '../store/slices/auth'
import '../styles/globals.css'
import { _axios } from '../utils/Api'

const MyApp = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout || ((page) => page)

  Router.events.on('routeChangeStart', () => NProgress.start())
  Router.events.on('routeChangeComplete', () => NProgress.done())
  Router.events.on('routeChangeError', () => NProgress.done())

  NProgress.configure({ showSpinner: false })

  return getLayout(<Component {...pageProps} />)
}

MyApp.getInitialProps = wrapper.getInitialAppProps(
  (store) =>
    async ({ ctx }) => {
      const { token } = await cookies(ctx)

      _axios.defaults.headers['Authorization'] = `Bearer ${token}`
      await store.dispatch(fetchUser())
    }
)

export default wrapper.withRedux(MyApp)
