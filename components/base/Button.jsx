import cn from 'classnames'
import Text from './Text'

const Button = ({
  children,
  variant = 'primary',
  width,
  onClick,
  type = 'button',
  disabled,
}) => {
  const classes = cn(
    'py-[14px] px-6  rounded-2xl border border-primary-04 active:scale-95 transition-all focus:outline-none focus:ring disabled:bg-primary-05 disabled:active:scale-100',
    variant === 'primary' &&
      'bg-primary-04 text-neutral-01 hover:bg-primary-03 hover:border-primary-03 focus:ring-primary-01',
    variant === 'outline' &&
      'bg-neutral-01 text-neutral-05 hover:bg-primary-04 hover:text-neutral-01',
    width === 'full' && 'w-full'
  )

  return (
    <button
      className={classes}
      style={{ width: width !== 'full' ? width : undefined }}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      <Text weight="medium">{children}</Text>
    </button>
  )
}

export default Button
