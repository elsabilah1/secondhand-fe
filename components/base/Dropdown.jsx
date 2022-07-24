import { Popover, Transition } from '@headlessui/react'
import FeatherIcon from 'feather-icons-react'
import { Fragment } from 'react'
import { useSelector } from 'react-redux'

const Dropdown = ({ icon, children, isNotif }) => {
  const { unRead } = useSelector((state) => state.notification)

  return (
    <div className="flex items-center" data-testid="dropdown-test">
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className={`
                ${open ? 'text-primary-03' : ''}
                relative flex hover:text-primary-03 focus:outline-none`}
            >
              <FeatherIcon icon={icon} />
              {isNotif && unRead > 0 && (
                <div className="absolute right-0 h-2 w-2 rounded-full bg-danger" />
              )}
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute right-0 z-50 mt-2">
                <div className="rounded-lg border bg-white px-4 py-2 shadow-lg">
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

export default Dropdown
