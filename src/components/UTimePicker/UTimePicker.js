import React from "react"
import PropTypes from 'prop-types'
import DateFnsUtils from '@date-io/date-fns'
import {
  TimePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers"

/**
 * UTimePicker is a customized material ui TimePicker.
 * This component let's you access the clock to select particular time.
 * Plese have look at [Material Ui TimePicker]('https://material-ui-pickers.dev/api/TimePicker') for more details
 */
export default function UTimePicker(props) {

  const { keyboardTimePicker, inputVariant, format, ...others } = props

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <TimePicker
        inputVariant={inputVariant}
        {...others}
      />
    </MuiPickersUtilsProvider>
  );
}

UTimePicker.propTypes = {
  /** autoOk on time select */
  autoOk: PropTypes.bool,
  /** Picker container option variant : 'dialog' | 'inline' | 'static' */
  variant: PropTypes.string,
  /** Material ui textfiled variant */
  inputVariant: PropTypes.string,
}

UTimePicker.defaultProps = {
  inputVariant: "outlined",
  autoOk: true,
  variant: "inline",
}