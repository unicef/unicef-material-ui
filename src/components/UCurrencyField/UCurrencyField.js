import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core'
import UPositiveInteger from '../UPositiveInteger'

const useStyles = makeStyles(theme => ({
  startAdornmentContainer: {
    marginRight: theme.spacing(0.5),
  },
}))

export default function UCurrencyField({
  inputPrefix,
  decimalScale,
  fixedDecimalScale,
  textAlign,
  InputProps,
  inputProps,
  ...props
}) {
  const classes = useStyles(props)
  return (
    <UPositiveInteger
      variant="outlined"
      InputProps={{
        startAdornment: (
          <span className={classes.startAdornmentContainer}>{inputPrefix}</span>
        ),
        ...InputProps,
      }}
      inputProps={{
        decimalScale,
        fixedDecimalScale,
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
   * Ex: `validators={['required', 'isEmail']}`
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

UCurrencyField.defaultProps = {
  inputPrefix: '$',
  decimalScale: 2,
  fixedDecimalScale: true,
  textAlign: 'right',
}
