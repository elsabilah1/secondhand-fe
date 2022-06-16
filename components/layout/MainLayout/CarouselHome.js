<<<<<<< HEAD
export default function CarouselHome() {
  return <div>CarouselHome</div>
=======
import React from 'react'
import Carousel from 'react-slick'
import Image from 'next/image'

export default function CarouselHome() {
  const settingsDesktop = {
    className: 'center',
    centerMode: true,
    centerPadding: '20%',
    infinite: true,
    slidesToShow: 1,
    arrows: false,
    dots: false,
    speed: 500,
    focusOnSelect: true,
    slidesToScroll: 1,
    adaptiveHeight: true,
    // autoplay: true,
    // autoplaySpeed: 5000,
  }

  const settingsMobile = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
  }

  return (
    <>
      <div className="hidden w-full sm:block">
        <Carousel {...settingsDesktop}>
          <div className="relative h-[288px]">
            <Image
              src="/carousel/img_purple.png"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="relative h-[288px]">
            <Image
              src="/carousel/img_gray.png"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="relative h-[288px]">
            <Image
              src="/carousel/img_purple.png"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </Carousel>
      </div>
      <div className="sm:hidden">
        <Carousel {...settingsMobile} className="w-full">
          <div className="relative h-[398px] w-full">
            <Image
              src="/carousel/mobile_purple.png"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="relative h-[398px] w-full">
            <Image
              src="/carousel/mobile_yellow.png"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="relative h-[398px] w-full">
            <Image
              src="/carousel/mobile_grey.png"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </Carousel>
      </div>
    </>
  )
>>>>>>> origin/carouselFeature
}
