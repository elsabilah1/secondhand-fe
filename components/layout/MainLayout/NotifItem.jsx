import Image from 'next/image'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { Get, Put } from '../../../utils/Api'
import Text from '../../base/Text'

const NotifItem = ({ data }) => {
  const router = useRouter()
  const { user } = useSelector((state) => state.auth)

  const handleNotif = async () => {
    await Put(`/notifications/${data.id}`)

    if (data.productOfferId && data.ProductOffer.buyerId !== user.id) {
      const tsData =
        data.status !== false
          ? await Get('/transactions').then((res) =>
              res.data.find(
                (item) => item.productOfferId === data.productOfferId
              )
            )
          : undefined

      if (tsData) {
        router.push(`/dashboard/info/${tsData.id}?status=sold`)
      } else {
        router.push(`/dashboard/info/${data.productOfferId}`)
      }
    } else if (data.type === 'Berhasil di terbitkan') {
      router.push(`/product/${data.productId}`)
    } else {
      router.reload()
    }
  }

  return (
    <div className="my-3 cursor-pointer border-b pb-1" onClick={handleNotif}>
      <div className="flex justify-between gap-3">
        <div className="grid flex-1 grid-cols-5 items-center gap-3">
          <div>
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
              {data?.ProductOffer?.status === true ? (
                <div className="text-success">
                  <Text type="body/10">Tawaran Diterima</Text>
                </div>
              ) : data?.ProductOffer?.status === false ? (
                <div className="text-danger">
                  <Text type="body/10">Tawaran Ditolak</Text>
                </div>
              ) : (
                <Text type="body/10">{data.type}</Text>
              )}
            </div>
            <div className="space-y-1">
              <div className="line-clamp-1">
                <Text weight="bold">{data.Product.name}</Text>
              </div>
              <div>
                <div
                  className={
                    data?.ProductOffer?.status === true ? 'line-through' : ''
                  }
                >
                  <Text type="body/12">
                    Rp. {data.Product.price.toLocaleString()}
                  </Text>
                </div>
                {data.productOfferId && (
                  <Text type="body/12">
                    {data?.ProductOffer.status === true && 'Berhasil '}
                    Ditawar Rp.
                    {data.ProductOffer.priceOffer.toLocaleString()}
                  </Text>
                )}
                {data.description && (
                  <div className="text-neutral-03">
                    <Text type="body/10">{data.description}</Text>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="mb-2 flex gap-2 text-neutral-03">
          <Text type="body/10">
            {new Date(data.updatedAt).toLocaleDateString()}
          </Text>
          {data.status === false && (
            <div className="h-2 w-2 rounded-full bg-danger"></div>
          )}
        </div>
      </div>
    </div>
  )
}

export default NotifItem
