import React from 'react'
import Carousel from "react-slick";
import Image from 'next/image';

export default function CarouselHome() {
    const settings = {
        className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "20%",
      slidesToShow: 1,
      speed: 500,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 5000
    }
    const settingsMobile ={
        className: "center",
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 500,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 5000
    }
  return (
    <>    
    <div className='hidden sm:block'>
        <Carousel {...settings}>
           <div className='relative w-full h-[288px]'>
           <Image
            src="/img_purple.png"
            layout='fill'
            objectFit='contain'
            />
          </div>
          <div className='relative w-full h-[288px]'>
          <Image
            src="/img_gray.png"
            layout='fill'
            objectFit='contain'
            />
          </div>
          <div className='relative w-full h-[288px]'>
          <Image
            src="/img_purple.png"
            layout='fill'
            objectFit='contain'
            />
          </div>
        </Carousel>
    </div>
    <div className='sm:hidden'>
        <Carousel {...settingsMobile} className="w-full">
            <div className='relative w-full h-[398px]'>
              <Image
                src="/carousel/mobile_purple.png"
                layout='fill'
                objectFit='cover'
                />
            </div>
            <div className='relative w-full h-[398px]'>
              <Image
                src="/carousel/mobile_yellow.png"
                layout='fill'
                objectFit='cover'
                />
            </div>
            <div className='relative w-full h-[398px]'>
              <Image
                src="/carousel/mobile_grey.png"
                layout='fill'
                objectFit='cover'
                />
            </div>
        </Carousel>
    </div>
    </>
  )
}
