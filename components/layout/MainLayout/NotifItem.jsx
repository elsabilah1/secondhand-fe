// import Image from 'next/image'
import Image from 'next/image'
import Link from 'next/link'
import Text from '../../base/Text'

const NotifItem = ({ data }) => {
  return (
    <Link
      href={
        data.productOfferId
          ? `/dashboard/info/${data.productOfferId}`
          : `/product/${data.productId}`
      }
      passHref
    >
      <div className="my-3 cursor-pointer border-b px-3 pb-1">
        <div className="flex justify-between gap-3">
          <div className=" grid flex-1 grid-cols-5 items-center gap-3">
            <div className="w-12">
              <Image
                src={data.Product.ProductResources[0].filename}
                alt={data.Product.name}
                width={48}
                height={48}
                objectFit="contain"
                className="rounded-xl"
              />
            </div>
            <div className="col-span-4">
              <div className="mb-2 text-neutral-03">
                <Text type="body/10">{data.type}</Text>
              </div>
              <div className="space-y-1">
                <div className="line-clamp-1">
                  <Text weight="bold">{data.Product.name}</Text>
                </div>
                <div>
                  <Text type="body/12">
                    Rp. {data.Product.price.toLocaleString()}
                  </Text>
                  {data.productOfferId && (
                    <Text type="body/12">
                      Ditawar Rp.
                      {data.ProductOffer.priceOffer.toLocaleString()}
                    </Text>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="mb-2 flex gap-2 text-neutral-03">
            <Text type="body/10">
              {new Date(data.createdAt).toLocaleDateString()}
            </Text>
            {data.status === false && (
              <div className="h-2 w-2 rounded-full bg-danger"></div>
            )}
          </div>
        </div>
      </div>
    </Link>
  )
}

export default NotifItem
