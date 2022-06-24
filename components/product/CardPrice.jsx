import Text from '../base/Text'

export default function CardPrice({ children }) {
  return (
    <div>
      <div className="mx-auto hidden w-full rounded-2xl border bg-neutral-01 p-6 shadow-sm md:mx-0 md:block">
        <div className="mt-4 mb-2">
          <Text weight="bold">Jam Tangan Casio</Text>
        </div>
        <div className="mb-4">
          <Text>Aksesoris</Text>
        </div>
        <Text>Rp 250.000</Text>
        <div className="mt-6 mb-2 space-y-3.5">{children}</div>
      </div>

      <div className="mx-auto rounded-2xl border bg-neutral-01 px-6 py-4 shadow-sm md:hidden">
        <Text weight="bold">Jam Tangan Casio</Text>
        <div className="mb-2 text-neutral-03">
          <Text type="body/10">Aksesoris</Text>
        </div>
        <Text>Rp 250.000</Text>
      </div>
    </div>
  )
}
