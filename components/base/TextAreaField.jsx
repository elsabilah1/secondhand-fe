import Text from './Text'

const TextAreaField = ({
  label,
  name,
  defaultValue,
  placeholder,
  rows,
  cols,
  onChange,
  disabled,
}) => {
  return (
    <div className="w-full">
      <label htmlFor={name} className="mb-2 block">
        <Text type="body/12">{label}</Text>
      </label>
      <div className="relative">
        <textarea
          className="focus:shadow-outline w-full appearance-none rounded-2xl border border-neutral-02 bg-neutral-01 py-3 px-4 text-sm text-neutral-05 placeholder:text-sm placeholder:text-neutral-03 focus:outline-none focus:ring focus:ring-primary-01"
          id={name}
          name={name}
          defaultValue={defaultValue}
          placeholder={placeholder}
          rows={rows}
          cols={cols}
          onChange={onChange}
          disabled={disabled}
        />
      </div>
    </div>
  )
}

export default TextAreaField
