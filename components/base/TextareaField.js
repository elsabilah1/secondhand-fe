import React from 'react'
import Text from './Text'

export default function TextareaField({label, name, value, placeholder, rows, cols, onChange}) {
  return (
    <div className='w-full'>
        <label htmlFor="input-field" className="mb-1 mt-4 block">
            <Text type="body/12">{label}</Text>
        </label>
        <div className='relative'>
            <textarea className='focus:shadow-outline w-full appearance-none rounded-2xl
                      border border-neutral-02 bg-neutral-01 py-3 px-4 text-sm
                     text-neutral-05 placeholder:text-sm 
                     placeholder:text-neutral-03 focus:outline-none'
                     name={name}
                     value={value}
                     placeholder={placeholder}
                     rows={rows}
                     cols={cols}
                     onChange={onChange}
                     >
            </textarea>
        </div>
    </div>
  )
}
