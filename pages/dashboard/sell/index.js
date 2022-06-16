import React from 'react'
import InputField from '../../../components/base/InputField'
import TextareaField from '../../../components/base/TextareaField'
import { Fragment, useState, useCallback } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import FeatherIcon from 'feather-icons-react'
import Text from '../../../components/base/Text'
import {useDropzone} from 'react-dropzone'
import Button from '../../../components/base/Button'
import { useRouter } from 'next/router'

const category = [
    { name: 'Pilih Kategori'},
    { name: 'Hobi' },
    { name: 'Kendaraan' },
    { name: 'Baju' },
    { name: 'Elektronik' },
    { name: 'Kesehatan' },
  ]


export default function SellProductForm() {
    const [selected, setSelected] = useState(category[0])

    const [selectedImages, setSelectedImages] = useState([])
    const onDrop = useCallback(acceptedFiles => {
        setSelectedImages(acceptedFiles.map(file =>
            Object.assign(file, {
                preview:URL.createObjectURL(file)
            })
            ))
      }, [])
    const {getRootProps, getInputProps} = useDropzone({onDrop})
    const selected_images = selectedImages?.map(file =>(
        <div>
            <img src={file.preview} style={{width:"200px"}} alt="" />
        </div>
    ))

    const router = useRouter();
  return (
    <div className='flex max-w-xl mx-auto px-4'>
        <div className='w-2/12 mt-4 hidden md:block'>
            <button onClick={() => router.replace("/")}>
                <FeatherIcon icon="arrow-left" />
            </button>
        </div>
        <div className='w-full md:w-10/12'>
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
            <Listbox value={selected} onChange={setSelected}>
                <div className="relative mt-1">
                    <label htmlFor="input-field" className="mb-1 mt-4 block">
                        <Text type="body/12">Kategori</Text>
                    </label>
                  <Listbox.Button 
                    className="focus:shadow-outline w-full appearance-none rounded-2xl
                            border border-neutral-02 bg-neutral-01 py-3 px-4 text-sm
                            text-neutral-03 placeholder:text-sm text-left
                            placeholder:text-neutral-03 focus:outline-none"
                  >
                    <span className="block truncate"><Text>{selected.name}</Text></span>
                    <span className="pointer-events-none absolute inset-y-0 top-5 right-3 flex items-center pr-2">
                        <FeatherIcon 
                        icon="chevron-down"
                        className="h-6 w-6 text-neutral-03"
                        />
                    </span>
                  </Listbox.Button>
                  <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="z-50 absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                      {category.map((cat, index) => (
                        <Listbox.Option
                          key={index}
                          className={({ active }) =>
                            `relative cursor-default select-none py-2 pl-10 pr-4 ${
                              active ? 'bg-primary-01 text-primary-04' : 'text-gray-900'
                            }`
                          }
                          value={cat}
                        >
                          {({ selected }) => (
                            <>
                              <span
                                className={`block truncate ${
                                  selected ? 'font-medium' : 'font-normal'
                                }`}
                              >
                                <Text>{cat.name}</Text>
                              </span>
                              {selected ? (
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-primary-05">
                                    <FeatherIcon icon="check" className="h-5 w-5" />
                                </span>
                              ) : null}
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
            </Listbox>
            <TextareaField
                name="deskripsi"
                placeholder="Contoh: Jalan Ikan Hiu 33"
                label="Deskripsi"
                rows="3"
                cols="30">
            </TextareaField>
            <div>
                <div className='mb-1 mt-4'>
                    <Text>Foto Produk</Text>
                </div>
                <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    <button className='border border-[#D0D0D0] border-dashed w-24 h-24 rounded-xl
                            hover:text-primary-03 hover:border-primary-03
                    '>
                        <FeatherIcon 
                            icon="plus"
                            className="inline h-6 w-6 text-neutral-03"
                        />
                    </button>
                </div>
                <div className='flex mt-3 gap-3'>
                    {selected_images}
                </div>
            </div>
            <div className='flex gap-4 mt-5'>
                <Button variant="outline" width="full" onClick={() => router.push("/")}>
                    Preview
                </Button>
                <Button width="full" onClick={() => router.push("/")}>
                    Terbitkan
                </Button>
            </div>
            
        </div>
    </div>
  )
}
