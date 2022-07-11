/* eslint-disable no-undef */
import { wrapper } from '../store'
import '../styles/globals.css'

const MyApp = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout || ((page) => page)

  return getLayout(<Component {...pageProps} />)
}

export default wrapper.withRedux(MyApp)
