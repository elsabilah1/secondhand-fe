import React from 'react'
import CarouselDesc from '../../../components/base/Product/CarouselDesc'
import CardPrice from '../../../components/base/Product/CardPrice'

export default function preview() {
  return (
    <div className='w-full flex-none md:flex mx-auto mt-10 px-4'>
      <div className='w-full md:w-7/12 md:mr-4'>
        <CarouselDesc />
      </div>
      <div className='w-full md:w-5/12 md:ml-4 my-6 md:mt-0'>
        <CardPrice />
      </div>
    </div>
  )
}
