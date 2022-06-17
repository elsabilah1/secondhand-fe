import { useState, useCallback } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import FeatherIcon from 'feather-icons-react'
import InputField from '../../../components/base/InputField'
import TextareaField from '../../../components/base/TextareaField'
import Text from '../../../components/base/Text'
import Button from '../../../components/base/Button'
import Dropzone from '../../../components/base/Dropzone'
import SelectField from '../../../components/base/SelectField'

const category = [
  { name: 'Hobi' },
  { name: 'Kendaraan' },
  { name: 'Baju' },
  { name: 'Elektronik' },
  { name: 'Kesehatan' },
]

export default function SellProductForm() {
  const router = useRouter()
  const [selected, setSelected] = useState(category[0])
  const [selectedImages, setSelectedImages] = useState([])

  const onDrop = useCallback((acceptedFiles) => {
    setSelectedImages(
      acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
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
    <div className="mx-auto flex max-w-xl px-4">
      <div className="mt-4 hidden w-2/12 md:block">
        <button onClick={() => router.replace('/')}>
          <FeatherIcon icon="arrow-left" />
        </button>
      </div>

      <div className="w-full md:w-10/12">
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

        <div className="mb-1 mt-4">
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

        <div className="mt-5 flex gap-4">
          <Button
            variant="outline"
            width="full"
            onClick={() => router.push('/')}
          >
            Preview
          </Button>
          <Button width="full" onClick={() => router.push('/')}>
            Terbitkan
          </Button>
        </div>
      </div>
    </div>
  )
}
