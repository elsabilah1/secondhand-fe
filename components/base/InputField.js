import React from 'react'
import Text from './Text'
import FeatherIcon from 'feather-icons-react'
import { useState } from 'react'

export default function InputField({
  label,
  type,
  value,
  name,
  placeholder,
  onChange,
}) {
  const [icon, setIcon] = useState(false)
  return (
    <div className="w-full">
      <label htmlFor="input-field" className="mb-1 mt-4 block">
        <Text type="body/12">{label}</Text>
      </label>
      <div className="relative">
        <input
          className="focus:shadow-outline w-full appearance-none rounded-2xl
                          border border-neutral-02 bg-neutral-01 py-3 px-4 text-sm
                         text-neutral-05 placeholder:text-sm 
                         placeholder:text-neutral-03 focus:outline-none"
          type={type}
          value={value}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
        />
        {type === 'password' && (
          <button onClick={() => setIcon(!icon)}>
            <FeatherIcon
              icon={!icon ? 'eye' : 'eye-off'}
              className="absolute inset-y-0 right-0 mr-4 translate-y-1/2 text-neutral-03"
              size={24}
            />
          </button>
        )}
      </div>
    </div>
  )
}
