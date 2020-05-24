import React, { useRef } from 'react'
import { storiesOf } from '@storybook/react'
import AlertQueue from '../components/Toast'

storiesOf('AlertQueue', module).add('showcase bottom', () => {
  const buttonStyle = {
    borderRadius: '3px',
    marginBottom: '10px',
    color: 'white',
    border: 'none',
    cursor: 'pointer'
  }
  const childRef = useRef()
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '150px'
      }}
    >
      <AlertQueue ref={childRef} />
      <button
        onClick={() => childRef.current.addWarningAlert()}
        style={{ ...buttonStyle, backgroundColor: 'orange' }}
      >
        Add Warning Alert
      </button>
      <button
        onClick={() => childRef.current.addErrorAlert()}
        style={{ ...buttonStyle, backgroundColor: 'red' }}
      >
        Add Error Alert
      </button>
      <button
        onClick={() => childRef.current.addSuccesAlert()}
        style={{ ...buttonStyle, backgroundColor: 'green' }}
      >
        Add Succes Alert
      </button>
      <button
        onClick={() => childRef.current.addInfoAlert()}
        style={{ ...buttonStyle, backgroundColor: 'blue' }}
      >
        Add Info Alert
      </button>
    </div>
  )
})

storiesOf('AlertQueue', module).add('showcase top', () => {
  const buttonStyle = {
    borderRadius: '3px',
    marginBottom: '10px',
    color: 'white',
    border: 'none',
    cursor: 'pointer'
  }
  const childRef = useRef()
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '150px'
      }}
    >
      <AlertQueue ref={childRef} position='top' />
      <button
        onClick={() => childRef.current.addWarningAlert()}
        style={{ ...buttonStyle, backgroundColor: 'orange' }}
      >
        Add Warning Alert
      </button>
      <button
        onClick={() => childRef.current.addErrorAlert()}
        style={{ ...buttonStyle, backgroundColor: 'red' }}
      >
        Add Error Alert
      </button>
      <button
        onClick={() => childRef.current.addSuccesAlert()}
        style={{ ...buttonStyle, backgroundColor: 'green' }}
      >
        Add Succes Alert
      </button>
      <button
        onClick={() => childRef.current.addInfoAlert()}
        style={{ ...buttonStyle, backgroundColor: 'blue' }}
      >
        Add Info Alert
      </button>
    </div>
  )
})
