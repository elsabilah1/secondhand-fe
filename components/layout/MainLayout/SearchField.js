import FeatherIcon from 'feather-icons-react'

export default function SearchField() {
  const handleSearch = (e) => {
    e.preventDefault()
    const keyword = e.target.keyword.value

    console.log(keyword)
  }
  return (
    <form
      onSubmit={handleSearch}
      className="flex w-full rounded-2xl bg-white px-6 py-3 md:bg-[#eeeeee]"
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
  )
}
