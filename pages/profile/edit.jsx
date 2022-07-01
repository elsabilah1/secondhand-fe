import { useCallback, useEffect, useState } from 'react'
import Button from '../../components/base/Button'
import Dropzone from '../../components/base/Dropzone'
import FeatherIcon from 'feather-icons-react'
import Image from 'next/image'
import InputField from '../../components/base/InputField'
import MainLayout from '../../components/layout/MainLayout'
import SelectField from '../../components/base/SelectField'
import TextareaField from '../../components/base/TextareaField'
import { useRouter, withRouter } from 'next/router'

import { wrapper } from '../../store'
import { fetchUser } from '../../store/slices/auth'
import { Get } from '../../utils/Api'
import cookies from 'next-cookies'

const city = [
  { name: 'Jakarta' },
  { name: 'Malang' },
  { name: 'Surabaya' },
  { name: 'Bandung' },
  { name: 'Bogor' },
]

export default withRouter(function DetailProfile({ router, token, cities, profile }) {
  // console.log(token)
  const city = cities.map(res => res.city)
  // console.log(city)
  // console.log(cities)
  console.log(profile)
  // const [selected, setSelected] = useState(city[0])
  const [selected, setSelected] = useState(city[0])
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

  const { idPost } = router.query
  const [slugBeasiswa, setSlugBeasiswa] = useState([])
  const [error, setError] = useState(null)

  useEffect(() =>{
    function getBeasiswa(){
      return axiosInstance.get("/user/profile" + idPost)
    }
    async function getBeasiswaSlug(){
      try{
        const res = await getBeasiswa();
        if(res){
          setSlugBeasiswa(res.data.data)
        }
      } catch (error){}
    }
    getBeasiswaSlug()
  }, [router.isReady])

  console.log(slugBeasiswa)

  const updateData = async (e) => {
    const idEditPost = slugBeasiswa.id;
    const url = "/user/profile" + idEditPost;
    try {
      await axiosInstance.put(url, {
        name: slugBeasiswa.name,
        // kota: slugBeasiswa.kota,
        address: slugBeasiswa.address,
        phoneNumber: slugBeasiswa.phoneNumber,
      })
      router.push("/dashboard")
    } catch (error){
      if (error.response.status == 400){
        setError(true);
      }
    }
  }

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
            value={slugBeasiswa.name}
            placeholder="Nama"
            label="Nama"
            name="nama"
            // onChange=""
          />

          <SelectField
            selected={selected}
            setSelected={setSelected}
            data={city}
            // data={cities}
            label="Kota"
            placeholder="Pilih Kota"
          />

          <TextareaField
            name="alamat"
            placeholder="Contoh: Jalan Ikan Hiu 33"
            label="Alamat"
            rows="3"
            cols="30"
          ></TextareaField>

          <InputField
            type="text"
            value={slugBeasiswa.phoneNumber}
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
    // const resp = await Get('/user/profile')
    // const profile = resp.data.data.name
    const res = await Get('/cities')
    const cities = res.data.data

    return {
      // props: { categories, token },
      props: { cities, token },
    }
  }
)