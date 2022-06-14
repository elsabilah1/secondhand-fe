import React from 'react'
import Text from './Text'

export default function InputField({ label, type, value, name, placeholder, onChange }) {
  return (
    <div>
        <label htmlFor="input-field" className="block text-gray-700 text-sm font-bold mb-2"><Text>{label}</Text></label>
        <input 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type={type}
            value={value}
            name={name}
            placeholder={placeholder}
            onChange={onChange}
        />
    </div>
  )
}


