import FeatherIcon from 'feather-icons-react'
import Image from 'next/image'
import Link from 'next/link'
import NavDesktop from './NavDesktop'
import SearchField from './SearchField'
import Text from '../../base/Text'
import { withRouter } from 'next/router'

export default withRouter(function Header({
  router,
  headerTitle,
  headerTitleBold,
  setShowNav,
  arrowLink,
}) {
  return (
    <div
      className={`${
        headerTitleBold || headerTitle ? 'bg-white' : ''
      } sticky top-0 z-30 md:bg-white md:shadow-high`}
    >
      <div className="relative mx-auto flex items-center px-4 py-2 md:w-10/12 md:py-[18px]">
        <div
          className={`flex ${
            headerTitle ? '' : 'flex-1'
          } items-center gap-4 md:gap-6`}
        >
          <div className="hidden md:flex">
            <Link href="/" replace passHref>
              <Image src="/logo.png" width={100} height={34} alt="logo" />
            </Link>
          </div>

          {!headerTitle && (
            <>
              <button
                onClick={() => setShowNav(true)}
                className="rounded-2xl bg-white p-3 text-neutral-05 hover:bg-primary-03 hover:text-white active:scale-95 active:bg-primary-05 md:hidden"
              >
                <FeatherIcon icon="menu" />
              </button>
              <div className="w-full md:w-96">
                <SearchField title={headerTitleBold} />
              </div>
            </>
          )}
        </div>
        {headerTitle ? (
          <>
            <div className="absolute inset-0 hidden place-items-center md:grid">
              <Text type="title/16">{headerTitle}</Text>
            </div>
            <div className="md:hidden">
              <button
                className="z-20 py-[14px]"
                onClick={() => router.replace('/')}
              >
                <FeatherIcon icon="arrow-left" />
              </button>
              <div className="absolute inset-0 z-10 grid place-items-center">
                <Text weight="medium">{headerTitle}</Text>
              </div>
            </div>
          </>
        ) : (
          <NavDesktop />
        )}
      </div>
    </div>
  )
})
