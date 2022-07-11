import Image from 'next/image'
import { useState } from 'react'
import { Post } from '../../utils/Api'
import { Alert, Button, InputField, Loader, Modal, Text } from '../base'

const ModalMakeOffer = ({ isOpen = false, setIsOpen, item }) => {
  const [priceOffer, setPriceOffer] = useState()
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [error, setError] = useState(false)

  if (message) {
    setTimeout(() => {
      setMessage('')
    }, 4000)
  }

  const handleSubmit = async () => {
    const data = {
      priceOffer,
      productId: item.id,
    }
    setIsOpen(false)
    setLoading(true)
    const res = await Post('/products/offers', data)

    if (res.error) {
      setError(true)
      setMessage(res.error.data.data[0].msg)
    } else {
      setMessage(res.message)
    }

    setLoading(false)
  }

  return (
    <>
      {message && <Alert error={error} message={message} />}
      {loading && <Loader />}
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        title="Masukkan Harga Tawarmu"
      >
        <div className="mt-4 mb-6">
          <div className="mb-4 text-neutral-03">
            <Text>
              Harga tawaranmu akan diketahui penjual, jika penjual cocok kamu
              akan segera dihubungi penjual.
            </Text>
          </div>

          <div className="mb-6 grid grid-cols-6 items-center gap-4 rounded-2xl bg-[#eeeeee] p-4 shadow-high hover:scale-105">
            <div className="relative h-12 w-12">
              {item.ProductResources && (
                <Image
                  src={item.ProductResources[0].filename}
                  alt="product"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-xl"
                />
              )}
            </div>
            <div className="col-span-5 space-y-2">
              <Text weight="bold">{item.name}</Text>
              <Text>Rp. {item?.price?.toLocaleString()}</Text>
            </div>
          </div>

          <InputField
            label="Harga Tawar"
            name="priceOffer"
            placeholder="Rp. 0,00"
            onChange={(e) => setPriceOffer(e.target.value)}
          />
        </div>

        <div className="mt-4">
          <Button width="full" onClick={handleSubmit}>
            Kirim
          </Button>
        </div>
      </Modal>
    </>
  )
}

export default ModalMakeOffer
