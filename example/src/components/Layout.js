import React from 'react'
import {
  Buttons,
  Alert,
  CardWithTabs,
  CardsExample,
  ErrorAlertExample,
  BreadcrumbsExample,
  UConfirmationButtonExample,
  RadioButtonsExample,
  PageLoadingProgressExample,
  AutoCompleteExample,
  ColorsExample,
  AvatarImageExample,
} from '../components'

import SearchBoxExample from '../components/SearchBoxExample'

export default function Layout({ match }) {
  return (
    <React.Fragment>
      <AvatarImageExample />
      <BreadcrumbsExample />
      <PageLoadingProgressExample />
      <ColorsExample />
      {/* <InfiniteScrollExample /> */}
      <Buttons />
      <UConfirmationButtonExample />
      <RadioButtonsExample />
      <AutoCompleteExample />
      <Alert />
      <ErrorAlertExample />
      <CardWithTabs />
      <CardsExample />
      <SearchBoxExample />
    </React.Fragment>
  )
}
