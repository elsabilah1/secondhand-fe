import FeatherIcon from 'feather-icons-react'
import { Tab } from '@headlessui/react'
import Text from '../base/Text'
import cn from 'classnames'
import { useState } from 'react'

export default function NavDashboard() {
  const [categories] = useState({
    all: {
      title: 'Semua Produk',
      titleMobile: 'Produk',
      icon: 'box',
    },
    wishlist: {
      title: 'Diminati',
      icon: 'heart',
    },
    sold: {
      title: 'Terjual',
      icon: 'dollar-sign',
    },
  })

  return (
    <div className="rounded-2xl md:border md:p-6 md:shadow-md">
      <div className="hidden md:inline">
        <Text type="title/16" weight="medium">
          Kategori
        </Text>
      </div>
      <div className="flex gap-4 overflow-x-auto md:block">
        {Object.keys(categories).map((category, idx) => (
          <div key={idx}>
            <NavItem
              icon={categories[category].icon}
              title={categories[category].title}
              titleMobile={categories[category].titleMobile}
            />
            {idx !== 2 && (
              <div className="hidden border-b border-neutral-02 md:flex" />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

const NavItem = ({ icon, title, titleMobile }) => {
  return (
    <Tab
      className={({ selected }) =>
        cn(
          'group flex flex-none justify-between rounded-xl px-4 py-3 focus:outline-none md:w-full md:bg-white md:py-4 md:px-0',
          selected
            ? 'bg-primary-03 text-white md:bg-white md:text-primary-03'
            : 'bg-primary-01',
        )
      }
    >
      <div className="flex items-center gap-2">
        <FeatherIcon icon={icon} className="h-5 w-5 md:h-6 md:w-6" />
        <div className="hidden md:inline">
          <Text type="title/16" weight="medium">
            {title}
          </Text>
        </div>
        <div className="md:hidden">
          <Text>{titleMobile ?? title}</Text>
        </div>
      </div>
      <FeatherIcon icon="chevron-right" className="hidden md:flex" />
    </Tab>
  )
}
