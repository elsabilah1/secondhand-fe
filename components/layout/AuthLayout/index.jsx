import FeatherIcon from 'feather-icons-react'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { reset } from '../../../store/slices/auth'

const AuthLayout = ({ children, pageTitle }) => {
  const router = useRouter()
  const dispatch = useDispatch()
  const { message, error } = useSelector((state) => state.auth)

  useEffect(() => {
    if (message) {
      error ? toast.error(message) : toast.success(message)
      dispatch(reset())
    }
  }, [dispatch, error, message])

  return (
    <>
      <Toaster containerClassName="text-sm" />
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content="secondhand web" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="mx-auto grid h-screen max-w-[1440px] md:grid-cols-2">
        <div className="relative hidden md:block">
          <Image
            src="/auth_image.png"
            alt="auth image"
            layout="fill"
            objectFit="cover"
            objectPosition="left"
            priority={true}
          />
          <div className="absolute h-full w-full bg-gradient-to-t from-primary-03 opacity-50"></div>
          <div className="absolute ml-20 flex h-full w-full items-center leading-9">
            <h1 className="text-[40px] font-bold text-white">
              Second
              <br />
              Hand.
            </h1>
          </div>
        </div>
        <div className="flex flex-col px-4">
          <div className="z-10 py-1 md:hidden">
            <button
              className="py-2 transition-all hover:text-primary-03 active:scale-90"
              onClick={() => router.replace('/')}
            >
              <FeatherIcon icon="arrow-left" />
            </button>
          </div>
          <div className="mx-auto flex h-full w-full flex-1 flex-col justify-between py-6 md:w-8/12 md:justify-center">
            {children}
          </div>
        </div>
      </div>
    </>
  )
}

export default AuthLayout
