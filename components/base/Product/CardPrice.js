import React from 'react'
import Text from '../Text'
import Button from '../Button'

export default function CardPrice() {
  return (
    <div className='w-full max-w-sm shadow-high bg-neutral-01 rounded-2xl p-6 float-none mx-auto md:float-left md:mx-0'>
        <div className='mt-4 mb-2'>
            <Text weight="bold">Jam Tangan Casio</Text>
        </div>
        <div className='mb-4'>
            <Text>Aksesoris</Text>
        </div>
            <Text>Rp 250.000</Text>
        <div className='space-y-3.5 my-6'>
            <Button width="full" onClick={() => router.push("/")}>
                Terbitkan
            </Button>
            <Button variant="outline" width="full" onClick={() => router.push("/")}>
                Edit
            </Button>
        </div>
    </div>
  )
}
