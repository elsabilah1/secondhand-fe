import Text from '../../base/Text'

export default function NotifItem() {
  return (
    <div className="my-3 border-b px-3 pb-1">
      <div className="flex justify-between gap-3">
        <div className="flex gap-3">
          <div className="h-12 w-12 rounded-xl bg-black"></div>
          <div>
            <div className="mb-2 text-neutral-03">
              <Text type="body/10">Penawaran Produk</Text>
            </div>
            <div className="space-y-1">
              <Text>Jam Tangan Casio</Text>
              <Text>Rp 250.000</Text>
              <Text>Ditawar Rp 200.000</Text>
            </div>
          </div>
        </div>

        <div className="mb-2 flex gap-2 text-neutral-03">
          <Text type="body/10">20 Apr, 14:04</Text>
          <div className="h-2 w-2 rounded-full bg-danger"></div>
        </div>
      </div>
    </div>
  )
}
