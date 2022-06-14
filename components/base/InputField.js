import React from 'react'
import Text from './Text'
import FeatherIcon from 'feather-icons-react';
import { useState } from 'react';

<<<<<<< HEAD
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
=======
export default function InputField({ label, type, value, name, placeholder, onChange }) {
    const [icon, setIcon] = useState(false);
  return (
    <div className='w-full'>
        <label htmlFor="input-field" className="block mb-2"><Text type='body/12'>{label}</Text></label>
        <div className='relative'>
            <input 
                className="appearance-none border-neutral-02 border rounded-2xl
                          w-full py-3 px-4 text-sm bg-neutral-01 text-neutral-05
                         focus:outline-none focus:shadow-outline 
                         placeholder:text-neutral-03 placeholder:text-sm"
                type={type}
                value={value}
                name={name}
                placeholder={placeholder}
                onChange={onChange}
            />
            {type === "password" && 
            <button onClick={()=> setIcon(!icon)}>
                <FeatherIcon icon={!icon ? 'eye':'eye-off'} className='absolute right-0 inset-y-0 translate-y-1/2 mr-4 text-neutral-03' size={24} />
            </button>}
        </div>
>>>>>>> a00dcec49a5a83ee34d316f821abc946d791b898
    </div>
  )
}
