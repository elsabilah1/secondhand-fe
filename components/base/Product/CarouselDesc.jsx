import React from 'react'
import Carousel from "react-slick";
import Image from 'next/image'
import Text from '../Text'

export default function CarouselDesc() {
    const settings = {
        dots: true,
        lazyLoad: true,
        arrows:false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
        autoplay: true,
        autoplaySpeed: 5000
      };
  return (
    <div className='max-w-xl float-none mx-auto md:float-right md:mx-0'>
        <Carousel {...settings}>
            <div className='relative w-full h-[436px]'>
                <Image
                 src="/carousel/watches.png"
                 layout='fill'
                 objectFit='cover'
                 className='rounded-2xl'
                 />
            </div>
            <div className='relative w-full h-[436px]'>
                <Image
                 src="/carousel/watches2.jpg"
                 layout='fill'
                 objectFit='cover'
                 className='rounded-2xl'
                 />
            </div>
            <div className='relative w-full h-[436px]'>
                <Image
                 src="/carousel/watches3.jpg"
                 layout='fill'
                 objectFit='cover'
                 className='rounded-2xl'
                 />
            </div>
        </Carousel>
        <div className='shadow-low bg-neutral-01 rounded-2xl px-4 py-4 mt-6'>
            <div className='pb-4'>
                <Text weight="bold">Deskripsi</Text>
            </div>
            <div className='text-neutral-03'>
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
                    <br/><br/>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Text>
            </div>
        </div>
    </div>
  )
}
