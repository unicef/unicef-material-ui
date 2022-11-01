import React from 'react'
import PropTypes from 'prop-types'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker'

import { InputLabelHelp } from '../Shared'

const styles = {
  labelRoot: {
    pointerEvents: 'auto',
    display: 'flex',
    alignItems: 'center',
  },
}

/**
 * UDateTimePicker is a customized material ui DateTimePicker.
 * This component let's you access the calender and clock to select date and time.
 * Plese have look at [Material Ui DateTimePicker]('https://material-ui-pickers.dev/api/DateTimePicker') for more details
 */
export default function UDateTimePicker(props) {
  const {
    autoOk,
    variant,
    inputVariant,
    showLabelHelp,
    InputLabelProps,
    InputLabelHelpProps,
    label,
    ...others
  } = props

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateTimePicker
        autoOk={autoOk}
        variant={variant}
        inputVariant={inputVariant}
        InputLabelProps={{
          ...InputLabelProps,
          style: { ...styles.labelRoot },
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
    </LocalizationProvider>
  )
}

UDateTimePicker.propTypes = {
  /** autoOk on date select */
  autoOk: PropTypes.bool,
  /** Picker container option variant : 'dialog' | 'inline' | 'static' */
  variant: PropTypes.string,
  /** Material ui textfiled variant */
  inputVariant: PropTypes.string,
  /** date format */
  format: PropTypes.string,
  /** Label text */
  label: PropTypes.string,
  /** Show label help */
  showLabelHelp: PropTypes.bool,
  /** Props applied to the input label help element. E.g InputLabelHelpProps={{type:'link', label:'Help', link:'unicef.github.io', icon, tooltipTitle: 'Tooltip title', tooltipPlacement: 'bottom}} */
  InputLabelHelpProps: PropTypes.object,
}

UDateTimePicker.defaultProps = {
  inputVariant: 'outlined',
  autoOk: true,
  variant: 'inline',
  format: 'dd-MMM-yyyy hh:mm a',
}
