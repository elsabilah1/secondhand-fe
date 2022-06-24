import Carousel from 'react-slick'
import Image from 'next/image'
import React from 'react'
import { withRouter } from 'next/router'

export default withRouter(function CarouselHome({ router }) {
  const settingsDesktop = {
    className: 'center',
    centerMode: true,
    centerPadding: '15%',
    infinite: true,
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

  if (router.pathname === '/') {
    return (
      <>
        <div className="hidden w-full sm:block">
          <Carousel {...settingsDesktop}>
            {desktopImages.map((img, idx) => (
              <div className="relative h-[25vh] lg:h-[40vh]" key={idx}>
                <Image
                  src={img.src}
                  layout="fill"
                  objectFit="contain"
                  alt={img.title}
                  priority={true}
                />
              </div>
            ))}
          </Carousel>
        </div>

        <div className="fixed top-0 h-full w-full sm:hidden">
          <Carousel {...settingsMobile}>
            {mobileImages.map((img, idx) => (
              <div key={idx} className="relative h-[70vh] w-full">
                <Image
                  src={img.src}
                  layout="fill"
                  objectFit="contain"
                  className="w-full"
                  objectPosition="top"
                  alt={img.title}
                  priority={true}
                />
              </div>
            ))}
          </Carousel>
        </div>
      </>
    )
  }
})
