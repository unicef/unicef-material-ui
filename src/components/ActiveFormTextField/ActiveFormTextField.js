import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import UTextField from '../UTextField'

const useStyles = makeStyles(theme => ({
  icon: {
    display: 'none',
  },
  showIcon: {
    display: 'block'
  },
  notchedOutline: {
    borderRadius: 2,
    borderColor: 'transparent'
  },
  inputPadding: props => ({
    padding: props.inputPadding ? props.inputPadding : '9.5px 14px',
  }),
  input: props => ({
    ...theme.typography[props.typographyVariant]
  }),
}))

/** 
 * ActiveFormTextField is a UTextField component with form validation.
 * The cool feature with ActiveFormTextField is you can read and write at the same place.
 * * Read the content inside TextField
 * * Edit the TextField
 * 
 * Which is made by overriding some input styles and props from [TextFieldAPI](https://material-ui.com/api/text-field/#textfield-api).
 * 
 * It accepts all the TextField props and styles
 * 
 * It must be wrapped inside UValidatorForm Component and even if you don't want to use validation.
 *
 */
export default function ActiveFormTextField(props) {

  const classes = useStyles(props)
  const { variant, ...others } = props

  return (
    <UTextField
      InputLabelProps={{
        shrink: true,
      }}
      InputProps={{
        disableUnderline: true,
        classes: { root: classes.input, notchedOutline: classes.notchedOutline, input: classes.inputPadding }
      }}
      variant={variant || 'outlined'}
      {...others}
    >
      {props.children}
    </UTextField >
  )
}

ActiveFormTextField.propTypes = {
  /** Typography for text inside the input (Ex: h1, div, etc.) */
  typographyVariant: PropTypes.string,
  /** Input has some default padding already, to make changes to it pass padding like `inputPadding='0px 2px'` */
  inputPadding: PropTypes.string,
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
  name: PropTypes.string,
  /** It triggers after each validation.It will return true or false. */
  validatorListener: PropTypes.func,
  /** Allow to use required validator in any validation trigger, not only form submit. */
  withRequiredValidator: PropTypes.bool,
}

// const useStyles = makeStyles(theme => ({
//   input: {
//     backgroundColor: 'inherit',
//     height: '100%',
//     outline: 'none',
//     border: '1px solid transparent',
//     textOverflow: 'ellipsis',
//     ...theme.typography.h6,
//     padding: 4,
//     width: '100%',
//     '&:hover': {
//       border: '1px solid',
//       borderColor: 'grey',
//     },
//     '&:focus': {
//       border: '1px solid',
//       borderColor: 'blue',
//     },
//   },
//   hoverInput: {
//     width: '40%'
//   },
//   label: {
//     paddingLeft: 4,
//     color: 'grey',
//     fontSize: 14,
//   }
// }))