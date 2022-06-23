import { useState } from 'react'
import Button from '../base/Button'
import Text from '../base/Text'
import Modal from '../base/Modal'

export default function ModalChangeStatus() {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      title="Perbarui status penjualan produkmu"
    >
      <div className="mt-4 mb-6">
        <div className="mb-3">
          <div className="flex gap-3">
            <input
              className="mt-1"
              type="radio"
              name="status"
              value={true}
              id="terima"
            />
            <div>
              <label htmlFor="terima">
                <Text>Berhasil terjual</Text>
              </label>
              <div className="text-neutral-03">
                <Text type="body/12">
                  kamu telah sepakat menjual produk ini kepada pembeli
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-3">
          <input
            className="mt-1"
            type="radio"
            name="status"
            value={false}
            id="tolak"
          />
          <div>
            <label htmlFor="tolak">
              <Text>Batalkan transaksi</Text>
            </label>
            <div className="text-neutral-03">
              <Text type="body/12">
                kamu membatalkan transaksi produk ini dengan pembeli
              </Text>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <Button width="full">Kirim</Button>
      </div>
    </Modal>
  )
}
