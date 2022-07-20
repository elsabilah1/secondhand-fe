import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { Get, Put } from '../../utils/Api'
import Button from '../base/Button'
import Modal from '../base/Modal'
import Text from '../base/Text'

const ModalChangeStatus = ({ isOpen = false, setIsOpen, item }) => {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [error, setError] = useState(false)

  useEffect(() => {
    if (message) {
      error ? toast.error(message) : toast.success(message)
      setMessage('')
    }

    router.reload()
  }, [error, message, router])

  const changeStatus = async (e) => {
    e.preventDefault()
    setLoading(true)

    const transactions = await Get(`/transactions`)
    const { id: transactionId } = transactions.data.find(
      (data) => data.productOfferId === item.productOfferId
    )
    const { value: status } = e.target.status

    const res = await Put(`/transactions/${transactionId}`, { status })

    setLoading(false)
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
  }

  return (
    <>
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        title="Perbarui status penjualan produkmu"
      >
        <form onSubmit={(e) => changeStatus(e)}>
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
            <Button width="full" type="submit" loading={loading}>
              Kirim
            </Button>
          </div>
        </form>
      </Modal>
    </>
  )
}

export default ModalChangeStatus
