import { Tab } from '@headlessui/react'
import cn from 'classnames'
import FeatherIcon from 'feather-icons-react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setSortBy } from '../../store/slices/product'
import Text from '../base/Text'

const NavDashboard = () => {
  const [categories] = useState({
    all: {
      title: 'Semua Produk',
      titleMobile: 'Produk',
      icon: 'box',
    },
    wishlist: {
      title: 'Diminati',
      icon: 'heart',
      sort: 'wishlist',
    },
    sold: {
      title: 'Terjual',
      icon: 'dollar-sign',
      sort: 'sold',
    },
  })

  return (
    <div className="rounded-2xl md:border md:p-6 md:shadow-md">
      <div className="hidden md:inline">
        <Text type="title/16" weight="medium">
          Kategori
        </Text>
      </div>
      <div className="flex gap-4 overflow-x-auto py-1 md:block">
        {Object.keys(categories).map((category, idx) => (
          <div key={idx}>
            <NavItem
              sort={categories[category].sort || ''}
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

const NavItem = ({ icon, title, titleMobile, sort }) => {
  const dispatch = useDispatch()

  return (
    <Tab
      className={({ selected }) =>
        cn(
          'group flex flex-none justify-between rounded-xl px-4 py-3 focus:outline-none md:w-full md:bg-white md:py-4 md:px-0',
          selected
            ? 'bg-primary-03 text-white md:bg-white md:text-primary-03'
            : 'bg-primary-01'
        )
      }
      onClick={() => dispatch(setSortBy(sort))}
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

export default NavDashboard
