import Image from 'next/image'
import Link from 'next/link'
import Modal from '../base/Modal'
import Text from '../base/Text'

const ModalAcceptOffer = ({ isOpen = false, setIsOpen, item, product }) => {
  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      title="Yeay kamu berhasil mendapat harga yang sesuai"
    >
      <div className="mt-4 mb-6">
        <div className="mb-4 text-neutral-03">
          <Text>
            Segera hubungi pembeli melalui whatsapp untuk transaksi selanjutnya
          </Text>
        </div>

        <div className="mb-6 space-y-4 rounded-2xl bg-[#eeeeee] p-4 shadow-high">
          <div className="mb- text-center">
            <Text weight="medium">Product Match</Text>
          </div>

          <div className="flex gap-4">
            <div className="relative h-12 w-12">
              <Image
                src={item.User.Profile.profilePicture}
                alt="product"
                layout="fill"
                objectFit="cover"
                className={item.User.Profile.name}
              />
            </div>
            <div>
              <Text weight="medium">{item.User.Profile.name}</Text>
              <div className="text-neutral-03">
                <Text type="body/10">{item.User.Profile.City.city}</Text>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <>
              <div className="relative h-12 w-12">
                <Image
                  src={product.ProductResources[0].filename}
                  alt={product.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-xl"
                />
              </div>
              <div>
                <div className="line-clamp-1">
                  <Text>{product.name}</Text>
                </div>
                <div className="line-through">
                  <Text>Rp. {product.price.toLocaleString()}</Text>
                </div>
                <Text>
                  Ditawar Rp.{' '}
                  {item?.priceOffer?.toLocaleString() ??
                    item.fixPrice.toLocaleString()}
                </Text>
              </div>
            </>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <Link href={`https://wa.me/${item.User.Profile.phoneNumber}`}>
          <a
            target="_blank"
            rel="noreferrer"
            className="flex w-full items-center justify-center gap-1 rounded-2xl border border-primary-04 bg-primary-04 py-2 px-6 text-center text-neutral-01 shadow transition-all hover:border-primary-03 hover:bg-primary-03 focus:outline-none focus:ring focus:ring-primary-01 active:scale-95"
          >
            <Text weight="medium">Hubungi via Whatsapp </Text>
            <Image
              src="/whatsapp.svg"
              width={14}
              height={14}
              objectFit="contain"
              alt="whatsapp"
            />
          </a>
        </Link>
      </div>
    </Modal>
  )
}

export default ModalAcceptOffer
