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
      inputProps={{ decimalScale: decimalScale, ...inputProps }}
      {...props}
    />
  )
}

UCurrencyField.propTypes = {
  /** label */
  label: PropTypes.string,
  /** placeholder text*/
  placeholder: PropTypes.string,
  /** Typography for text inside the input (Ex: h1, div, etc.) */
  typographyVariant: PropTypes.string,
  /** Input has some default padding already, to make changes to it pass padding like `inputPadding='0px 2px'` */
  inputPadding: PropTypes.string,
  /** To hide or display the textfied border*/
  showBorder: PropTypes.bool,
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
  /** It triggers after each validation.It will return true or false. */
  validatorListener: PropTypes.func,
  /** Allow to use required validator in any validation trigger, not only form submit. */
  withRequiredValidator: PropTypes.bool,
}

UCurrencyField.defaultProps = {
  inputPrefix: '$',
  decimalScale: 2,
}
