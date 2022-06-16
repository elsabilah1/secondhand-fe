import Head from 'next/head'
import { useState } from 'react'
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
        <div className="flex-1">{children}</div>
        <NavMobile showNav={showNav} setShowNav={setShowNav} />
      </div>
    </>
  )
}
