import Image from 'next/image'
import Carousel from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'

const settings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 1,
}

const CarouselProduct = ({ images }) => {
  return (
    <div className="md:rounded-2xl md:border md:p-2">
      <Carousel {...settings}>
        {images?.map((img, idx) => (
          <div
            key={idx}
            className="relative h-64 w-full md:h-96 md:rounded-2xl"
          >
            <Image
              src={img.preview || img}
              layout="fill"
              objectFit="contain"
              objectPosition="top"
              alt={img.path || img}
              priority
            />
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default CarouselProduct
