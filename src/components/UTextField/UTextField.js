import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import { TextField, MenuItem } from '@material-ui/core'
import { TextValidator } from 'react-material-ui-form-validator'

const useStyles = makeStyles(theme => ({
  textField: {
    margin: theme.spacing(1),
    minWidth: 195,
    backgroundImage: 'white'
  },
}));

/** 
 * UTextField is a Material-ui TextField component with form validation. 
 * UTextField is a [ValidatorComponent](https://www.npmjs.com/package/react-form-validator-core) from `react-form-validator-core` and must be wrapped inside its parent component UValidatorForm.
 * 
 * Default validation rules:
 * * matchRegexp
 * * isEmail
 * * isEmpty
 * * required
 * * trim
 * * isNumber
 * * isFloat
 * * isPositive
 * * minNumber
 * * maxNumber
 * * minFloat 
 * * maxFloat
 * * minStringLength
 * * maxStringLength
 * * isString
 * * maxFileSize
 * * allowedExtensions
 * 
 * It accepts all the props of Material-ui [TextField](https://material-ui.com/api/text-field/#textfield-api)
 */
export default function UTextField(props) {

  const classes = useStyles()
  const { options, ...others } = props

  UTextField.propTypes = {
    /** 
     * Array of validators.See list of default validators above.
     * 
     * Ex: `validators={['required', 'isEmail']}`
     */
    validators: PropTypes.array,
    /**
     * Array of error messages.Order of messages should be the same as validators prop.
     * 
     * Ex: `errorMessages={['this field is required', 'email is not valid']}`
     */
    errorMessages: PropTypes.array,
    /** Name of input. */
    name: PropTypes.string.isRequired,
    /** It triggers after each validation.It will return true or false. */
    validatorListener: PropTypes.func,
    /** Allow to use required validator in any validation trigger, not only form submit. */
    withRequiredValidator: PropTypes.bool,
    /** To make textfield to be select. */
    select: PropTypes.bool,
    /** If you pass select prop, it needs an options to show in select menu. */
    options: PropTypes.array,
  }

  return (
    <TextValidator {...others} >
      {options && options.map(option => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextValidator>
  )
}