import React from 'react'
import Text from './Text'
import FeatherIcon from 'feather-icons-react';
import { useState } from 'react';

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
    </div>
  )
}


