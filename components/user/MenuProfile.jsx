import React from 'react'
import FeatherIcon from "feather-icons-react"
import Text from '../base/Text'


export default function MenuProfile() {
  return (
    <div>
    <div className='gap-4 py-4'>
        <button className='flex gap-4'>
            <FeatherIcon className="inline text-primary-04" icon='edit-3' />
            <Text weight="medium">Ubah Akun</Text>
        </button>
    </div>
    <div className='gap-4 py-4'>
        <button className='flex gap-4'>
            <FeatherIcon className="inline text-primary-04" icon='settings' />
            <Text weight="medium">Pengaturan Akun</Text>
        </button>
    </div>
    <div className='gap-4 py-4'>
        <button className='flex gap-4'>
            <FeatherIcon className="inline text-primary-04" icon='log-out' />
            <Text weight="medium">Keluar</Text>
        </button>
    </div>
    </div>
  )
}
