<<<<<<< HEAD
import React from 'react'
const Button = ({ children, color, ...props }) => {
=======
import Text from "./Text"
import cn from 'classnames'

export default function Button({ children, variant='primary', width, onClick, type='button'}) {
  const classes = cn(
    "py-[14px] px-6  rounded-2xl border border-primary-04 active:scale-95",
    variant === "primary" && "bg-primary-04 text-white hover:bg-primary-03 hover:border-primary-03 ",
    variant === "outline" && "bg-neutral-01 text-neutral-05 hover:bg-primary-04 hover:text-neutral-01",
    width === "full" && "w-full"
  )
>>>>>>> a00dcec49a5a83ee34d316f821abc946d791b898
  return (
    <button className={classes} style={{width:width !== "full" && width}} onClick={onClick} type={type}>
      <Text weight="medium">{children}</Text>
    </button>
  )
}
<<<<<<< HEAD
export { Button }
=======
>>>>>>> a00dcec49a5a83ee34d316f821abc946d791b898
