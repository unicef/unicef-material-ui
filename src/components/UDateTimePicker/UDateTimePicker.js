import React from "react"
import PropTypes from 'prop-types'
import DateFnsUtils from '@date-io/date-fns'
import {
  DateTimePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers"

/**
 * UDateTimePicker is a customized material ui DateTimePicker.
 * This component let's you access the calender and clock to select date and time.
 * Plese have look at [Material Ui DateTimePicker]('https://material-ui-pickers.dev/api/DateTimePicker') for more details
 */
export default function UDateTimePicker(props) {

  const { autoOk, variant, inputVariant, ...others } = props

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <DateTimePicker
        autoOk={autoOk}
        variant={variant}
        inputVariant={inputVariant}
        {...others}
      />
    </MuiPickersUtilsProvider>
  );
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
}

UDateTimePicker.defaultProps = {
  inputVariant: "outlined",
  autoOk: true,
  variant: "inline",
  format: "dd-MMM-yyyy hh:mm a",
}


