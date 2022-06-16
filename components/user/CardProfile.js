import Text from '../base/Text'

export default function CardProfile({ edit }) {
  return (
    <div className="flex items-center justify-between rounded-2xl p-4 shadow-low">
      <div className="flex items-center gap-4">
        <div className="h-12 w-12 rounded-xl bg-black"></div>
        <div className="">
          <Text weight="medium">Nama Penjual</Text>
          <div className="text-neutral-03">
            <Text type="body/10">Kota</Text>
          </div>
        </div>
      </div>
      {edit && (
        <button className="rounded-lg border border-primary-04 py-1 px-3">
          <Text type="body/12" weight="medium">
            Edit
          </Text>
        </button>
      )}
    </div>
  )
}
