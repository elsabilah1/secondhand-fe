import Image from 'next/image'
import Link from 'next/link'
import Text from '../base/Text'

const CardProduct = ({ item, href, priceOffer, statusOffer, variant }) => {
  const product = item.Product || item
  const categories = product?.ProductCategories?.map((item) => item.category)

  return (
    <Link href={href} passHref>
      <div className="relative h-60 cursor-pointer rounded border px-2 py-4 shadow-sm hover:scale-105">
        {!product?.status && variant !== 'sold' && (
          <div className="absolute top-0 left-0 z-10 bg-success px-3 py-1 text-white shadow">
            <Text type="body/12">terjual</Text>
          </div>
        )}
        {!statusOffer && variant === 'wishlist' && (
          <div className="absolute top-0 left-0 z-10 bg-danger px-3 py-1 text-white shadow">
            <Text type="body/12">batal terjual</Text>
          </div>
        )}

        <div className="relative mb-2 h-32 w-full border">
          <Image
            src={product.ProductResources[0].filename}
            alt={product.name}
            layout="fill"
            objectFit="contain"
            className="rounded"
            priority={true}
          />
          {priceOffer && (
            <div className="absolute bottom-0 w-full bg-secondary-05 py-1 pl-2">
              <Text type="body/10" weight="medium">
                Ditawar Rp. {priceOffer.toLocaleString()}
              </Text>
            </div>
          )}
        </div>

        <div className="mb-1 line-clamp-1">
          <Text weight="bold">{product.name}</Text>
        </div>

        <div className="mb-2 text-neutral-03">
          <Text type="body/10">{categories?.join(', ')}</Text>
        </div>

        <Text>Rp. {product.price.toLocaleString()}</Text>
      </div>
    </Link>
  )
}

export default CardProduct
