import Router from 'next/router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { wrapper } from '../store'
import '../styles/globals.css'

const MyApp = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout || ((page) => page)

  Router.events.on('routeChangeStart', () => NProgress.start())
  Router.events.on('routeChangeComplete', () => NProgress.done())
  Router.events.on('routeChangeError', () => NProgress.done())

  NProgress.configure({ showSpinner: false })

  return getLayout(<Component {...pageProps} />)
}

export default wrapper.withRedux(MyApp)
