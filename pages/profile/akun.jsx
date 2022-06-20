import { useCallback, useState } from 'react'

import Dropzone from '../../components/base/Dropzone'
import FeatherIcon from 'feather-icons-react'
import Image from 'next/image'
import Text from '../../components/base/Text'
import { withRouter } from 'next/router'

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
    <div className="mx-auto my-6 max-w-2xl px-4 md:my-10">
        <div>
        <Text weight="bold" type='heading/20'>Akun Saya</Text>
        </div>

        <div className="w-full space-y-4 md:w-10/12">
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
        </div>

        <div className='gap-4 overflow-x-auto'>
            <button className='flex gap-4'>
                <FeatherIcon className="inline" icon='edit-3' />
                <Text weight="medium">Ubah Akun</Text>
            </button>
            <div className='border border-b'></div>
        </div>
        <div className='gap-4 overflow-x-auto'>
            <button className='flex gap-4'>
                <FeatherIcon className="inline" icon='settings' />
                <Text weight="medium">Pengaturan Akun</Text>
            </button>
            <div className='border border-b'></div>
        </div>
        <div className='gap-4 overflow-x-auto'>
            <button className='flex gap-4'>
                <FeatherIcon className="inline" icon='log-out' />
                <Text weight="medium">Keluar</Text>
            </button>
            <div className='border border-b'></div>
        </div>

    </div>
  )
})
