import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core'
import UPositiveInteger from '../UPositiveInteger'

const useStyles = makeStyles(theme => ({
  startAdornmentContainer: {
    marginRight: theme.spacing(0.5),
  },
}))

export default function ActiveCurrencyTextField({
  InputProps,
  inputProps,
  ...props
}) {
  const classes = useStyles(props)
  return (
    <UPositiveInteger
      variant="outlined"
      InputProps={{
        startAdornment: (
          <span className={classes.startAdornmentContainer}>$</span>
        ),
        ...InputProps,
      }}
      inputProps={{ decimalScale: 2, ...inputProps }}
      {...props}
    />
  )
}

ActiveCurrencyTextField.propTypes = {
  /** Attributes applied to the input element. */
  inputProps: PropTypes.object,
  /** Props applied to the Input element. */
  InputProps: PropTypes.object,
}

ActiveCurrencyTextField.defaultProps = {
  inputProps: {},
  InputProps: {},
}
