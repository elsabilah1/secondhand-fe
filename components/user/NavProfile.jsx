import FeatherIcon from 'feather-icons-react'
import Link from 'next/link'
import Text from '../../components/base/Text'

export default function NavProfile() {
  return (
    <div className="flex justify-evenly gap-4 border py-1">
      <NavItem icon="home" title="Home" href="/" />
      <NavItem icon="bell" title="Notifikasi" href="/notification" />
      <NavItem icon="plus-circle" title="Jual" href="/dashboard/sell" />
      <NavItem icon="menu" title="Daftar Jual" href="/dashboard" />
      <NavItem icon="user" title="Akun" href="/profile" />
    </div>
  )
}

const NavItem = ({ title, icon, href }) => {
  return (
    <Link href={href} replace>
      <button className="grid place-items-center p-1 text-neutral-03 hover:text-primary-04">
        <FeatherIcon icon={icon} />
        <Text type="body/12">{title}</Text>
      </button>
    </Link>
  )
}
