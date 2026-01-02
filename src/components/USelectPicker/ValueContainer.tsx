import React from 'react'
import { styled } from '@mui/material/styles'
import { ValueContainerProps } from 'react-select'

const PREFIX = 'ValueContainer'

const classes = {
  rootReadOnly: `${PREFIX}-rootReadOnly`,
  lineByLineOption: `${PREFIX}-lineByLineOption`,
}

const Root = styled('div')(({ theme }) => ({
  [`&.${classes.rootReadOnly}`]: {},

  [`&.${classes.lineByLineOption}`]: {
    flexDirection: 'column!important',
    alignItems: 'flex-start!important',
  },
}))

export interface CustomValueContainerProps extends Omit<ValueContainerProps<any, boolean>, 'isMulti'> {
  isMulti?: boolean
  selectProps?: {
    classes?: {
      valueContainer?: string
    }
    TextFieldProps?: {
      lineByLineOption?: boolean
      readOnly?: boolean
    }
  }
}

export default function ValueContainer({
  isMulti,
  selectProps,
  children,
}: CustomValueContainerProps) {
  const lineByLineOption =
    selectProps &&
    selectProps.TextFieldProps &&
    selectProps.TextFieldProps.lineByLineOption

  const readOnly =
    selectProps &&
    selectProps.TextFieldProps &&
    selectProps.TextFieldProps.readOnly

  return (
    <Root
      className={`${
        lineByLineOption && isMulti ? classes.lineByLineOption : ''
      } ${readOnly ? classes.rootReadOnly : ''} ${
        selectProps?.classes?.valueContainer || ''
      }`}
    >
      {children}
    </Root>
  )
}

