import { useDispatch, useSelector } from 'react-redux'

import Button from '../../base/Button'
import FeatherIcon from 'feather-icons-react'
import Text from '../../base/Text'
import cn from 'classnames'
import { logout } from '../../../store/slices/auth'
import { withRouter } from 'next/router'

export default withRouter(function NavDesktop({ router }) {
  const dispatch = useDispatch()
  const { user, loading, error } = useSelector((state) => state.auth)

  const classes = cn(
    'hover:text-primary-03 active:scale-95 active:text-primary-05',
  )

  return (
    <>
      {user ? (
        <div className="ml-6 hidden space-x-5 text-neutral-05 md:inline">
          <button
            className={classes}
            onClick={() => router.replace('/dashboard')}
          >
            <FeatherIcon icon="list" />
          </button>
          <button className={classes} onClick={() => router.replace('/')}>
            <FeatherIcon icon="bell" />
          </button>
          <button className={classes} onClick={() => router.replace('/')}>
            <FeatherIcon icon="user" />
          </button>
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
        </div>
      ) : (
        <div className="hidden md:flex">
          <Button onClick={() => router.replace('/login')}>
            <span className="flex gap-2">
              <FeatherIcon icon="log-in" className="h-5 w-5" />
              Masuk
            </span>
          </Button>

          <div className="text-primary-03">
            <Text>{error}</Text>
          </div>
        </div>
      )}
    </>
  )
})
