import FeatherIcon from 'feather-icons-react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Text from '../../base/Text'
import NavDesktop from './NavDesktop'
import SearchField from './SearchField'

const Header = ({ headerTitle, headerTitleBold, setShowNav, arrowLink }) => {
  const router = useRouter()

  return (
    <div
      className={`${
        headerTitleBold || headerTitle ? 'bg-white' : ''
      } sticky top-0 z-30 md:bg-white md:shadow`}
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="relative mx-auto flex px-4 py-2 md:w-10/12 md:py-3">
          <div
            className={`flex ${
              headerTitle ? '' : 'flex-1'
            } items-center gap-4 md:gap-6`}
          >
            <div className="z-10 hidden items-center md:flex">
              <button
                onClick={() => router.push('/')}
                className="flex cursor-pointer"
              >
                <Image src="/logo.png" width={100} height={34} alt="logo" />
              </button>
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
              <div className="relative w-full py-[14px] md:hidden">
                <button
                  className="absolute"
                  onClick={() => router.replace(arrowLink)}
                >
                  <FeatherIcon icon="arrow-left" />
                </button>
                <div className="grid h-full place-items-center">
                  <Text weight="medium">{headerTitle}</Text>
                </div>
              </div>
            </>
          ) : (
            <NavDesktop />
          )}
        </div>
      </div>
    </div>
  )
}

export default Header
