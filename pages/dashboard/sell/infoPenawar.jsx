import Button from '../../../components/base/Button'
import FeatherIcon from 'feather-icons-react'
import MainLayout from '../../../components/layout/MainLayout'
import Text from '../../../components/base/Text'
import CardProfile from '../../../components/user/CardProfile'
import { withRouter } from 'next/router'

export default withRouter(function InfoPenawar({ router }) {
  return (
    <MainLayout
      pageTitle="Info Penawar"
      headerTitle="Info Penawar"
      arrowLink="/dashboard"
    >
      <div className="mx-auto my-6 flex max-w-2xl px-4 md:my-10">
        <div className="hidden w-2/12 md:block">
          <button onClick={() => router.replace('/dashboard')}>
            <FeatherIcon icon="arrow-left" />
          </button>
        </div>

        <div className="w-full space-y-4 md:w-10/12">
            <div>
                <CardProfile/>
            </div>
            <Text weight="bold">Daftar Produkmu yang Ditawar</Text>

            <div className="flex gap-3">
                <div className="h-12 w-12 rounded-xl bg-black"></div>
                <div className='flex justify-between w-full'>
                <div className="mb-1 h-full">
                    <div className="mb-2 text-neutral-03 flex">
                        <Text type="body/10">Penawaran Produk</Text>
                    </div>
                    <div className='space-y-1'>
                        <Text>Jam Tangan Casio</Text>
                        <Text>Rp 250.000</Text>
                        <Text>Ditawar Rp 200.000</Text>
                    </div>
                    </div>
                    <div className="mb-2 text-neutral-03 flex">
                        <Text type="body/10">20 Apr, 14:04</Text> 
                    </div>
                    
                </div>
            </div>
                <div className='flex gap-4 justify-end'>
                <button
                className="py-2 px-6 w-40 rounded-2xl border border-primary-04 active:scale-95 transition-all focus:outline-none focus:ring bg-neutral-01 text-neutral-05 hover:bg-primary-04 hover:text-neutral-01"
                >
                <Text weight="medium">Tolak</Text>
                </button>
                <button
                className="py-2 px-6 w-40 rounded-2xl border border-primary-04 active:scale-95 transition-all focus:outline-none focus:ring bg-primary-04 text-neutral-01 hover:bg-primary-03 hover:border-primary-03 focus:ring-primary-01"
                >
                <Text weight="medium">Terima</Text>
                </button>
                </div>
                <div className='border border-b'></div>
        </div>
        </div>
        
    </MainLayout>
  )
})
