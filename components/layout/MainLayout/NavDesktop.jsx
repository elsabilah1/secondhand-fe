import cn from 'classnames'
import FeatherIcon from 'feather-icons-react'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setNotifications } from '../../../store/slices/notification'
import { Get } from '../../../utils/Api'
import Button from '../../base/Button'
import Dropdown from '../../base/Dropdown'
import Text from '../../base/Text'
import MenuProfile from '../../user/MenuProfile'
import NotifItem from './NotifItem'

const NavDesktop = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const { user: userData } = useSelector((state) => state.auth)
  const { items } = useSelector((state) => state.notification)
  const [user] = useState(userData)

  const classes = cn(
    'hover:text-primary-03 active:scale-95 active:text-primary-05'
  )

  useEffect(() => {
    const fetchNotif = async () => {
      const res = await Get('/notifications?limit=5')
      if (res.data) {
        dispatch(setNotifications(res.data))
      } else {
        dispatch(setNotifications([]))
      }
    }
    fetchNotif()
  })

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

          <Dropdown icon="bell" isNotif>
            <div className="w-96">
              {items.length > 0 ? (
                items?.map((item) => <NotifItem key={item.id} data={item} />)
              ) : (
                <Text>Empty List</Text>
              )}
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
