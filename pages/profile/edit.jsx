import FeatherIcon from 'feather-icons-react'
import Image from 'next/image'
import { withRouter } from 'next/router'
import { useCallback, useState } from 'react'
import Button from '../../components/base/Button'
import Dropzone from '../../components/base/Dropzone'
import InputField from '../../components/base/InputField'
// import SelectField from '../../components/base/SelectField'
import TextareaField from '../../components/base/TextareaField'
import MainLayout from '../../components/layout/MainLayout'

import cookies from 'next-cookies'
import { wrapper } from '../../store'
import { fetchUser } from '../../store/slices/auth'
import { Get } from '../../utils/Api'

const city = [
  { name: 'Jakarta' },
  { name: 'Malang' },
  { name: 'Surabaya' },
  { name: 'Bandung' },
  { name: 'Bogor' },
]

export default withRouter(function DetailProfile({ router, cities, user, token }) {
  const city = cities.map(res => res.city)
  const [selected, setSelected] = useState(city[0])
  const [selectedImages, setSelectedImages] = useState([])

  // const { user } = useSelector((state) => state.auth)
  // console.log(user);
  // console.log(user.data.name)

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
    <MainLayout
      pageTitle="Info Profile"
      headerTitle="Lengkapi Info Akun"
      arrowLink="/dashboard"
    >
      <div className="mx-auto my-6 flex max-w-2xl md:my-10">
        <div className="hidden w-2/12 md:block">
          <button onClick={() => router.replace('/dashboard')}>
            <FeatherIcon icon="arrow-left" />
          </button>
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

          <InputField
            type="text"
            // value={user.data.name}
            placeholder="Nama"
            label="Nama"
            name="nama"
            // onChange=""
          />

          {/* <SelectField
            selected={selected}
            setSelected={setSelected}
            data={city}
            data={cities}
            label="Kota"
            placeholder="Pilih Kota"
          /> */}

          <TextareaField
            name="alamat"
            placeholder="Contoh: Jalan Ikan Hiu 33"
            label="Alamat"
            rows="3"
            cols="30"
          ></TextareaField>

          <InputField
            type="text"
            // value={slugBeasiswa.phoneNumber}
            placeholder="Contoh: +628123456789"
            label="No. Handphone"
            name="nohandphone"
            // onChange=""
          />

          <div className="mt-1 flex gap-4">
            <Button width="full" onClick={() => router.replace('/dashboard')}>
              Simpan
            </Button>
          </div>
        </div>
      </div>
    </MainLayout>
  )
})

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (ctx) => {
    const { token } = cookies(ctx)
    await store.dispatch(fetchUser(token))
    await store.dispatch(fetchUser(user))
    const res = await Get('/cities')
    const cities = res.data.data

    console.log(user)
    return {
      props: { cities, token,user },
    }
  }
)