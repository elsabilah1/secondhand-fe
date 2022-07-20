import FeatherIcon from 'feather-icons-react'
import cookies from 'next-cookies'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useCallback, useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import {
  Alert,
  Button,
  Dropzone,
  InputField,
  SelectField,
  TextAreaField,
} from '../../components/base'
import MainLayout from '../../components/layout/MainLayout'
import { wrapper } from '../../store'
import { fetchUser, reset, updateProfileUser } from '../../store/slices/auth'
import { Get } from '../../utils/Api'

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (ctx) => {
    const { token } = cookies(ctx)
    await store.dispatch(fetchUser(token))

    const res = await Get('/cities')
    const cities = res.data

    return {
      props: { cities },
    }
  }
)

const EditProfile = ({ cities }) => {
  const router = useRouter()
  const dispatch = useDispatch()
  const { user, loading, error, message } = useSelector((state) => state.auth)
  const [selected, setSelected] = useState(user?.City || null)
  const [selectedImage, setSelectedImage] = useState()
  const [formValues, setFormValues] = useState({
    name: user.name ?? '',
    address: user.address ?? '',
    phoneNumber: user.phoneNumber ?? '',
  })

  useEffect(() => {
    if (message) {
      error ? toast.error(message) : toast.success(message)
      dispatch(reset())

      !error && router.replace('/dashboard')
    }
  }, [dispatch, error, message, router])

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
    formData.append('profilePicture', selectedImage)

    for (const key in formValues) {
      formData.append(key, formValues[key])
    }

    dispatch(updateProfileUser(formData))
  }

  const onDrop = useCallback((acceptedFile) => {
    const newProfile = acceptedFile[0]
    newProfile.preview = URL.createObjectURL(newProfile)
    setSelectedImage(newProfile)
  }, [])

  const handleDelete = () => {
    setSelectedImage(null)
  }

  return (
    <>
      {message && <Alert error={error} message={message} />}
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
              <Dropzone multiple={false} onDrop={onDrop}>
                <button
                  type="button"
                  className="group relative h-24 w-24 rounded-xl border border-primary-01 active:scale-95 group-hover:border-primary-03"
                >
                  {!selectedImage && (
                    <>
                      <Image
                        src={user.profilePicture}
                        alt={user.name}
                        layout="fill"
                        objectFit="contain"
                        className="rounded-xl"
                        priority
                      />
                      <div className="absolute inset-0 grid place-items-center rounded-xl bg-primary-01/70 opacity-20 group-hover:opacity-100">
                        <FeatherIcon
                          icon="camera"
                          className="inline h-6 w-6 text-primary-04 active:scale-95 group-hover:text-primary-03"
                        />
                      </div>
                    </>
                  )}
                </button>
              </Dropzone>
              {selectedImage && (
                <div className="absolute">
                  <div key={user.id} className="relative h-24 w-24 rounded-xl">
                    <Image
                      src={selectedImage.preview}
                      alt={selectedImage.name}
                      layout="fill"
                      objectFit="contain"
                      priority
                    />
                    <button
                      type="button"
                      className="absolute z-50 h-full w-full cursor-pointer rounded-sm bg-danger/20 opacity-0 transition-all hover:opacity-100"
                      onClick={() => handleDelete()}
                    >
                      <FeatherIcon icon="x" className="w-full text-danger" />
                    </button>
                  </div>
                </div>
              )}
            </div>
            <InputField
              type="text"
              placeholder="Nama"
              label="Nama"
              name="name"
              defaultValue={formValues.name ?? ''}
              onChange={handleInputChange}
              disabled={loading}
            />

            <SelectField
              selected={selected}
              setSelected={setSelected}
              data={cities}
              label="Kota"
              placeholder="Pilih Kota"
              disabled={loading}
            />

            <TextAreaField
              name="address"
              placeholder="Contoh: Jalan Ikan Hiu 33"
              label="Alamat"
              rows="3"
              cols="30"
              defaultValue={formValues.address ?? ''}
              onChange={handleInputChange}
              disabled={loading}
            />

            <InputField
              type="text"
              placeholder="Contoh: +628123456789"
              label="No. Handphone"
              name="phoneNumber"
              defaultValue={formValues.phoneNumber ?? ''}
              onChange={handleInputChange}
              disabled={loading}
            />

            <div className="mt-1 flex gap-4">
              <Button width="full" type="submit" loading={loading}>
                Simpan
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default EditProfile

EditProfile.getLayout = (page) => (
  <MainLayout
    pageTitle="Edit Profile"
    headerTitle="Lengkapi Info Akun"
    arrowLink="/dashboard"
  >
    {page}
  </MainLayout>
)
