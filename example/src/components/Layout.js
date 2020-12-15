import React from 'react'
import {
  Buttons,
  Alert,
  CardWithTabs,
  CardsExample,
  ErrorAlertExample,
  BreadcrumbsExample,
  DeleteButtonExample,
  RadioButtonsExample,
  PageLoadingProgressExample,
  AutoCompleteExample,
  ColorsExample,
  AvatarImageExample,
} from '../components'

export default function Layout({ match }) {
  return (
    <React.Fragment>
      <AvatarImageExample />
      <BreadcrumbsExample />
      <PageLoadingProgressExample />
      <ColorsExample />
      {/* <InfiniteScrollExample /> */}
      <Buttons />
      <DeleteButtonExample />
      <RadioButtonsExample />
      <AutoCompleteExample />
      <Alert />
      <ErrorAlertExample />
      <CardWithTabs />
      <CardsExample />
    </React.Fragment>
  )
}
