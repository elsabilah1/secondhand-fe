import Cookies from 'js-cookie'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { _axios } from '../../../utils/Api'
import Loader from '../../base/Loader'
import Carousel from './CarouselHome'
import Header from './Header'
import NavMobile from './NavMobile'

const MainLayout = ({
  children,
  pageTitle,
  headerTitle,
  headerTitleBold,
  arrowLink,
}) => {
  const [showNav, setShowNav] = useState(false)
  const { loading } = useSelector((state) => state.auth)

  useEffect(() => {
    const token = Cookies.get('token')
    if (token) {
      const requestInt = _axios.interceptors.request.use(
        (config) => {
          config.headers.Authorization = `Bearer ${token}`
          return config
        },
        (error) => {
          // eslint-disable-next-line no-undef
          return Promise.reject(error.response)
        }
      )
      return () => {
        _axios.interceptors.request.eject(requestInt)
      }
    }
  }, [])

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content="secondhand web" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {loading && <Loader />}
      <Header
        headerTitle={headerTitle}
        headerTitleBold={headerTitleBold}
        setShowNav={setShowNav}
        arrowLink={arrowLink}
      />
      <div className="relative mx-auto flex min-h-screen max-w-[1440px] flex-col">
        <Carousel data-testid="carousel-home" />
        <div className="mx-auto mb-20 w-full flex-1 px-4 md:w-10/12">
          {children}
        </div>
        <NavMobile showNav={showNav} setShowNav={setShowNav} />
      </div>
    </>
  )
}

export default MainLayout
