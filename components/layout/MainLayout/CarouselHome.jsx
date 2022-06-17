import Carousel from 'react-slick'
import Image from 'next/image'
import React from 'react'

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
    autoplay: true,
    autoplaySpeed: 5000,
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

  const desktopImages = [
    { title: 'banner', src: '/carousel/img_purple.png' },
    { title: 'banner', src: '/carousel/img_gray.png' },
    { title: 'banner', src: '/carousel/img_purple.png' },
  ]

  const mobileImages = [
    { title: 'banner', src: '/carousel/mobile_purple.png' },
    { title: 'banner', src: '/carousel/mobile_yellow.png' },
    { title: 'banner', src: '/carousel/mobile_grey.png' },
  ]

  return (
    <>
      <div className="hidden w-full sm:block">
        <Carousel {...settingsDesktop}>
          {desktopImages.map((img, idx) => (
            <div className="relative h-[288px]" key={idx}>
              <Image
                src={img.src}
                layout="fill"
                objectFit="contain"
                alt={img.title}
              />
            </div>
          ))}
        </Carousel>
      </div>

      <div className="sm:hidden">
        <Carousel {...settingsMobile} className="w-full">
          {mobileImages.map((img, idx) => (
            <div key={idx} className="relative h-[398px] w-full">
              <Image
                src={img.src}
                layout="fill"
                objectFit="cover"
                alt={img.title}
              />
            </div>
          ))}
        </Carousel>
      </div>
    </>
  )
}
