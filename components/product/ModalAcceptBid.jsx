import Button from '../base/Button'
import Text from '../base/Text'
import Image from 'next/image'
import Modal from '../base/Modal'
import FeatherIcon from 'feather-icons-react'

export default function ModalAcceptBid({ isOpen = false, setIsOpen }) {
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
            <div className="relative h-12 w-12 rounded-xl bg-black">
              {/* <Image
                src="/sample_product.png"
                alt="product"
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
              /> */}
            </div>
            <div>
              <Text weight="medium">Nama Pembeli</Text>
              <div className="text-neutral-03">
                <Text type="body/10">kota</Text>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="relative h-12 w-12">
              <Image
                src="/sample_product.png"
                alt="product"
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
              />
            </div>
            <div>
              <Text>Jam Tangan Casio</Text>
              <div className="line-through">
                <Text>Rp 250.000</Text>
              </div>
              <Text>Ditawar Rp 200.000</Text>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <Button width="full">
          Hubungi via Whatsapp
          <span>
            <FeatherIcon icon="whatsapp" className="inline text-white" />
          </span>
        </Button>
      </div>
    </Modal>
  )
}
