import React from 'react'
import { components, InputProps } from 'react-select'

export interface CustomInputProps extends InputProps<any, boolean> {
  hasValue?: boolean
  selectProps?: {
    'aria-describedby'?: string
    required?: boolean
  }
  'aria-describedby'?: string
}

export default function Input(props: CustomInputProps) {
  let describedBy = props['aria-describedby'] //react-select generated aria-describedby
  if (!props.hasValue) {
    const customDescribedBy = props.selectProps?.['aria-describedby'] //custom aria-describedby passed through the props
    describedBy =
      describedBy || customDescribedBy
        ? `${describedBy ? describedBy : ''}${
            customDescribedBy ? ` ${customDescribedBy}` : ''
          }`
        : undefined
  }

  return (
    <components.Input
      {...props}
      aria-describedby={describedBy}
      required={
        (props && props.selectProps && props.selectProps.required) || undefined
      }
    />
  )
}

