import React from 'react'
import './Toast.scss'

function Toast({
  type = 'warning',
  isShinining = true,
  children,
  show = true,
  finishing = false,
  position = 'bottom'
}) {
  function getClassNames() {
    return `toast-notification ${type} ${isShinining && 'shine'} ${
      show && 'show'
    } ${finishing && 'hide'} ${position}`
  }
  return <div className={getClassNames()}>{children}</div>
}

export default Toast
