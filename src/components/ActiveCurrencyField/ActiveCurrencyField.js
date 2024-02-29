import PropTypes from 'prop-types'
import ActiveFormPositiveInteger from '../ActiveFormPositiveInteger'

/**
 * The ActiveCurrencyField is for creating currency input fields. It accepts several props for customization, including "inputPrefix," "decimalScale," "fixedDecimalScale," "textAlign," and etc. The cool feature with ActiveCurrencyField is you can read and write at the same place.
 */
export default function ActiveCurrencyField({
  inputPrefix,
  decimalScale,
  fixedDecimalScale,
  textAlign,
  inputProps,
  ...props
}) {
  return (
    <ActiveFormPositiveInteger
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

ActiveCurrencyField.propTypes = {
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
  /** It triggers after each validation.It will return true or false. */
  validatorListener: PropTypes.func,
  /** Allow to use required validator in any validation trigger, not only form submit. */
  withRequiredValidator: PropTypes.bool,
  /** Input text align */
  textAlign: PropTypes.string,
}

ActiveCurrencyField.defaultProps = {
  inputPrefix: '$ ',
  decimalScale: 2,
  fixedDecimalScale: true,
  textAlign: 'right',
}
