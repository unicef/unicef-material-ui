import React from 'react'
import { styled } from '@mui/material/styles'
import { Box } from '@mui/material'
import PropTypes from 'prop-types'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'

import { InputLabelHelp } from '../Shared'

const PREFIX = 'ActiveKeyboardDatePicker'

const classes = {
  textField: `${PREFIX}-textField`,
  notchedOutline: `${PREFIX}-notchedOutline`,
  inputPaddingWithoutLabel: `${PREFIX}-inputPaddingWithoutLabel`,
  inputPaddingWithLabel: `${PREFIX}-inputPaddingWithLabel`,
  input: `${PREFIX}-input`,
  inputHover: `${PREFIX}-inputHover`,
  icon: `${PREFIX}-icon`,
  showIcon: `${PREFIX}-showIcon`,
}

const StyledBox = styled(Box)(({ theme }) => ({
  [`& .${classes.textField}`]: {
    marginTop: theme.spacing(0.25),
    marginBottom: theme.spacing(0.25),
  },

  [`& .${classes.notchedOutline}`]: {
    borderRadius: 2,
    borderColor: 'transparent',
  },

  [`& .${classes.inputPaddingWithoutLabel}`]: props => ({
    padding: props.inputPadding ? props.inputPadding : '2px 2px 2px 2px',
    height: 'auto',
  }),

  [`& .${classes.inputPaddingWithLabel}`]: props => ({
    padding: props.inputPadding ? props.inputPadding : '9.5px 14px',
    height: 'auto',
  }),

  [`& .${classes.input}`]: props => ({
    ...theme.typography[props.typographyVariant],
  }),

  [`& .${classes.inputHover}`]: {
    '&:hover $notchedOutline': {
      borderColor: 'transparent',
    },
  },

  [`& .${classes.icon}`]: {
    display: 'none',
  },

  [`& .${classes.showIcon}`]: {
    display: 'block',
  },
}))

const styles = {
  labelRoot: {
    pointerEvents: 'auto',
    display: 'flex',
    alignItems: 'center',
  },
}

/**
 * ActiveKeyboardDatePicker is a customized [Material Ui KeyboardDatePicker]('https://material-ui-pickers.dev/api/KeyboardDatePicker') for more details
 */
export default function ActiveKeyboardDatePicker(props) {
  const {
    autoOk,
    variant,
    inputVariant,
    readOnly,
    interactiveMode,
    InputLabelProps,
    className,
    inputProps,
    InputProps,
    placeholder,
    showLabelHelp,
    inputlabelhelpprops,
    label,
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
    <StyledBox>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          autoOk={autoOk}
          variant={variant}
          inputVariant={inputVariant}
          placeholder={finalPlaceholder}
          className={`${classes.textField} ${className && className}`}
          InputLabelProps={{
            shrink: true,
            style: { ...styles.labelRoot },
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
          label={
            showLabelHelp ? (
              <InputLabelHelp inputLabel={label} {...inputlabelhelpprops} />
            ) : (
              label
            )
          }
          onMouseOver={onMouseOver}
          onMouseLeave={handleBlur}
          onBlur={handleBlur}
          {...others}
        />
      </LocalizationProvider>
    </StyledBox>
  )
}

ActiveKeyboardDatePicker.propTypes = {
  /** AutoOk on date select */
  autoOk: PropTypes.bool,
  /** Picker container option variant : 'dialog' | 'inline' | 'static' */
  variant: PropTypes.string,
  /** Material ui textfiled variant */
  inputVariant: PropTypes.string,
  /** Date format */
  format: PropTypes.string,
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
  /** Label text */
  label: PropTypes.string,
  /** Show label help */
  showLabelHelp: PropTypes.bool,
  /** Props applied to the input label help element. E.g inputlabelhelpprops={{type:'link', label:'Help', link:'unicef.github.io', icon, tooltipTitle: 'Tooltip title', tooltipPlacement: 'bottom}} */
  inputlabelhelpprops: PropTypes.object,
}

ActiveKeyboardDatePicker.defaultProps = {
  inputVariant: 'outlined',
  autoOk: true,
  variant: 'inline',
  format: 'dd/MM/yyyy',
}
