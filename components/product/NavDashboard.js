import Text from '../base/Text'
import FeatherIcon from 'feather-icons-react'

export default function NavDashboard() {
  return (
    <div className="rounded-2xl md:p-6 md:shadow-high">
      <div className="hidden md:inline">
        <Text type="title/16" weight="medium">
          Kategori
        </Text>
      </div>
      <div className="flex gap-4 overflow-x-auto md:block">
        <NavItem icon="box" title="Semua Produk" titleMobile="Produk" />
        <div className="hidden border-b border-neutral-02 md:flex"></div>
        <NavItem icon="heart" title="Diminati" />
        <div className="hidden border-b border-neutral-02 md:flex"></div>
        <NavItem icon="dollar-sign" title="Terjual" />
      </div>
    </div>
  )
}

const NavItem = ({ icon, title, titleMobile }) => {
  return (
    <div className="flex-none">
      <button className="group flex w-full justify-between rounded-xl bg-primary-01 px-4  py-3 active:text-white group-active:text-primary-03 md:bg-white md:py-4 md:px-0 md:active:bg-white md:active:text-primary-03">
        <div className="flex gap-2">
          <FeatherIcon
            icon={icon}
            className="h-5 w-5 text-neutral-03 group-active:text-primary-03 md:h-6 md:w-6"
          />
          <div className="hidden md:inline">
            <Text type="title/16" weight="medium">
              {title}
            </Text>
          </div>
          <div className="md:hidden">
            <Text>{titleMobile ?? title}</Text>
          </div>
        </div>
        <FeatherIcon
          icon="chevron-right"
          className="hidden text-neutral-02 group-active:text-primary-03 md:flex"
        />
      </button>
    </div>
  )
}
