import React from 'react'
import ProgressBar from '../components/ProgressBar'
import { storiesOf } from '@storybook/react'
import { withKnobs, number } from '@storybook/addon-knobs'

storiesOf('ProgressBar', module).add('showcase', () => (
  <div style={{ width: '50%', margin: 'auto', paddingTop: '15px' }}>
    <ProgressBar width='100' colorStyle="primary-color"/>
    <div>with primary-color</div>
    <br />
    <ProgressBar width='80' colorStyle="secondary-color" />
    <div>with secondary-color</div>
    <br />
    <ProgressBar colorStyle="tertiary-color" />
    <div>with tertiary-color</div>
    <br />
    <ProgressBar width='30' colorStyle="contrast-color"/>
    <div>with contrast-color</div>
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
        <ProgressBar width={number('width', 30, options)} colorStyle="primary-color"></ProgressBar>
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
