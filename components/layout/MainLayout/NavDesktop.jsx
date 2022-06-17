import Button from '../../base/Button'
import FeatherIcon from 'feather-icons-react'
import cn from 'classnames'
import { withRouter } from 'next/router'

export default withRouter(function NavDesktop({ router }) {
  const isLogin = true

  const classes = cn(
    'hover:text-primary-03 active:scale-95 active:text-primary-05',
  )

  return (
    <>
      {isLogin ? (
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
        </div>
      ) : (
        <div className="hidden md:flex">
          <Button onClick={() => router.replace('/login')}>
            <span className="flex gap-2">
              <FeatherIcon icon="log-in" className="h-5 w-5" />
              Masuk
            </span>
          </Button>
        </div>
      )}
    </>
  )
})
