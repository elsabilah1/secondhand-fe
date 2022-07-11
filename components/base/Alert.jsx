import cn from 'classnames'
import FeatherIcon from 'feather-icons-react'
import { useState } from 'react'
import Text from './Text'

const Alert = ({ error, message }) => {
  const [msg, setMsg] = useState(message)

  return (
    <div className="fixed right-6 top-6 z-[1000] max-w-xs bg-white transition-all">
      <div
        className={cn(
          'flex items-center justify-between gap-10 rounded px-3 py-2 font-bold',
          error ? 'bg-danger/20 text-danger' : 'bg-success/20 text-success',
          msg ? 'block' : 'hidden'
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

export default Alert
