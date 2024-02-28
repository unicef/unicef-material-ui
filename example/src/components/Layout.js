import { Fragment } from 'react';
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
  SearchBoxExample,
} from '../components'

export default function Layout({ match }) {
  return (
    <Fragment>
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
    </Fragment>
  );
}
