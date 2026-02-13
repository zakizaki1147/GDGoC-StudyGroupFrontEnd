import React from 'react'

export default function Button({
  children,
  onClick,
  variant = "primary",
  type = "button"
}) {
  let className = "font-bold px-4 pt-1.5 pb-2 rounded-md cursor-pointer"

  if (variant === "primary") className += " bg-blue-500 text-white"
  if (variant === "secondary") className += " bg-gray-300 text-black"
  if (variant === "danger") className += " bg-red-500 text-white"
  if (variant === "warning") className += " bg-yellow-400 text-black"
  if (variant === "success") className += " bg-green-500 text-white"

  return (
    <button type={type} onClick={onClick} className={className}>
      {children}
    </button>
  )
}
