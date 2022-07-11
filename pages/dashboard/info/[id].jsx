import FeatherIcon from 'feather-icons-react'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import Text from '../../../components/base/Text'
import MainLayout from '../../../components/layout/MainLayout'
import CardProfile from '../../../components/user/CardProfile'
// import ModalChangeStatus from '../../../components/product/ModalChangeStatus'
import ModalAcceptOffer from '../../../components/product/ModalAcceptOffer'
import { wrapper } from '../../../store'
import { fetchUser } from '../../../store/slices/auth'
import { requireAuth } from '../../../utils/requireAuth'

export const getServerSideProps = wrapper.getServerSideProps((store) =>
  requireAuth(async () => {
    await store.dispatch(fetchUser())
  })
)

const InfoPenawar = () => {
  const router = useRouter()
  const { user } = useSelector((state) => state.auth)
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <ModalAcceptOffer isOpen={isOpen} setIsOpen={setIsOpen} />
      {/* <ModalChangeStatus isOpen={isOpen} setIsOpen={setIsOpen} /> */}
      <div className="mx-auto my-6 flex max-w-2xl px-4 md:my-10">
        <div className="hidden w-2/12 md:block">
          <button onClick={() => router.replace('/dashboard')}>
            <FeatherIcon icon="arrow-left" />
          </button>
        </div>

        <div className="w-full space-y-4 md:w-10/12">
          <div>
            <CardProfile user={user} />
          </div>
          <Text weight="bold">Daftar Produkmu yang Ditawar</Text>

          <div className="flex gap-3">
            <div className="h-12 w-12 rounded-xl bg-black"></div>
            <div className="flex w-full justify-between">
              <div className="mb-1 h-full">
                <div className="mb-2 flex text-neutral-03">
                  <Text type="body/10">Penawaran Produk</Text>
                </div>
                <div className="space-y-1">
                  <Text>Jam Tangan Casio</Text>
                  <Text>Rp 250.000</Text>
                  <Text>Ditawar Rp 200.000</Text>
                </div>
              </div>
              <div className="mb-2 flex text-neutral-03">
                <Text type="body/10">20 Apr, 14:04</Text>
              </div>
            </div>
          </div>
          <div className="flex justify-end gap-4">
            <button className="w-40 rounded-2xl border border-primary-04 bg-neutral-01 py-2 px-6 text-neutral-05 transition-all hover:bg-primary-04 hover:text-neutral-01 focus:outline-none focus:ring active:scale-95">
              <Text weight="medium">Tolak</Text>
            </button>
            <button
              onClick={() => setIsOpen(true)}
              className="w-40 rounded-2xl border border-primary-04 bg-primary-04 py-2 px-6 text-neutral-01 transition-all hover:border-primary-03 hover:bg-primary-03 focus:outline-none focus:ring focus:ring-primary-01 active:scale-95"
            >
              <Text weight="medium">Terima</Text>
            </button>
          </div>
          <div className="border border-b"></div>
        </div>
      </div>
    </>
  )
}

export default InfoPenawar

InfoPenawar.getLayout = (page) => (
  <MainLayout
    pageTitle="Info Penawar"
    headerTitle="Info Penawar"
    arrowLink="/dashboard"
  >
    {page}
  </MainLayout>
)
