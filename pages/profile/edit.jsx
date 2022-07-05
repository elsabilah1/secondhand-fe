import FeatherIcon from 'feather-icons-react'
import Image from 'next/image'
import { withRouter } from 'next/router'
import { useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Alert from '../../components/base/Alert'
import Button from '../../components/base/Button'
import Dropzone from '../../components/base/Dropzone'
import InputField from '../../components/base/InputField'
import Loader from '../../components/base/Loader'
import SelectField from '../../components/base/SelectField'
import TextareaField from '../../components/base/TextareaField'
import MainLayout from '../../components/layout/MainLayout'
import { wrapper } from '../../store'
import { fetchUser, updateProfileUser } from '../../store/slices/auth'
import { Get } from '../../utils/Api'
import { requireAuth } from '../../utils/requireAuth'

export const getServerSideProps = wrapper.getServerSideProps((store) =>
  requireAuth(async () => {
    await store.dispatch(fetchUser())

    const res = await Get('/cities')
    const cities = res.data

    return {
      props: { cities },
    }
  })
)

export default withRouter(function DetailProfile({ router, cities }) {
  const dispatch = useDispatch()
  const { loading, error, message } = useSelector((state) => state.auth)

  if (error && message) {
    setTimeout(() => {
      dispatch(reset())
    }, 4000)
  }

  if (!error && message) {
    setTimeout(() => {
      dispatch(reset())
      router.replace('/dashboard')
    }, 4000)
  }
  const { user } = useSelector((state) => state.auth)
  console.log(user)

  const [selected, setSelected] = useState(user.City)
  const [selectedImages, setSelectedImages] = useState([])

  const [formValues, setFormValues] = useState({
    name: user.name,
    cityId: user.cityId,
    address: user.address,
    phoneNumber: user.phoneNumber,
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormValues({ ...formValues, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (selected) {
      formValues.cityId = selected.id
    }

    const formData = new FormData()
    selectedImages.forEach((file) => formData.append('profilePicture', file))

    for (const key in formValues) {
      formData.append(key, formValues[key])
    }

    console.log('test')

    dispatch(updateProfileUser(formData))
  }

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

  const handleDelete = (idx) => {
    setSelectedImages((prev) => prev.filter((_, i) => i !== idx))
  }

  return (
    <>
      {loading && <Loader />}
      {message && <Alert error={error} message={message} />}
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
            <form
              encType="multipart/form-data"
              className="w-full space-y-4 md:w-10/12"
              onSubmit={(e) => handleSubmit(e)}
            >
              <div className="relative flex justify-center">
                <Dropzone maxFiles={1} onDrop={onDrop}>
                  <button className="group h-24 w-24 rounded-xl border border-primary-01 bg-primary-01 active:scale-95 group-hover:border-primary-03">
                    <FeatherIcon
                      icon="camera"
                      className="inline h-6 w-6 text-primary-04 active:scale-95 group-hover:text-primary-03"
                    />
                  </button>
                </Dropzone>
                <div className="absolute">
                  {selectedImages?.map((file, idx) => (
                    <div key={idx} className="relative h-24 w-24 rounded-xl">
                      <Image
                        src={file.preview}
                        alt={file.name}
                        layout="fill"
                        objectFit="contain"
                      />
                      <button
                        type="button"
                        className="absolute z-50 h-full w-full cursor-pointer rounded-sm bg-danger/20 opacity-0 transition-all hover:opacity-100"
                        onClick={() => handleDelete(idx)}
                      >
                        <FeatherIcon icon="x" className="w-full text-danger" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <InputField
                type="text"
                placeholder="Nama"
                label="Nama"
                name="name"
                defaultValue={formValues.name ?? ''}
                onChange={handleInputChange}
              />

              <SelectField
                selected={selected}
                setSelected={setSelected}
                data={cities}
                label="Kota"
                placeholder="Pilih Kota"
              />

              <TextareaField
                name="address"
                placeholder="Contoh: Jalan Ikan Hiu 33"
                label="Alamat"
                rows="3"
                cols="30"
                defaultValue={formValues.address ?? ''}
                onChange={handleInputChange}
              ></TextareaField>

              <InputField
                type="text"
                placeholder="Contoh: +628123456789"
                label="No. Handphone"
                name="phoneNumber"
                defaultValue={formValues.phoneNumber ?? ''}
                onChange={handleInputChange}
              />

              <div className="mt-1 flex gap-4">
                <Button width="full" type="submit">
                  Simpan
                </Button>
              </div>
            </form>
          </div>
        </div>
      </MainLayout>
    </>
  )
})
