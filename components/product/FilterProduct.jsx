import React from 'react'
import FeatherIcon from 'feather-icons-react'
import Text from '../base/Text'
import cn from 'classnames'

const categories = [
  { id: 1, name: 'Semua' },
  { id: 2, name: 'Hobi' },
  { id: 3, name: 'Kendaraan' },
  { id: 4, name: 'Baju' },
  { id: 5, name: 'Elektronik' },
  { id: 6, name: 'Kesehatan' },
]

export default function FilterProduct() {
  const activeCat = 'Semua'
  const classes = cn(
    'flex gap-2 py-[12px] px-4 md:py-[14px] md:px-6 rounded-2xl active:scale-95 transition-all focus:outline-none focus:ring bg-primary-01 text-neutral-05 border-primary-01 hover:bg-primary-04 hover:text-neutral-01',
  )

  return (
    <div className="mb-10 space-y-4">
      <div className="md:hidden">
        <Text weight="medium">Telusuri Kategori</Text>
      </div>

      <div className="hidden md:block">
        <Text type="title/16" weight="bold">
          Telusuri Kategori
        </Text>
      </div>
      <div className="flex gap-4 overflow-x-auto">
        {categories.map((cat) => (
          <button className={classes} key={cat.id}>
            <FeatherIcon className="inline h-5 w-5" icon="search" />
            <Text>{cat.name}</Text>
          </button>
        ))}
      </div>
    </div>
  )
}
