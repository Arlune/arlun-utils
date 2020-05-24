import React from 'react'
import './ProgressBar.scss'

function ProgressBar({ width = '50' }) {
  return (
    <div className='meter'>
      <span style={{ width: `${width}%` }}></span>
    </div>
  )
}

export default ProgressBar
