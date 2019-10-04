import React from 'react'
import { Buttons, Alert, CardWithTabs, CardsExample } from '../components'
import ColorsExample from './ColorsExample';

export default function Layout({ match }) {

  return (
    <React.Fragment>
      <ColorsExample />
      <Buttons />
      <Alert />
      <CardWithTabs />
      <CardsExample />
    </React.Fragment>
  )
}
