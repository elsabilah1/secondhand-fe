import { useCallback, useState } from 'react'

import Dropzone from '../../components/base/Dropzone'
import FeatherIcon from 'feather-icons-react'
import Image from 'next/image'
import MenuProfile from '../../components/user/MenuProfile'
import NavProfile from '../../components/user/NavProfile'
import Text from '../../components/base/Text'
import { withRouter } from 'next/router'

export default withRouter(function DetailProfile({ router }) {
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
    <div className="flex h-screen flex-col">
      <div className="mx-auto my-6 w-full flex-1 px-4">
        <Text weight="bold" type="heading/20">
          Akun Saya
        </Text>

        <div className="relative mt-3 flex justify-center">
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
          <MenuProfile />
          <div className="text-center text-neutral-03">
            <Text type="body/12">Version 1.0</Text>
          </div>
        </div>
      </div>
      <NavProfile />
    </div>
  )
})
