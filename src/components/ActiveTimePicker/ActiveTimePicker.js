import React from 'react'
import PropTypes from 'prop-types'
import DateFnsUtils from '@date-io/date-fns'
import { TimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'

import { makeStyles } from '@material-ui/core/styles'

import { InputLabelHelp } from '../Shared'

const styles = {
  labelRoot: {
    pointerEvents: 'auto',
    display: 'flex',
    alignItems: 'center',
  },
}

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
}))

/**
 * ActiveTimePicker is a customized material ui TimePicker.
 * This component let's you access the clock to select particular time.
 * Please have look at [Material Ui TimePicker]('https://material-ui-pickers.dev/api/TimePicker') for more details
 */
export default function ActiveTimePicker(props) {
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
    showLabelHelp,
    InputLabelHelpProps,
    label,
    ...others
  } = props

  const inputPaddingClass = props.label
    ? classes.inputPaddingWithLabel
    : classes.inputPaddingWithoutLabel
  const finalPlaceholder = readOnly ? null : placeholder

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <TimePicker
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
            <InputLabelHelp inputLabel={label} {...InputLabelHelpProps} />
          ) : (
            label
          )
        }
        {...others}
      />
    </MuiPickersUtilsProvider>
  )
}

ActiveTimePicker.propTypes = {
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
  /** Label text */
  label: PropTypes.string,
  /** Show label help */
  showLabelHelp: PropTypes.bool,
  /** Props applied to the input label help element. E.g InputLabelHelpProps={{type:'link', label:'Help', link:'unicef.github.io', icon, tooltipTitle: 'Tooltip title', tooltipPlacement: 'bottom}} */
  InputLabelHelpProps: PropTypes.object,
}

ActiveTimePicker.defaultProps = {
  inputVariant: 'outlined',
  autoOk: true,
  variant: 'inline',
}
