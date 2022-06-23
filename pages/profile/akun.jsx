import { useCallback, useState } from 'react'

import Dropzone from '../../components/base/Dropzone'
import FeatherIcon from 'feather-icons-react'
import Image from 'next/image'
import Text from '../../components/base/Text'
import { withRouter } from 'next/router'
import Link from 'next/link'

export default withRouter(function Akun({ router }) {
    const [selectedImages, setSelectedImages] = useState([])

    const onDrop = useCallback((acceptedFiles) => {
      setSelectedImages(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          }),
        ),
      )
    }, [])
  
    const selected_images = selectedImages?.map((file, idx) => (
      <div key={idx} onClick={() => setSelectedImages([])}>
        <Image
          src={file.preview}
          alt={file.name}
          width={96}
          height={96}
          objectFit="cover"
          className="rounded-xl"
        />
      </div>
    ))
  return (
    <div>
        <div className="mx-auto my-6 max-w-2xl px-4 md:my-10">
            <div>
            <Text weight="bold" type='heading/20'>Akun Saya</Text>
            </div>

            <div className="relative flex justify-center">
              <Dropzone maxFiles={1} onDrop={onDrop}>
                <button className="group h-24 w-24 rounded-xl border border-primary-01 bg-primary-01 active:scale-95 group-hover:border-primary-03">
                  <FeatherIcon
                    icon="camera"
                    className="inline h-6 w-6 text-primary-04 active:scale-95 group-hover:text-primary-03"
                  />
                </button>
              </Dropzone>
              <div className="absolute">{selected_images}</div>
            </div>

            <div>
              <div className='gap-4 overflow-x-auto py-4'>
                  <button className='flex gap-4'>
                      <FeatherIcon className="inline text-primary-04" icon='edit-3' />
                      <Text weight="medium">Ubah Akun</Text>
                  </button>
                  <div className='border border-b'></div>
              </div>
              <div className='gap-4 overflow-x-auto py-4'>
                  <button className='flex gap-4'>
                      <FeatherIcon className="inline text-primary-04" icon='settings' />
                      <Text weight="medium">Pengaturan Akun</Text>
                  </button>
                  <div className='border border-b'></div>
              </div>
              <div className='gap-4 overflow-x-auto py-4'>
                  <button className='flex gap-4'>
                      <FeatherIcon className="inline text-primary-04" icon='log-out' />
                      <Text weight="medium">Keluar</Text>
                  </button>
                  <div className='border border-b'></div>
              </div>
              <div className='flex justify-center text-neutral-03'>
              <Text>Version 1.0</Text>
              </div>
            </div>
          </div>
          <div className='flex gap-4 justify-center border'>
            <Link href="/" replace>
            <button className='gap-4 hover:text-primary-04 text-neutral-03'>
                  <FeatherIcon className='' icon='home' />
                  <Text>Home</Text>
            </button>
            </Link>
            <Link href="/notifikasi" replace>
            <button className='gap-4 hover:text-primary-04 text-neutral-03'>
                <FeatherIcon className='' icon='bell' />
                <Text>Notifikasi</Text>
            </button>
            </Link>
            <Link href="/dashboard/sell" replace>
            <button className='gap-4 hover:text-primary-04 text-neutral-03'>
                <FeatherIcon className='' icon='plus-circle' />
                <Text>Jual</Text>
            </button>
            </Link>
            <Link href="/dashboard" replace>
            <button className='gap-4 hover:text-primary-04 text-neutral-03'>
                <FeatherIcon className='' icon='menu' />
                <Text>Daftar Jual</Text>
            </button>
            </Link>
            <Link href="/profile/akun" replace>
            <button className='gap-4 hover:text-primary-04 text-neutral-03'>
                <FeatherIcon className='' icon='user' />
                <Text>Akun</Text>
            </button>
            </Link>
        </div>
    </div>
  )
})
