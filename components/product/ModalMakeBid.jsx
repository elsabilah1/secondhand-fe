import Button from '../base/Button'
import Text from '../base/Text'
import InputField from '../base/InputField'
import Image from 'next/image'
import Modal from '../base/Modal'

export default function ModalMakeBid({ isOpen = false, setIsOpen }) {
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Masukkan Harga Tawarmu">
      <div className="mt-4 mb-6">
        <div className="mb-4 text-neutral-03">
          <Text>
            Harga tawaranmu akan diketahui penjual, jika penjual cocok kamu akan
            segera dihubungi penjual.
          </Text>
        </div>

        <div className="mb-6 flex items-center gap-4 rounded-2xl bg-[#eeeeee] p-4 shadow-high hover:scale-105">
          <div className="relative h-12 w-12">
            <Image
              src="/sample_product.png"
              alt="product"
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            />
          </div>
          <div className="">
            <Text weight="medium">Jam Tangan Casio</Text>
            <Text>Rp 250.000</Text>
          </div>
        </div>

        <InputField label="Harga Tawar" placeholder="Rp. 0,00" />
      </div>

      <div className="mt-4">
        <Button width="full">Kirim</Button>
      </div>
    </Modal>
  )
}
