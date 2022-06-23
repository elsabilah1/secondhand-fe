import '../styles/globals.css'

import cookies from 'next-cookies'
import { fetchUser } from '../store/slices/auth'
import { wrapper } from '../store'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

MyApp.getInitialProps = wrapper.getInitialAppProps(
  (store) =>
    async ({ ctx }) => {
      const { token } = cookies(ctx)
      await store.dispatch(fetchUser(token))
    },
)

export default wrapper.withRedux(MyApp)
