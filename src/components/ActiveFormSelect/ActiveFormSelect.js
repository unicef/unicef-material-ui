import React from 'react'
import { styled } from '@mui/material/styles'
import PropTypes from 'prop-types'
import { Box } from '@mui/material'
import { outlinedInputClasses } from '@mui/material/OutlinedInput'
import UTextField from '../UTextField'

const PREFIX = 'ActiveFormSelect'

const classes = {
  textField: `${PREFIX}-textField`,
  icon: `${PREFIX}-icon`,
  showIcon: `${PREFIX}-showIcon`,
  notchedOutline: `${PREFIX}-notchedOutline`,
  inputPadding: `${PREFIX}-inputPadding`,
  input: `${PREFIX}-input`,
  inputHover: `${PREFIX}-inputHover`,
}

const StyledBox = styled(Box, {
  shouldForwardProp: prop => prop !== 'typographyVariant',
})(({ theme, typographyVariant }) => ({
  [`& .${classes.textField}`]: {
    marginTop: theme.spacing(0.25),
    marginBottom: theme.spacing(0.25),
  },

  [`& .${classes.icon}`]: {
    display: 'none',
  },

  [`& .${classes.showIcon}`]: {
    display: 'block',
  },

  [`& .${classes.notchedOutline}`]: {
    borderRadius: 2,
    borderColor: 'transparent',
  },

  [`& .${classes.inputPadding}`]: {
    padding: '9.5px 14px',
    [`&.${outlinedInputClasses.disabled}`]: {
      color: theme.palette.text.primary,
      '-webkit-text-fill-color': theme.palette.text.primary,
    },
  },

  [`& .${classes.input}`]: {
    ...theme.typography[typographyVariant],
  },

  [`& .${classes.inputHover}`]: {
    [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
      borderColor: 'transparent',
    },
  },
}))

/**
 * ActiveFormSelect is same component as ActiveFormTextField but ActiveFormSelect is a Select component and ActiveFormTextField is Input.
 *
 * Which is made by overriding some input styles and props from [TextFieldAPI](https://mui.com/material-ui/api/text-field/#textfield-api).
 *
 * It accepts all the TextField props and styles
 *
 * It must be wrapped inside UValidatorForm Component and even if you don't want to use validation.
 *
 */
export default function ActiveFormSelect(props) {
  const {
    select,
    typographyVariant,
    className,
    interactiveMode = false,
    placeholder = 'Select',
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
    <StyledBox typographyVariant={typographyVariant}>
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
          classes: {
            root: `${classes.input} ${readOnly && classes.inputHover}`,
            notchedOutline: `${
              !interactiveMode && !readOnly ? '' : classes.notchedOutline
            }`,
            input: classes.inputPadding,
          },
          ...InputProps,
        }}
        select
        SelectProps={{
          classes: { icon: (interactiveMode || readOnly) && hideIcon },
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
    </StyledBox>
  )
}

ActiveFormSelect.propTypes = {
  /** label */
  label: PropTypes.string,
  /** placeholder text*/
  placeholder: PropTypes.string,
  /** Typography for text inside the input (Ex: h1, div, etc.) */
  typographyVariant: PropTypes.string,
  /** To make textfield to be select. See below examples section for select example and sample code */
  select: PropTypes.bool,
  /** Change to write mode by hiding textfield border and displays border on Hover*/
  interactiveMode: PropTypes.bool,
  /** Input has some default padding already, to make changes to it pass padding like `inputPadding='0px 2px'` */
  inputPadding: PropTypes.string,
  /**
   * Array of validators.See list of default validators above.
   *
   * Ex: `validators={['required', 'isEmail']}`
   */
  validators: PropTypes.array,
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
