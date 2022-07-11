import Image from 'next/image'
import Link from 'next/link'
import Text from '../base/Text'

const CardProduct = ({ item }) => {
  const product = item.Product || item
  const categories = product?.ProductCategories?.map((item) => item.category)

  return (
    <Link href={`/product/${product.id}`} passHref>
      <div className="cursor-pointer rounded border px-2 py-4 shadow-sm">
        <div className="relative mb-2 h-24 w-full">
          <Image
            src={product.ProductResources[0].filename}
            alt={product.name}
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
          <Text type="body/10">{categories?.join(', ')}</Text>
        </div>
        <Text>Rp.{product.price}</Text>
      </div>
    </Link>
  )
}

export default CardProduct
