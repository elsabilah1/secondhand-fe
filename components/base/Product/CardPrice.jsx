import React from 'react'
import Text from '../Text'
import Button from '../Button'
import CardProfile from '../../user/CardProfile'
import { useRouter } from 'next/router'

export default function CardPrice({ Btn1, Btn2, onClick1, onClick2}) {
    const router = useRouter();
  return (
    <div className='max-w-sm'>
        <div className='w-full shadow-high bg-neutral-01 rounded-2xl p-6 mx-auto md:mx-0'>
            <div className='mt-4 mb-2'>
                <Text weight="bold">Jam Tangan Casio</Text>
            </div>
            <div className='mb-4'>
                <Text>Aksesoris</Text>
            </div>
                <Text>Rp 250.000</Text>
            <div className='space-y-3.5 mt-6 mb-2'>
                <Button width="full" onClick={onClick1}>
                    {Btn1}
                </Button>
                {Btn2 &&
                    <Button variant="outline" width="full" onClick={onClick2}>
                        {Btn2}
                    </Button>
                }
            </div>
        </div>
        <div className='my-6'>
            <CardProfile />
        </div>
    </div>
  )
}
