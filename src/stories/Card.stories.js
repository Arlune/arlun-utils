import React from 'react'
import { storiesOf } from '@storybook/react'
import Card from '../components/Card'

storiesOf('Card', module).add('showcase', () => {
  return <Card>Bonjour</Card>
})
