import Text from "./Text"

export default function Notifikasi() {
  return (
    <div className="mx-auto my-6 max-w-2xl px-4 md:my-10">
    <div className="flex gap-3">
    <div className="h-12 w-12 rounded-xl bg-black"></div>
    <div className='flex justify-between w-full'>
    <div className="mb-1 h-full">
        <div className="mb-2 text-neutral-03 flex">
            <Text type="body/10">Penawaran Produk</Text>
        </div>
        <div className='space-y-1'>
            <Text>Jam Tangan Casio</Text>
            <Text>Rp 250.000</Text>
            <Text>Ditawar Rp 200.000</Text>
        </div>
        </div>
        <div className="mb-2 text-neutral-03 flex gap-2">
            <Text type="body/10">20 Apr, 14:04</Text>
            <div className="bg-danger w-2 h-2 rounded-full"></div>
        </div>
    </div>
    </div>
    <div className='border border-b'></div>
    </div>
  )
}
