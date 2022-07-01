import Head from 'next/head'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchUser } from '../../../store/slices/auth'
import Carousel from './CarouselHome'
import Header from './Header'
import NavMobile from './NavMobile'

export default function MainLayout({
  children,
  pageTitle,
  headerTitle,
  headerTitleBold,
  arrowLink,
}) {
  const dispatch = useDispatch()
  const [showNav, setShowNav] = useState(false)

  useEffect(() => {
    dispatch(fetchUser())
  }, [])

  return (
    <>
      <Head>
        <title>SecondHand | {pageTitle}</title>
        <meta name="description" content="secondhand web" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header
        headerTitle={headerTitle}
        headerTitleBold={headerTitleBold}
        setShowNav={setShowNav}
        arrowLink={arrowLink}
      />
      <div className="relative mx-auto flex min-h-screen max-w-[1440px] flex-col">
        <Carousel />
        <div className="mx-auto mb-20 w-full flex-1 px-4 md:w-10/12">
          {children}
        </div>
        <NavMobile showNav={showNav} setShowNav={setShowNav} />
      </div>
    </>
  )
}
