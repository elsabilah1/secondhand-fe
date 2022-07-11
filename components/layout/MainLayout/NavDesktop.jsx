import cn from 'classnames'
import FeatherIcon from 'feather-icons-react'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import Button from '../../base/Button'
import Dropdown from '../../base/Dropdown'
import MenuProfile from '../../user/MenuProfile'
import NotifItem from './NotifItem'

const NavDesktop = ({ offers }) => {
  const router = useRouter()
  const { user: userData } = useSelector((state) => state.auth)
  const [user] = useState(userData)

  const classes = cn(
    'hover:text-primary-03 active:scale-95 active:text-primary-05'
  )

  return (
    <>
      {user ? (
        <div className="ml-6 hidden space-x-5 text-neutral-05 md:flex">
          <button
            className={classes}
            onClick={() => router.replace('/dashboard')}
          >
            <FeatherIcon icon="list" />
          </button>

          <Dropdown icon="bell">
            <div className="w-96">
              {offers?.map((item) => (
                <NotifItem key={item.id} data={item} />
              ))}
            </div>
          </Dropdown>

          <Dropdown icon="user">
            <div className="w-40">
              <MenuProfile dropdown />
            </div>
          </Dropdown>
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
}

export default NavDesktop
