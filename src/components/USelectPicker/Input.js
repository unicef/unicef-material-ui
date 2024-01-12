import React from 'react'
import { components } from 'react-select'
import PropTypes from 'prop-types'

export default function Input(props) {
  let describedBy = props['aria-describedby'] //react-select generated aria-describedby
  if (!props.hasValue) {
    const customDescribedBy = props.selectProps['aria-describedby'] //custom aria-describedby passed through the props
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

Input.propTypes = {
  /** All the props */
  props: PropTypes.object,
}
