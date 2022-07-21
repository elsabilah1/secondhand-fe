import FeatherIcon from 'feather-icons-react'
import cookies from 'next-cookies'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { useSelector } from 'react-redux'
import Text from '../../../components/base/Text'
import MainLayout from '../../../components/layout/MainLayout'
import ModalAcceptOffer from '../../../components/product/ModalAcceptOffer'
import ModalChangeStatus from '../../../components/product/ModalChangeStatus'
import CardProfile from '../../../components/user/CardProfile'
import { wrapper } from '../../../store'
import { fetchUser } from '../../../store/slices/auth'
import { Get, Put } from '../../../utils/Api'

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (ctx) => {
    const { token } = cookies(ctx)
    await store.dispatch(fetchUser(token))

    const { id, status } = ctx.query
    let data

    if (status !== 'sold') {
      const res = await Get('/transactions')
      if (res.data) {
        data = res.data.find((item) => item.productOfferId == id)
      }

      if (!data) {
        const res = await Get(`/products/offer/${id}`)
        data = res.data
      }
    } else {
      const { data: transactions } = await Get(`/transactions`)
      const soldsData = transactions.filter(
        (item) => item.status === true && item.ProductOffer !== null
      )
      const tsData = soldsData.find((item) => item.ProductOffer.productId == id)

      data = tsData
    }

    return {
      props: { data },
    }
  }
)

const InfoPenawar = ({ data }) => {
  const router = useRouter()
  const { user } = useSelector((state) => state.auth)
  const [isOpen, setIsOpen] = useState(false)
  const [statusModal, setStatusModal] = useState(false)
  const [message, setMessage] = useState('')
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const product = data.Product || data.ProductOffer.Product
  const [isAccepted, setIsAccepted] = useState(null)
  const [status, setStatus] = useState(null)
  const statusOffer = data.ProductOffer ? data.ProductOffer.status : data.status

  useEffect(() => {
    if (message) {
      error ? toast.error(message) : toast.success(message)
      setMessage('')
      if (!error) router.reload()
    }
  }, [error, message, router])

  useEffect(() => {
    if (statusOffer === null && user.id !== data.User.id && !data.fixPrice) {
      setIsAccepted(null)
    } else if (statusOffer === true) {
      setIsAccepted(true)
      if (data.status === true) {
        setStatus(true)
      } else if (data.status === false) {
        setStatus(false)
      }
    } else if (statusOffer === false) {
      setIsAccepted(false)
    }
  }, [data.User.id, data.fixPrice, data.status, statusOffer, user.id])

  const acceptOffer = async () => {
    setLoading(true)
    const res = await Put(`/products/offer/${data.id}`, { status: true })
    if (res.error) {
      setError(true)
      const message = res.error.data
        ? res.error.data.data[0].msg
        : res.error.message
      setMessage(message)
    } else {
      setIsOpen(true)
      setMessage(res.message)
    }
    setLoading(false)
  }

  const rejectOffer = async () => {
    setLoading(true)
    const res = await Put(`/products/offer/${data.id}`, { status: false })
    if (res.error) {
      setError(true)
      setMessage(res.error.data.data[0].msg)
    } else {
      setMessage(res.message)
      router.reload()
    }
    setLoading(false)
  }

  return (
    <>
      <ModalAcceptOffer
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        item={data}
        product={product}
      />
      <ModalChangeStatus
        isOpen={statusModal}
        setIsOpen={setStatusModal}
        item={data}
        setMessage={setMessage}
        setError={setError}
        loading={loading}
        setLoading={setLoading}
      />
      <div className="mx-auto my-6 flex max-w-2xl md:my-10">
        <div className="hidden w-2/12 md:block">
          <button onClick={() => router.replace('/dashboard')}>
            <FeatherIcon icon="arrow-left" />
          </button>
        </div>

        <div className="w-full space-y-4 md:w-10/12">
          <div>
            <CardProfile user={data?.User?.Profile} />
          </div>
          <Text weight="bold">
            {user.id !== data.User.id
              ? 'Daftar Produkmu yang Ditawar'
              : 'Daftar Produk yang anda tawar'}
          </Text>

          <div className="grid grid-cols-8 gap-1">
            <div>
              <Image
                src={
                  product.ProductResources[0].filename ??
                  product.ProductResources[0].filename
                }
                alt={product.name}
                width={48}
                height={48}
                objectFit="contain"
                className="rounded-xl"
              />
            </div>
            <div className="col-span-6">
              <div className="mb-1 h-full">
                <div className="mb-2 flex text-neutral-03">
                  {status === true ? (
                    <Text type="body/10">Berhasil Terjual</Text>
                  ) : status === false || isAccepted === false ? (
                    <Text type="body/10">Batal Terjual</Text>
                  ) : (
                    <Text type="body/10">Penawaran Produk</Text>
                  )}
                </div>
                <div className="space-y-1">
                  <Text weight="bold">{product.name}</Text>
                  <Text>Rp. {product.price.toLocaleString()}</Text>
                  <Text>
                    Ditawar Rp.{' '}
                    {data.priceOffer
                      ? data.priceOffer.toLocaleString()
                      : data.fixPrice.toLocaleString()}
                  </Text>
                </div>
              </div>
            </div>
            <div className="text-right text-neutral-03">
              <Text type="body/10">
                {new Date(data.createdAt).toLocaleDateString()}
              </Text>
            </div>
          </div>
          <div className="flex justify-end gap-4">
            {isAccepted === null && (
              <>
                <button
                  onClick={rejectOffer}
                  className="w-40 rounded-2xl border border-primary-04 bg-neutral-01 py-2 px-6 text-neutral-05 transition-all hover:bg-primary-04 hover:text-neutral-01 focus:outline-none focus:ring active:scale-95"
                  disabled={loading}
                >
                  <Text weight="medium">Tolak</Text>
                </button>
                <button
                  onClick={acceptOffer}
                  className="w-40 rounded-2xl border border-primary-04 bg-primary-04 py-2 px-6 text-neutral-01 transition-all hover:border-primary-03 hover:bg-primary-03 focus:outline-none focus:ring focus:ring-primary-01 active:scale-95"
                  disabled={loading}
                >
                  {loading ? (
                    <div className="flex justify-center gap-1 py-1">
                      <div className="h-2 w-2 animate-bounce rounded-full bg-primary-02 transition-all duration-75" />
                      <div className="h-2 w-2 animate-bounce rounded-full bg-primary-02 transition-all duration-150" />
                      <div className="h-2 w-2 animate-bounce rounded-full bg-primary-02 transition-all duration-300" />
                    </div>
                  ) : (
                    <Text weight="medium">Terima</Text>
                  )}
                </button>
              </>
            )}

            {isAccepted && status === null && (
              <>
                <button
                  onClick={() => setStatusModal(true)}
                  className="w-40 rounded-2xl border border-primary-04 bg-neutral-01 py-2 px-6 text-neutral-05 transition-all hover:bg-primary-04 hover:text-neutral-01 focus:outline-none focus:ring active:scale-95"
                >
                  <Text weight="medium">Status</Text>
                </button>
                <Link href={`https://wa.me/${data.User.Profile.phoneNumber}`}>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    className="flex w-40 items-center justify-center gap-1 rounded-2xl border border-primary-04 bg-primary-04 py-2 px-6 text-center text-neutral-01 transition-all hover:border-primary-03 hover:bg-primary-03 focus:outline-none focus:ring focus:ring-primary-01 active:scale-95"
                  >
                    <Text weight="medium">Hubungi di </Text>
                    <Image
                      src="/whatsapp.svg"
                      width={14}
                      height={14}
                      objectFit="contain"
                      alt="whatsapp"
                    />
                  </a>
                </Link>
              </>
            )}
          </div>
          <div className="border border-b" />
        </div>
      </div>
    </>
  )
}

export default InfoPenawar

InfoPenawar.getLayout = (page) => {
  return (
    <MainLayout
      pageTitle="Info Penawar"
      headerTitle="Info Penawar"
      arrowLink="/dashboard"
    >
      {page}
    </MainLayout>
  )
}
