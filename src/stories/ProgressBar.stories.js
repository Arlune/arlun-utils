import React, { useState } from 'react'
import ProgressBar from '../components/ProgressBar'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, number } from '@storybook/addon-knobs'

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

const options = {
  range: true,
  min: 0,
  max: 100,
  step: 1
}

storiesOf('ProgressBar', module)
  .addDecorator(withKnobs)
  .add('Knobs', () => {
    return (
      <div style={{ width: '50%', margin: 'auto', paddingTop: '15px' }}>
        <ProgressBar width={number('width', 30, options)}></ProgressBar>
        <div
          style={{
            paddingTop: '10px',
            display: 'flex',
            width: '20px',
            margin: 'auto'
          }}
        ></div>
      </div>
    )
  })
