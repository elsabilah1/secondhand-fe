import Image from 'next/image'
import Link from 'next/link'
import Text from '../base/Text'

export default function CardProduct({product}) {
  return (
    <Link href={`/product/${product.id}`} passHref>
      <div className="cursor-pointer rounded border px-2 py-4 shadow-sm">
        <div className="relative mb-2 h-24 w-full">
          <Image
            src="/sample_product.png"
            alt="name"
            layout="fill"
            objectFit="cover"
            className="rounded"
            priority={true}
          />
        </div>

        <div className="mb-1">
          <Text>{product.name}</Text>
        </div>

        <div className="mb-2 text-neutral-03">
          <Text type="body/10">Aksesoris</Text>
        </div>
        <Text>Rp.{product.price}</Text>
      </div>
    </Link>
  )
}
