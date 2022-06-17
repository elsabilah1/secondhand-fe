import Head from 'next/head'
import Header from './Header'
import NavMobile from './NavMobile'
import Carousel from './CarouselHome'
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

      <div className="relative mx-auto flex min-h-screen flex-col items-center">
        <div className="w-full max-w-[1440px]">
          <Header
            headerTitle={headerTitle}
            headerTitleBold={headerTitleBold}
            setShowNav={setShowNav}
            arrowLink={arrowLink}
          />
        </div>
        <Carousel />
        <div className="w-full max-w-[1440px] flex-1">{children}</div>
        <NavMobile showNav={showNav} setShowNav={setShowNav} />
      </div>
    </>
  )
}
