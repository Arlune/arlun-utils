import React from 'react'
import './ProgressBar.scss'

function ProgressBar({ width = '50', colorStyle }) {
  return (
    <div className={`meter ${colorStyle}`}>
      <span style={{ width: `${width}%` }}></span>
    </div>
  )
}

export default ProgressBar
