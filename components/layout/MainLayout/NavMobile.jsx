import { Transition } from '@headlessui/react'
import FeatherIcon from 'feather-icons-react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Fragment } from 'react'
import { useSelector } from 'react-redux'
import Button from '../../base/Button'
import Text from '../../base/Text'

const NavMobile = ({ showNav = true, setShowNav }) => {
  const router = useRouter()
  const { user, loading } = useSelector((state) => state.auth)

  return (
    <Transition appear show={showNav} as={Fragment}>
      <div>
        <Transition.Child
          as={Fragment}
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div
            className="fixed inset-0 z-40 bg-black/60"
            onClick={() => setShowNav(false)}
          />
        </Transition.Child>

        <Transition.Child
          as={Fragment}
          enter="transition ease-in-out duration-300 transform"
          enterFrom="-translate-x-full"
          enterTo="translate-x-0"
          leave="transition ease-in-out duration-300 transform"
          leaveFrom="translate-x-0"
          leaveTo="-translate-x-full"
        >
          <div className="fixed inset-0 z-50 h-full w-1/2 bg-white py-8 pl-4 pr-6">
            <div className="mb-4 flex items-center justify-between">
              <Text weight="bold">Second Hand</Text>
              <button onClick={() => setShowNav(false)}>
                <FeatherIcon icon="x" />
              </button>
            </div>
            {loading ? (
              <div></div>
            ) : user ? (
              <div className="grid gap-4">
                <Link href="/notification" replace>
                  <a className="hover:text-primary-03">
                    <Text>Notifikasi</Text>
                  </a>
                </Link>
                <Link
                  href={router.pathname === '/' ? '/dashboard' : '/'}
                  replace
                >
                  <a className="hover:text-primary-03">
                    <Text>
                      {router.pathname === '/' ? 'Daftar Jual' : 'Home'}
                    </Text>
                  </a>
                </Link>
                <Link href="/profile" replace>
                  <a className="hover:text-primary-03">
                    <Text>Akun Saya</Text>
                  </a>
                </Link>
              </div>
            ) : (
              <div>
                <Button onClick={() => router.replace('/login')}>
                  <span className="flex gap-2">
                    <FeatherIcon icon="log-in" className="h-5 w-5" />
                    Masuk
                  </span>
                </Button>
              </div>
            )}
          </div>
        </Transition.Child>
      </div>
    </Transition>
  )
}

export default NavMobile
