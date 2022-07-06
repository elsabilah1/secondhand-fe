import Image from 'next/image'
import Carousel from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'

export default function CarouselProduct({ images }) {
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
        {images?.map((img, idx) => (
          <div
            key={idx}
            className="relative h-[300px] w-full md:h-[436px] md:rounded-2xl md:border"
          >
            <Image
              src={img.preview || img}
              layout="fill"
              objectFit="contain"
              className="md:rounded-2xl"
              objectPosition="top"
              alt={img.path || img}
            />
          </div>
        ))}
      </Carousel>
    </div>
  )
}
