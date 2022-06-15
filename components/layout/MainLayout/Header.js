import Image from 'next/image'
import SearchField from './SearchField'
import FeatherIcon from 'feather-icons-react'
import NavDesktop from './NavDesktop'
import Text from '../../base/Text'
import Link from 'next/link'

export default function Header({ headerTitle, setShowNav }) {
  return (
    <div className="sticky top-0 md:bg-white md:shadow-high">
      <div className="mx-auto flex items-center px-4 py-[18px] md:w-10/12">
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

          <button
            onClick={() => setShowNav(true)}
            className="rounded-2xl bg-white p-3 text-neutral-05 hover:bg-primary-03 hover:text-white active:scale-95 active:bg-primary-05 md:hidden"
          >
            <FeatherIcon icon="menu" />
          </button>

          {!headerTitle && (
            <div className="w-full md:w-96">
              <SearchField />
            </div>
          )}
        </div>
        {headerTitle ? (
          <div className="flex-1 text-center">
            <Text type="title/16">{headerTitle}</Text>
          </div>
        ) : (
          <NavDesktop />
        )}
      </div>
    </div>
  )
}
