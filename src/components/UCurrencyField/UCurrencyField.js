import React from 'react'
import PropTypes from 'prop-types'
import UPositiveInteger from '../UPositiveInteger'

/**
 * The UCurrencyField is for creating currency input fields. It accepts several props for customization, including "inputPrefix," "decimalScale," "fixedDecimalScale," "textAlign," and etc
 */
export default function UCurrencyField({
  inputPrefix = '$ ',
  decimalScale = 2,
  fixedDecimalScale = true,
  textAlign = 'right',
  slotProps = {},
  ...props
}) {
  return (
    <UPositiveInteger
      variant="outlined"
      slotProps={{
        ...slotProps,
        htmlInput: {
          ...(slotProps?.htmlInput ? slotProps.htmlInput : {}),
          decimalScale,
          fixedDecimalScale,
          prefix: inputPrefix,
          style: { textAlign },
        },
      }}
      {...props}
    />
  )
}

UCurrencyField.propTypes = {
  /** label */
  label: PropTypes.string,
  /** placeholder text*/
  placeholder: PropTypes.string,
  /**
   * Array of validators.See list of default validators above.
   *
   * Ex: `validators={['required']}`
   */
  validators: PropTypes.array,
  /** Prefix string for the input. */
  inputPrefix: PropTypes.string,
  /** Decimal digit number to be used as default. */
  decimalScale: PropTypes.number,
  /**
   * customErrorMessages is an object with key as validator and value as customised error message.
   *
   * Ex: `customErrorMessages={{required: 'This field is required'}`
   */
  customErrorMessages: PropTypes.object,
  /** To make the content readOnly */
  readOnly: PropTypes.bool,
  /** Name of input. */
  name: PropTypes.string,
  /** Input text align */
  textAlign: PropTypes.string,
  // If true it add 0s to match given decimalScale.
  fixedDecimalScale: PropTypes.bool,
}
