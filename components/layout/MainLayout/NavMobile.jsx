import { useDispatch, useSelector } from 'react-redux'

import Button from '../../base/Button'
import FeatherIcon from 'feather-icons-react'
import { Fragment } from 'react'
import Link from 'next/link'
import Text from '../../base/Text'
import { Transition } from '@headlessui/react'
import { logout } from '../../../store/slices/auth'
import { withRouter } from 'next/router'

export default withRouter(function NavMobile({
  router,
  showNav = true,
  setShowNav,
}) {
  const dispatch = useDispatch()
  const { user, loading, error } = useSelector((state) => state.auth)

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
          <div className="fixed inset-0 z-40 bg-black/60" />
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
            {user ? (
              <div className="grid gap-4">
                <Link href="/notifikasi" replace>
                  <a className="hover:text-primary-03">
                    <Text>Notifikasi</Text>
                  </a>
                </Link>
                <Link href="/dashboard" replace>
                  <a className="hover:text-primary-03">
                    <Text>Daftar Jual</Text>
                  </a>
                </Link>
                <Link href="/profile" replace>
                  <a className="hover:text-primary-03">
                    <Text>Akun Saya</Text>
                  </a>
                </Link>
                <button
                  className="rounded border px-3 py-2 text-sm disabled:animate-pulse disabled:bg-neutral-02"
                  onClick={() => dispatch(logout())}
                  disabled={loading}
                >
                  <span className="flex gap-2">
                    <FeatherIcon icon="log-out" className="h-5 w-5" />
                    Logout
                  </span>
                </button>
                <p>{error}</p>
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
})
