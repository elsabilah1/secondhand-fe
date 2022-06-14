import Image from 'next/image'
import FeatherIcon from 'feather-icons-react'
import { useRouter } from 'next/router'

export default function LayoutAuth({ children }) {
  const router = useRouter()

  return (
    <div className="grid h-screen grid-cols-2">
      <div className="relative hidden md:block">
        <Image
          src="/auth_image.png"
          alt="auth image"
          layout="fill"
          objectFit="cover"
          objectPosition="left"
        />
      </div>
      <div className="px-4">
        <div className="mb-6 py-1 md:hidden">
          <button
            className="py-2 transition-all hover:text-primary-03 active:scale-90"
            onClick={() => router.replace('/')}
          >
            <FeatherIcon icon="arrow-left" />
          </button>
        </div>
        <div className="mx-auto grid h-screen w-8/12 place-items-center">
          {children}
        </div>
      </div>
    </div>
  )
}
