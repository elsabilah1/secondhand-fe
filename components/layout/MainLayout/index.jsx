import Carousel from './CarouselHome'
import Head from 'next/head'
import Header from './Header'
import NavMobile from './NavMobile'
import { useState } from 'react'
import ModalMakeBid from '../../product/ModalMakeBid'
import ModalAcceptBid from '../../product/ModalAcceptBid'
import ModalChangeStatus from '../../product/ModalChangeStatus'
import Loader from '../../base/Loader'

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

      <div className="relative mx-auto flex min-h-screen max-w-[1440px] flex-col">
        <Header
          headerTitle={headerTitle}
          headerTitleBold={headerTitleBold}
          setShowNav={setShowNav}
          arrowLink={arrowLink}
        />
        <Carousel />
        <div className="flex-1">{children}</div>
        <NavMobile showNav={showNav} setShowNav={setShowNav} />
        {/* <ModalMakeBid /> */}
        {/* <ModalAcceptBid /> */}
        {/* <ModalChangeStatus /> */}
      </div>
    </>
  )
}
