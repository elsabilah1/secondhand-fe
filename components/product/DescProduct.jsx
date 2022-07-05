import Text from '../base/Text'

export default function DescProduct({ content }) {
  return (
    <div className="mb-20 mt-6 rounded-2xl border bg-neutral-01 px-4 py-4 shadow-sm md:mb-10">
      <div className="pb-4">
        <Text weight="bold">Deskripsi</Text>
      </div>
      <div className="text-neutral-03">
        <Text>{content}</Text>
      </div>
    </div>
  )
}
