import FeatherIcon from 'feather-icons-react'
import { useDispatch } from 'react-redux'
import { setKeyword } from '../../../store/slices/product'
import Text from '../../base/Text'

const SearchField = ({ title }) => {
  const dispatch = useDispatch()

  const handleSearch = (e) => {
    e.preventDefault()
    const keyword = e.target.keyword.value
    dispatch(setKeyword(keyword))
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
        } h-10 w-full items-center rounded-full bg-white px-6 md:bg-[#eeeeee]`}
      >
        <input
          className="w-full bg-transparent text-sm leading-5 text-neutral-05 placeholder:text-xs placeholder:text-neutral-03 focus:outline-none"
          placeholder="Cari di sini..."
          name="keyword"
        />
        <button type="submit" className="active:scale-95">
          <FeatherIcon icon="search" className="h-5 w-5 text-neutral-03" />
        </button>
      </form>
    </>
  )
}

export default SearchField
