import Text from './Text'
import cn from 'classnames'

export default function Button({
  children,
  variant = 'primary',
  width,
  onClick,
  type = 'button',
}) {
  const classes = cn(
    'py-[14px] px-6  rounded-2xl border border-primary-04 active:scale-95 transition-all focus:outline-none focus:ring',
    variant === 'primary' &&
      'bg-primary-04 text-neutral-01 hover:bg-primary-03 hover:border-primary-03 focus:ring-primary-01',
    variant === 'outline' &&
      'bg-neutral-01 text-neutral-05 hover:bg-primary-04 hover:text-neutral-01',
    width === 'full' && 'w-full'
  )
  return (
    <button
      className={classes}
      style={{ width: width !== 'full' && width }}
      onClick={onClick}
      type={type}
    >
      <Text weight="medium">{children}</Text>
    </button>
  )
}
