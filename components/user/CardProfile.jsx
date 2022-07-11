import Image from 'next/image'
import { useRouter } from 'next/router'
import Text from '../base/Text'

const CardProfile = ({ edit, user }) => {
  const router = useRouter()

  return (
    <div className="flex items-center justify-between gap-3 rounded-2xl border p-4 shadow-sm">
      <div className="flex items-center gap-4">
        {user && (
          <Image
            src={user.profilePicture}
            width="48"
            height="48"
            className="rounded-xl"
            alt={user.name}
          />
        )}
        <div className="">
          <Text weight="medium">{user?.name}</Text>
          <div className="text-neutral-03">
            <Text type="body/10">{user?.City?.city ?? '-'}</Text>
          </div>
        </div>
      </div>
      {edit && (
        <button
          onClick={() => router.replace('/profile/edit')}
          className="rounded-lg border border-primary-04 py-1 px-3 active:scale-95"
        >
          <Text type="body/12" weight="medium">
            Edit
          </Text>
        </button>
      )}
    </div>
  )
}

export default CardProfile
