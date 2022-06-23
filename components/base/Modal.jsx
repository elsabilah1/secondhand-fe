import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import FeatherIcon from 'feather-icons-react'
import Text from './Text'

export default function Modal({ isOpen, setIsOpen, children, title }) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50"
        onClose={() => setIsOpen(false)}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center text-center md:items-center md:p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-sm transform overflow-hidden rounded-t-2xl bg-white p-6 text-left align-middle shadow-xl transition-all md:rounded-2xl">
                <div className="mb-4 flex justify-center md:justify-end">
                  <button
                    className="hover:text-primary-03 active:scale-95"
                    onClick={() => setIsOpen(false)}
                  >
                    <FeatherIcon icon="x" className="hidden md:block" />
                    <div className="h-1 w-12 rounded-full bg-neutral-03 md:hidden"></div>
                  </button>
                </div>
                <Dialog.Title as={Fragment}>
                  <Text weight="medium">{title}</Text>
                </Dialog.Title>
                {children}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
