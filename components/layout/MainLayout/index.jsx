/* eslint-disable react-hooks/exhaustive-deps */
import Head from 'next/head'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import Loader from '../../base/Loader'
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
  const [showNav, setShowNav] = useState(false)
  const { loading } = useSelector((state) => state.auth)

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
        <Carousel />
        <div className="mx-auto mb-20 w-full flex-1 px-4 md:w-10/12">
          {children}
        </div>
        <NavMobile showNav={showNav} setShowNav={setShowNav} />
      </div>
    </>
  )
}
