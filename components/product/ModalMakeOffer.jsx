import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { useSelector } from 'react-redux'
import { Post } from '../../utils/Api'
import { Button, InputField, Modal, Text } from '../base'

const ModalMakeOffer = ({ isOpen = false, setIsOpen, item, setLoading }) => {
  const router = useRouter()
  const { user } = useSelector((state) => state.auth)
  const [priceOffer, setPriceOffer] = useState()
  const [message, setMessage] = useState('')
  const [error, setError] = useState(false)
  console.log({ item })

  useEffect(() => {
    if (message) {
      error ? toast.error(message) : toast.success(message)
      setMessage('')
    }

    if (!error && message) {
      router.replace('/')
    }
  }, [error, message, router])

  const hasNull = () => {
    for (const data in user) {
      if (user[data] == null) return true
    }
    return false
  }

  const handleSubmit = async () => {
    const data = {
      priceOffer,
      productId: item.id,
    }
    setIsOpen(false)
    setLoading(true)

    if (hasNull()) {
      return router.push('/profile/edit')
    }

    const res = await Post('/products/offers', data)

    if (res.error) {
      const error = res.error.data.data
        ? res.error.data.data[0].msg
        : res.error.data.message

      setError(true)
      setMessage(error)
    } else {
      setError(false)
      setMessage(res.message)
    }
    setLoading(false)
  }

  return (
    <>
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
              <Image
                src={item.ProductResources[0].filename}
                alt="product"
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
              />
            </div>
            <div className="col-span-5 space-y-2">
              <Text weight="bold">{item.name}</Text>
              <Text>Rp. {item.price.toLocaleString()}</Text>
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
