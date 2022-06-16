import { useRouter } from 'next/router'
import FeatherIcon from 'feather-icons-react'
import cn from 'classnames'
import Button from '../../base/Button'

export default function NavDesktop() {
  const router = useRouter()
  const isLogin = false

  const classes = cn(
    'hover:text-primary-03 active:scale-95 active:text-primary-05'
  )

  return (
    <>
      {isLogin ? (
        <div className="ml-6 hidden space-x-5 text-neutral-05 md:inline">
          <button className={classes} onClick={() => router.replace('/')}>
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
          <Button onClick={() => router.replace('/')}>
            <span className="flex gap-2">
              <FeatherIcon icon="log-in" className="h-5 w-5" />
              Masuk
            </span>
          </Button>
        </div>
      )}
    </>
  )
}
