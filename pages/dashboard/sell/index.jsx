import { useCallback, useState } from 'react'

import Button from '../../../components/base/Button'
import Dropzone from '../../../components/base/Dropzone'
import FeatherIcon from 'feather-icons-react'
import Image from 'next/image'
import InputField from '../../../components/base/InputField'
import MainLayout from '../../../components/layout/MainLayout'
import SelectField from '../../../components/base/SelectField'
import Text from '../../../components/base/Text'
import TextareaField from '../../../components/base/TextareaField'
import { withRouter } from 'next/router'

const category = [
  { name: 'Hobi' },
  { name: 'Kendaraan' },
  { name: 'Baju' },
  { name: 'Elektronik' },
  { name: 'Kesehatan' },
]

export default withRouter(function SellProductForm({ router }) {
  const [selected, setSelected] = useState(category[0])
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
    <div key={idx} className="rounded-xl">
      <Image
        src={file.preview}
        alt={file.name}
        width={96}
        height={96}
        objectFit="contain"
      />
    </div>
  ))

  return (
    <MainLayout
      pageTitle="Jual Produk"
      headerTitle="Lengkapi Detail Produk"
      arrowLink="/dashboard"
    >
      <div className="mx-auto mt-6 flex max-w-2xl md:my-10">
        <div className="hidden w-2/12 md:block">
          <button onClick={() => router.replace('/dashboard')}>
            <FeatherIcon icon="arrow-left" />
          </button>
        </div>

        <div className="w-full space-y-4 md:w-10/12">
          <InputField
            type="text"
            // value=""
            placeholder="Nama Produk"
            label="Nama Produk"
            name="namaProduk"
            // onChange=""
          />

          <InputField
            type="text"
            // value=""
            placeholder="Rp 0,00"
            label="Harga Produk"
            name="hargaProduk"
            // onChange=""
          />

          <SelectField
            label="Kategori"
            selected={selected}
            setSelected={setSelected}
            data={category}
            placeholder="Pilih Kategori"
          />

          <TextareaField
            name="deskripsi"
            placeholder="Contoh: Jalan Ikan Hiu 33"
            label="Deskripsi"
            rows="3"
            cols="30"
          ></TextareaField>

          <div>
            <div className="mb-2">
              <Text type="body/12">Foto Produk</Text>
            </div>
            <Dropzone maxFiles={5} onDrop={onDrop}>
              <button className="group h-24 w-24 rounded-xl border border-dashed border-[#D0D0D0] group-hover:border-primary-03">
                <FeatherIcon
                  icon="plus"
                  className="inline h-6 w-6 text-neutral-03 active:scale-95 group-hover:text-primary-03"
                />
              </button>
            </Dropzone>
            <div className="mt-4 flex flex-wrap gap-3">{selected_images}</div>
          </div>

          <div className="mt-1 flex gap-4">
            <Button
              variant="outline"
              width="full"
              onClick={() => router.push('/dashboard/sell/preview')}
            >
              Preview
            </Button>
            <Button width="full" onClick={() => router.replace('/dashboard')}>
              Terbitkan
            </Button>
          </div>
        </div>
      </div>
    </MainLayout>
  )
})
