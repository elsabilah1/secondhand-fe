import React from 'react'
import CarouselDesc from '../../../components/base/Product/CarouselDesc'
import CardPrice from '../../../components/base/Product/CardPrice'
import MobilePreview from '../../../components/base/Product/MobilePreview'
import MainLayout from '../../../components/layout/MainLayout'
import { useRouter } from 'next/router'

export default function preview() {
  const router = useRouter();
  return (
    <MainLayout pageTitle="Preview Product">
      <div className='w-full md:flex mx-auto md:mt-10 md:px-4 overflow-y-hidden'>
        <div className='hidden w-full md:w-7/12 md:block md:mr-4'>
          <CarouselDesc />
        </div>
        <div className='hidden w-full md:w-5/12 md:block md:ml-4 my-6 md:mt-0'>
          <CardPrice 
            Btn1="Terbitkan" onClick1={() => router.push("/dashboard")}
            Btn2="Edit" onClick2={() => router.push("/dashboard/sell")}
          />
        </div>
        <div className='w-full md:hidden'>
          <MobilePreview
            BtnTitle="Terbitkan" 
            onClick={() => router.replace("/dashboard")} 
            onClickBack={() => router.replace("/dashboard/sell")}
          />
        </div>
      </div>
    </MainLayout>
  )
}
