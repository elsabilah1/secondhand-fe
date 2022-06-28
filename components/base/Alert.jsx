import { useEffect, useState } from 'react'

import FeatherIcon from 'feather-icons-react'
import Text from './Text'
import cn from 'classnames'

export default function Alert({ error, message }) {
  const [msg, setMsg] = useState(message)

  useEffect(() => {
    setMsg(message)
    setTimeout(() => {
      setMsg('')
    }, 4000)
  }, [message])

  return (
    <div className="absolute right-6 top-6 max-w-md bg-white transition-all">
      <div
        className={cn(
          'flex items-center justify-between gap-10 rounded px-3 py-2 font-bold',
          error ? 'bg-danger/20 text-danger' : 'bg-success/20 text-success',
          msg ? 'block' : 'hidden',
        )}
      >
        <Text type="body/12">{msg}</Text>
        <button className="p-1" onClick={() => setMsg('')}>
          <FeatherIcon icon="x" size={20} />
        </button>
      </div>
    </div>
  )
}
