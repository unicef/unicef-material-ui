import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import UTextField from '../UTextField'

const useStyles = makeStyles(theme => ({
  textField: {
    minWidth: 193,
    marginTop: theme.spacing(0.25),
    marginBottom: theme.spacing(0.25),
  },
  icon: {
    display: 'none !important',
  },
  showIcon: {
    display: 'block',
  },
  notchedOutline: {
    borderRadius: 2,
    borderColor: 'transparent',
  },
  inputPadding: {
    padding: '9.5px 14px',
  },
  input: props => ({
    ...theme.typography[props.typographyVariant],
  }),
  inputHover: {
    '&:hover $notchedOutline': {
      borderColor: 'transparent',
    },
  },
}))

/**
 * ActiveFormSelect is same component as ActiveFormTextField but ActiveFormSelect is a Select component and ActiveFormTextField is Input.
 *
 * Which is made by overriding some input styles and props from [TextFieldAPI](https://material-ui.com/api/text-field/#textfield-api).
 *
 * It accepts all the TextField props and styles
 *
 * It must be wrapped inside UValidatorForm Component and even if you don't want to use validation.
 *
 */
export default function ActiveFormSelect(props) {
  const classes = useStyles(props)
  const {
    select,
    typographyVariant,
    className,
    showBorder,
    placeholder,
    readOnly,
    InputLabelProps,
    InputProps,
    inputProps,
    SelectProps,
    ...others
  } = props
  const [hideIcon, setHideIcon] = React.useState(classes.icon)
  const finalPlaceholder = readOnly ? null : placeholder

  function onMouseOver() {
    if (!readOnly) {
      setHideIcon(classes.showIcon)
    }
    return props.onMouseOver && props.onMouseOver
  }

  function handleBlur(event) {
    event.preventDefault()

    setHideIcon(classes.icon)
    return props.onBlur && props.onBlur
  }

  return (
    <UTextField
      placeholder={finalPlaceholder}
      InputLabelProps={{
        shrink: true,
        ...InputLabelProps,
      }}
      inputProps={{
        readOnly: Boolean(readOnly),
        disabled: Boolean(readOnly),
        ...inputProps,
      }}
      className={`${classes.textField} ${className && className}`}
      InputProps={{
        disableUnderline: true,
        classes: {
          root: `${classes.input} ${readOnly && classes.inputHover}`,
          notchedOutline: `${
            showBorder && !readOnly ? '' : classes.notchedOutline
          }`,
          input: classes.inputPadding,
        },
        ...InputProps,
      }}
      select
      SelectProps={{
        classes: { icon: readOnly && classes.icon },
        ...SelectProps,
      }}
      onMouseOver={onMouseOver}
      onMouseLeave={handleBlur}
      onBlur={handleBlur}
      variant="outlined"
      {...others}
    >
      {props.children}
    </UTextField>
  )
}

ActiveFormSelect.propTypes = {
  /** label */
  label: PropTypes.string,
  /** placeholder text*/
  placeholder: PropTypes.string,
  /** Typography for text inside the input (Ex: h1, div, etc.) */
  typographyVariant: PropTypes.string,
  /** Input has some default padding already, to make changes to it pass padding like `inputPadding='0px 2px'` */
  inputPadding: PropTypes.string,
  /** To make textfield to be select. See below examples section for select example and sample code */
  select: PropTypes.bool,
  /** Typography for text inside the input (Ex: h1, div, etc.) */
  typographyVariant: PropTypes.string,
  /** To hide or display the textfied border*/
  showBorder: PropTypes.bool,
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
  /** To make the content readOnly */
  readOnly: PropTypes.bool,
  /** Name of input. */
  name: PropTypes.string,
  /** It triggers after each validation.It will return true or false. */
  validatorListener: PropTypes.func,
  /** Allow to use required validator in any validation trigger, not only form submit. */
  withRequiredValidator: PropTypes.bool,
}

ActiveFormSelect.defaultProps = {
  placeholder: 'Select',
  showBorder: true,
}
