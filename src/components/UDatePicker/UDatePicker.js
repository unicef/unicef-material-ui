import React from "react"
import PropTypes from 'prop-types'
import DateFnsUtils from '@date-io/date-fns'
import {
  DatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers"

/**
 * UDatePicker is a customized material ui Date picker.
 * This component let's you access the calender to select particular dates.
 * Plese have look at [Material Ui Date Picker]('https://material-ui-pickers.dev/api/DatePicker') for more details
 */
export default function UDatePicker(props) {

  const { autoOk, variant, inputVariant, ...others } = props

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <DatePicker
        autoOk={autoOk}
        variant={variant}
        inputVariant={inputVariant}
        {...others}
      />
    </MuiPickersUtilsProvider>
  );
}

UDatePicker.propTypes = {
  /** autoOk on date select */
  autoOk: PropTypes.bool,
  /** Picker container option variant : 'dialog' | 'inline' | 'static' */
  variant: PropTypes.string,
  /** Material ui textfiled variant */
  inputVariant: PropTypes.string,
  /** date format */
  format: PropTypes.string,
}

UDatePicker.defaultProps = {
  inputVariant: "outlined",
  autoOk: true,
  variant: "inline",
  format: "dd-MMM-yyyy",
}


