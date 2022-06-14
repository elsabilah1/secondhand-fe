import cn from 'classnames'

const Text = ({ children, type = 'body/14', weight }) => {
  const classes = cn(
    type === 'body/10' && 'text-[10px] leading-[14px]',
    type === 'body/12' && 'text-xs leading-[18px]',
    type === 'body/14' && 'text-sm leading-5',
    type === 'title/16' && 'text-base leading-6',
    type === 'title/18' && 'text-lg leading-[26px]',
    type === 'heading/20' && 'text-xl leading-[30px]',
    type === 'heading/24' && 'text-2xl leading-9',
    weight === 'medium' && 'font-medium',
    weight === 'bold' && 'font-bold'
  )

  if (type.includes('heading')) {
    return <h1 className={classes}>{children}</h1>
  } else if (type.includes('title')) {
    return <h3 className={classes}>{children}</h3>
  } else {
    return <p className={classes}>{children}</p>
  }
}

export default Text
