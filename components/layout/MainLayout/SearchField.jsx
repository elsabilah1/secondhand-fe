import FeatherIcon from 'feather-icons-react'
import { useDispatch } from 'react-redux'
import { getProductList, searchProduct } from '../../../store/slices/product'
import Text from '../../base/Text'

export default function SearchField({ title }) {
  const dispatch = useDispatch()

  const handleSearch = (e) => {
    e.preventDefault()
    const keyword = e.target.keyword.value
    if (keyword) return dispatch(searchProduct(keyword))

    dispatch(getProductList())
  }

  return (
    <>
      <div className="md:hidden">
        <Text type="heading/20" weight="bold">
          {title}
        </Text>
      </div>
      <form
        onSubmit={handleSearch}
        className={`${
          title ? 'hidden md:flex' : 'flex'
        } w-full rounded-2xl bg-white px-6 py-3 md:bg-[#eeeeee]`}
      >
        <input
          className="w-full bg-transparent text-sm leading-5 text-neutral-05 placeholder:text-neutral-03 focus:outline-none"
          placeholder="Cari di sini ..."
          name="keyword"
        />
        <button type="submit" className="active:scale-95">
          <FeatherIcon icon="search" className="text-neutral-03" />
        </button>
      </form>
    </>
  )
}
