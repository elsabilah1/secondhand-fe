import React from 'react'
import Text from './Text'

export default function InputField({
  label,
  type,
  value,
  name,
  placeholder,
  onChange,
}) {
  return (
    <div>
      <label
        htmlFor="input-field"
        className="mb-2 block text-sm font-bold text-gray-700"
      >
        <Text>{label}</Text>
      </label>
      <input
        className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
        type={type}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  )
}
