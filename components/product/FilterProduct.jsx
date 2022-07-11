import cn from 'classnames'
import FeatherIcon from 'feather-icons-react'
import Text from '../base/Text'

const FilterProduct = ({ data, cat, setCat }) => {
  const classes = (active) =>
    cn(
      'flex gap-2 py-[12px] px-4 md:py-[14px] md:px-6 rounded-2xl active:scale-95 transition-all focus:outline-none focus:ring  hover:bg-primary-04 hover:text-neutral-01',
      active
        ? 'bg-primary-04 text-neutral-01'
        : 'bg-primary-01 text-neutral-05 border-primary-01'
    )

  return (
    <div className="z-10 mb-10 space-y-4">
      <div className="relative mt-[35vh] sm:mt-0 md:hidden">
        <Text weight="medium">Telusuri Kategori</Text>
      </div>

      <div className="hidden md:block">
        <Text type="title/16" weight="bold">
          Telusuri Kategori
        </Text>
      </div>
      <div className="relative flex gap-4 overflow-x-auto p-1">
        <button className={classes(cat === null)} onClick={() => setCat(null)}>
          <FeatherIcon className="inline h-5 w-5" icon="search" />
          <Text>Semua</Text>
        </button>
        {data.map((item) => (
          <button
            className={classes(cat === item.category)}
            key={item.id}
            onClick={() => setCat(item.category)}
          >
            <FeatherIcon className="inline h-5 w-5" icon="search" />
            <Text>{item.category}</Text>
          </button>
        ))}
      </div>
    </div>
  )
}

export default FilterProduct
