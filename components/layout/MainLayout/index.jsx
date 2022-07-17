import Head from 'next/head'
import { useState } from 'react'
import { Toaster } from 'react-hot-toast'
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

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content="secondhand web" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {manual ? (
        children
      ) : (
        <>
          <Toaster
            toastOptions={{
              error: { className: 'alert-error' },
              success: { className: 'alert-success' },
            }}
          />
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
      )}
    </>
  )
}

export default MainLayout
