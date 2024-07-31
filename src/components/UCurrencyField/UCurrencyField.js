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
  inputProps,
  ...props
}) {
  return (
    <UPositiveInteger
      variant="outlined"
      inputProps={{
        decimalScale,
        fixedDecimalScale,
        prefix: inputPrefix,
        style: { textAlign },
        ...inputProps,
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
  /** Attributes applied to the input element. */
  inputProps: PropTypes.object,
  /** Props applied to the Input element. */
  InputProps: PropTypes.object,
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
