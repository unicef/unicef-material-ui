import React from 'react'
import { Buttons, Alert, CardWithTabs, CardsExample } from '../components'
import ColorsExample from './ColorsExample'
import DeleteButtonExample from './DeleteButtonExample'
import RadioButtonsExample from './RadioButtonsExample'
import PageLoadingProgressExample from './PageLoadingProgressExample'

export default function Layout({ match }) {
  return (
    <React.Fragment>
      <PageLoadingProgressExample />
      <ColorsExample />
      <Buttons />
      <DeleteButtonExample />
      <RadioButtonsExample />
      <Alert />
      <CardWithTabs />
      <CardsExample />
    </React.Fragment>
  )
}
