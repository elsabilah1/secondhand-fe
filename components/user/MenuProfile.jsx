import FeatherIcon from 'feather-icons-react'
import { withRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { logout } from '../../store/slices/auth'
import Text from '../base/Text'

export default withRouter(function MenuProfile({ router, dropdown }) {
  const dispatch = useDispatch()

  return (
    <div className={dropdown ? 'space-y-3 py-3' : 'space-y-4 py-4'}>
      <MenuItem
        icon="edit-3"
        title="Ubah Akun"
        onClick={() => router.replace('/profile/edit')}
        dropdown={dropdown}
      />
      <MenuItem
        icon="settings"
        title="Pengaturan Akun"
        onClick={() => router.replace('/')}
        dropdown={dropdown}
      />
      <MenuItem
        icon="log-out"
        title="Keluar"
        onClick={() => {
          dispatch(logout())
          router.push('/')
        }}
        dropdown={dropdown}
      />
    </div>
  )
})

const MenuItem = ({ title, onClick, icon, dropdown }) => {
  return (
    <div className={dropdown ? '' : 'border-b pb-2'}>
      <button
        className="flex items-center gap-4 hover:text-primary-03"
        onClick={onClick}
      >
        <FeatherIcon className="inline text-primary-04" icon={icon} />
        <Text weight="medium">{title}</Text>
      </button>
    </div>
  )
}
