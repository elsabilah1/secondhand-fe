import { Listbox, Transition } from '@headlessui/react'
import FeatherIcon from 'feather-icons-react'
import { Fragment } from 'react'
import Text from './Text'

export default function SelectField({
  label,
  selected,
  setSelected,
  data,
  placeholder,
  multiple,
}) {
  return (
    <Listbox value={selected} onChange={setSelected} multiple={multiple}>
      <div className="relative">
        <label htmlFor="input-field" className="mb-2 block">
          <Text type="body/12">{label}</Text>
        </label>
        <Listbox.Button className="focus:shadow-outline relative w-full appearance-none rounded-2xl border border-neutral-02 bg-neutral-01 py-3 px-4 text-left text-sm text-neutral-05 placeholder:text-sm placeholder:text-neutral-03 focus:outline-none focus:ring focus:ring-primary-01">
          <span className="block truncate">
            {selected &&
              (selected?.length > 0 ? (
                <Text>{selected?.map((item) => item.category).join(', ')}</Text>
              ) : (
                <Text>{selected.city}</Text>
              ))}
            {(selected?.length === 0 || !selected) && (
              <div className="text-sm text-neutral-03">
                <Text>{placeholder}</Text>
              </div>
            )}
          </span>
          <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center hover:text-primary-01">
            <FeatherIcon
              icon="chevron-down"
              className="h-6 w-6 text-neutral-03"
            />
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {data.map((item, index) => (
              <Listbox.Option
                key={index}
                className={({ active }) =>
                  `relative cursor-default select-none py-2 pl-10 pr-4 ${
                    active ? 'bg-primary-01 text-primary-04' : 'text-gray-900'
                  }`
                }
                value={item}
              >
                {({ selected }) => (
                  <>
                    <span
                      className={`block truncate ${
                        selected ? 'font-medium' : 'font-normal'
                      }`}
                    >
                      <Text>{item?.category ?? item?.city}</Text>
                    </span>
                    {selected ? (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-primary-05">
                        <FeatherIcon icon="check" className="h-5 w-5" />
                      </span>
                    ) : null}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  )
}
