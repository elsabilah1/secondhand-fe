import Carousel from './CarouselHome'
import Head from 'next/head'
import Header from './Header'
import Loader from '../../base/Loader'
import ModalAcceptBid from '../../product/ModalAcceptBid'
import ModalChangeStatus from '../../product/ModalChangeStatus'
import NavMobile from './NavMobile'
import { useState } from 'react'

export default function MainLayout({
  children,
  pageTitle,
  headerTitle,
  headerTitleBold,
  arrowLink,
}) {
  const [showNav, setShowNav] = useState(false)

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
        {/* <ModalAcceptBid /> */}
        {/* <ModalChangeStatus /> */}
      </div>
    </>
  )
}
