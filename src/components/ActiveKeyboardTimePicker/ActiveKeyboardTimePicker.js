import React from 'react'
import PropTypes from 'prop-types'
import DateFnsUtils from '@date-io/date-fns'
import {
  KeyboardTimePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  textField: {
    marginTop: theme.spacing(0.25),
    marginBottom: theme.spacing(0.25),
  },
  notchedOutline: {
    borderRadius: 2,
    borderColor: 'transparent',
  },
  inputPaddingWithoutLabel: props => ({
    padding: props.inputPadding ? props.inputPadding : '2px 2px 2px 2px',
    height: 'auto',
  }),
  inputPaddingWithLabel: props => ({
    padding: props.inputPadding ? props.inputPadding : '9.5px 14px',
    height: 'auto',
  }),
  input: props => ({
    ...theme.typography[props.typographyVariant],
  }),
  inputHover: {
    '&:hover $notchedOutline': {
      borderColor: 'transparent',
    },
  },
  icon: {
    display: 'none',
  },
  showIcon: {
    display: 'block',
  },
}))

/**
 * ActiveKeyboardTimePicker is customized [ Material Ui KeyboardTimePicker](https://material-ui-pickers.dev/api/KeyboardTimePicker)
 */
export default function ActiveKeyboardTimePicker(props) {
  const classes = useStyles(props)
  const {
    inputVariant,
    readOnly,
    interactiveMode,
    InputLabelProps,
    className,
    inputProps,
    InputProps,
    placeholder,
    ...others
  } = props

  const [hideIcon, setHideIcon] = React.useState(classes.icon)

  const inputPaddingClass = props.label
    ? classes.inputPaddingWithLabel
    : classes.inputPaddingWithoutLabel
  const finalPlaceholder = readOnly ? null : placeholder

  const onMouseOver = () => {
    if (!readOnly) {
      setHideIcon(classes.showIcon)
    }
    return props.onMouseOver && props.onMouseOver
  }

  const handleBlur = event => {
    event.preventDefault()
    setHideIcon(classes.icon)
    return props.onBlur && props.onBlur
  }

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardTimePicker
        inputVariant={inputVariant}
        placeholder={finalPlaceholder}
        className={`${classes.textField} ${className && className}`}
        InputLabelProps={{
          shrink: true,
          ...InputLabelProps,
        }}
        inputProps={{
          readOnly: Boolean(readOnly),
          disabled: Boolean(readOnly),
          ...inputProps,
        }}
        readOnly={readOnly}
        KeyboardButtonProps={{
          classes: {
            root: `${!interactiveMode && !readOnly ? '' : hideIcon}`,
          },
        }}
        InputProps={{
          classes: {
            root: `${classes.input} ${readOnly && classes.inputHover}`,
            notchedOutline: `${
              !interactiveMode && !readOnly ? '' : classes.notchedOutline
            }`,
            input: inputPaddingClass,
          },
          ...InputProps,
        }}
        onMouseOver={onMouseOver}
        onMouseLeave={handleBlur}
        onBlur={handleBlur}
        {...others}
      />
    </MuiPickersUtilsProvider>
  )
}

ActiveKeyboardTimePicker.propTypes = {
  /** autoOk on time select */
  autoOk: PropTypes.bool,
  /** Material ui text field variant */
  inputVariant: PropTypes.string,
  /** To make the content readOnly */
  readOnly: PropTypes.bool,
  /** Change to write mode by hiding text field border and displays border on hover*/
  interactiveMode: PropTypes.bool,
  /** Props applied to the InputLabel element.*/
  InputLabelProps: PropTypes.object,
  /** Attributes applied to the input element. */
  inputProps: PropTypes.object,
  /** Props applied to the Input element. */
  InputProps: PropTypes.object,
  /** Placeholder text*/
  placeholder: PropTypes.string,
}

ActiveKeyboardTimePicker.defaultProps = {
  inputVariant: 'outlined',
  autoOk: true,
  variant: 'inline',
}
