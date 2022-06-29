import Image from 'next/image'
import Carousel from 'react-slick'

export default function CarouselProduct() {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 1,
  }

  return (
    <div className="md:rounded-2xl">
      <Carousel {...settings}>
        <div className="relative h-[300px] w-full md:h-[436px]">
          <Image
            src="/carousel/watches.png"
            layout="fill"
            objectFit="cover"
            className="md:rounded-2xl"
            alt="watches"
          />
        </div>
        <div className="relative h-[300px] w-full md:h-[436px]">
          <Image
            src="/carousel/watches2.jpg"
            layout="fill"
            objectFit="cover"
            className="md:rounded-2xl"
            alt="watches2"
          />
        </div>
        <div className="relative h-[300px] w-full md:h-[436px]">
          <Image
            src="/carousel/watches3.jpg"
            layout="fill"
            objectFit="cover"
            className="md:rounded-2xl"
            alt="watches3"
          />
        </div>
      </Carousel>
    </div>
  )
}
