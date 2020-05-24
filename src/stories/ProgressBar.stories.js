import React, { useState } from 'react'
import ProgressBar from '../components/ProgressBar'
import { storiesOf } from '@storybook/react'

storiesOf('ProgressBar', module).add('showcase', () => (
  <div style={{ width: '50%', margin: 'auto', paddingTop: '15px' }}>
    <ProgressBar width='100' />
    <br />
    <ProgressBar width='80' />
    <br />
    <ProgressBar />
    <br />
    <ProgressBar width='30' />
    <br />
    <ProgressBar width='0' />
  </div>
))

storiesOf('ProgressBar', module).add('Animation', () => {
  const [width, setWidth] = useState(30)

  return (
    <div style={{ width: '50%', margin: 'auto', paddingTop: '15px' }}>
      <ProgressBar width={width} />
      <div
        style={{
          paddingTop: '10px',
          display: 'flex',
          width: '20px',
          margin: 'auto'
        }}
      >
        <button
          onClick={() => {
            width > 0 && setWidth(width - 5)
          }}
          style={{ marginRight: '5px' }}
        >
          -
        </button>
        <button
          onClick={() => {
            width < 100 && setWidth(width + 5)
          }}
        >
          +
        </button>
      </div>
    </div>
  )
})
