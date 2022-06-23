import React from 'react'
import Carousel from "react-slick";
import Image from 'next/image'
import Button from '../Button';
import Text from '../Text';
import CardProfile from '../../user/CardProfile';
import FeatherIcon from 'feather-icons-react'
import { useRouter } from 'next/router'

export default function MobilePreview({ BtnTitle, onClick, onClickBack }) {
    const settings = {
        dots: true,
        arrows:false,
        lazyLoad: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 3,
        // autoplay: true,
        // autoplaySpeed: 5000
      };

    const router = useRouter();
  return (
    <div>
        <div className='absolute top-[44px] left-4 z-50 md:hidden bg-neutral-01 rounded-full w-7 h-7 flex justify-center'>
            <button onClick={onClickBack}>
                <FeatherIcon icon="arrow-left" />
            </button>
        </div>
        <div className="absolute top-0 h-full w-full">
            <Carousel {...settings}>
                <div className='relative w-full h-[300px]'>
                    <Image
                     src="/carousel/watches.png"
                     layout='fill'
                     objectFit='cover'
                     className='w-full'
                     />
                </div>
                <div className='relative w-full h-[300px]'>
                    <Image
                     src="/carousel/watches2.jpg"
                     layout='fill'
                     objectFit='cover'
                     className='w-full'
                     />
                </div>
                <div className='relative w-full h-[300px]'>
                    <Image
                     src="/carousel/watches3.jpg"
                     layout='fill'
                     objectFit='cover'
                     className='w-full'
                     />
                </div>
            </Carousel>
        </div>
        <div className='relative mt-[280px]'>
            <div className='w-full px-4'>
                <div className='shadow-low bg-neutral-01 rounded-2xl px-6 py-4 mx-auto'>
                    <div className='my-2'>
                        <Text weight="bold">Jam Tangan Casio</Text>
                    </div>
                    <div className='mb-2 text-neutral-03'>
                        <Text type="body/10">Aksesoris</Text>
                    </div>
                        <Text>Rp 250.000</Text>
                </div>
            </div>
            <div className='my-4 px-4'>
                <CardProfile />
            </div>
            <div className='px-4 mb-4'>
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
        </div>
        <div className='w-full fixed bottom-0 px-4 mb-6'>
            <div className='px-6'>
            <Button width="full" onClick={onClick}>
                {BtnTitle}
            </Button>
            </div>
        </div>
    </div>
  )
}
