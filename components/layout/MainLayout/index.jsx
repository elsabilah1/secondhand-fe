import Cookies from 'js-cookie'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { Get, _axios } from '../../../utils/Api'
import Carousel from './CarouselHome'
import Header from './Header'
import NavMobile from './NavMobile'

const MainLayout = ({
  children,
  pageTitle,
  headerTitle,
  headerTitleBold,
  arrowLink,
  manual,
}) => {
  const [showNav, setShowNav] = useState(false)
  const [items, setItems] = useState()

  const fetchData = async () => {
    const res = await Get('/notifications')
    setItems(res.data)
  }

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

      fetchData()
      return () => {
        _axios.interceptors.request.eject(requestInt)
      }
    }
  }, [])

  if (manual) return children

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content="secondhand web" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header
        headerTitle={headerTitle}
        headerTitleBold={headerTitleBold}
        setShowNav={setShowNav}
        arrowLink={arrowLink}
        offers={items}
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
