import Button from '../../base/Button'
import FeatherIcon from 'feather-icons-react'
import cn from 'classnames'
import { withRouter } from 'next/router'
import Text from '../../base/Text'
import { useState } from 'react'
import axios from 'axios'
import Loader from '../../base/Loader'

export default withRouter(function NavDesktop({ router }) {
  const isLogin = false
  const [alert, setAlert] = useState('')
  const [loading, setLoading] = useState(false)

  const classes = cn(
    'hover:text-primary-03 active:scale-95 active:text-primary-05',
  )

  const handleLogout = async () => {
    setLoading(true)
    const res = await axios.post('/api/logout')
    setLoading(false)

    console.log(res.data.message)

    setAlert(res.data.message)

    if (res.data.success) {
      router.replace('/login')
    }
  }

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
          <Button onClick={() => handleLogout()}>
            <span className="flex gap-2">
              <FeatherIcon icon="log-in" className="h-5 w-5" />
              Logout
            </span>
          </Button>
          <div className="text-primary-03">
            <Text>{alert}</Text>
          </div>
        </div>
      )}
      {loading && <Loader />}
    </>
  )
})
