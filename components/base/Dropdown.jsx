import { Popover, Transition } from '@headlessui/react'
import { Fragment, useEffect } from 'react'
import FeatherIcon from 'feather-icons-react'


export default function Dropdown({icon,children}) {
  return (
    <div className='flex items-center'>
      <Popover className='relative'>
        {({ open }) => (
          <>
            <Popover.Button
              className={`
                ${open ? '' : 'text-opacity-90'}
                group inline-flex items-center gap-3 text-sm hover:text-opacity-100 focus:outline-none`}
            >
              <FeatherIcon icon={icon}/>
            </Popover.Button>
            <Transition
              as={Fragment}
              enter='transition ease-out duration-200'
              enterFrom='opacity-0 translate-y-1'
              enterTo='opacity-100 translate-y-0'
              leave='transition ease-in duration-150'
              leaveFrom='opacity-100 translate-y-0'
              leaveTo='opacity-0 translate-y-1'
            >
              <Popover.Panel className='z-50 absolute right-0 mt-2'>
                <div className='w-[376px] overflow-hidden rounded-lg bg-white py-4 shadow-lg'>
                  {children}
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  )
}
