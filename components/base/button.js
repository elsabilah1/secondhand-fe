import React from "react";
const Button = ({ children,color, ...props}) => {
  return (
    <button className="bg-primary-04" {...props}>
      {children}
    </button>
  )
}
export {Button};