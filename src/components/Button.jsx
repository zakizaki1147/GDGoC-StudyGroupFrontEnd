import React from 'react'

export default function Button({
  children,
  onClick,
  variant = "primary",
  type = "button"
}) {
  let className = "btn"

  if (variant === "primary") className += " btn-primary"
  if (variant === "secondary") className += " btn-secondary"
  if (variant === "danger") className += " btn-error"
  if (variant === "warning") className += " btn-warning"
  if (variant === "success") className += " btn-success"

  return (
    <button type={type} onClick={onClick} className={className}>
      {children}
    </button>
  )
}
