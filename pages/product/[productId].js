import React from 'react'
import CarouselDesc from '../../components/base/Product/CarouselDesc'
import CardPrice from '../../components/base/Product/CardPrice'
import MobilePreview from '../../components/base/Product/MobilePreview'
import { useRouter } from 'next/router'

export default function preview() {
    const router = useRouter();
  return (
    <div className='w-full md:flex mx-auto md:mt-10 md:px-4 overflow-y-hidden'>
      <div className='hidden w-full md:w-7/12 md:block md:mr-4'>
        <CarouselDesc />
      </div>
      <div className='hidden w-full md:w-5/12 md:block md:ml-4 my-6 md:mt-0'>
        <CardPrice 
          Btn1="Saya Tertarik dan Ingin Nego" onClick1={() => router.push("/dashboard")}
        />
      </div>
      <div className='w-full md:hidden'>
        <MobilePreview
          BtnTitle="Saya Tertarik dan Ingin Nego" 
          onClick={() => router.replace("/dashboard")} 
          onClickBack={() => router.replace("/dashboard/sell")}
        />
      </div>
    </div>
  )
}