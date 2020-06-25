import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
  noOptionsMessage: {
    padding: theme.spacing(1),
  },
  errorMessage: {
    color: theme.palette.error.main,
  },
}))

export default function NoOptionsMessage({
  children,
  innerProps,
  selectProps,
}) {
  const classes = useStyles()
  const { showNoOptionsWithEmptyTextField, errorOptionsMessage } = selectProps
  return (
    <Typography
      color="textSecondary"
      {...innerProps}
      className={`${classes.noOptionsMessage} ${errorOptionsMessage &&
        classes.errorMessage} `}
    >
      {errorOptionsMessage
        ? errorOptionsMessage
        : showNoOptionsWithEmptyTextField
        ? children
        : ''}
    </Typography>
  )
}

NoOptionsMessage.propTypes = {
  /**
   * The children to be rendered.
   */
  children: PropTypes.node,
  /**
   * Props to be passed on to the wrapper.
   */
  innerProps: PropTypes.object,
  /**
   *  To display error message on loading options
   */
  errorLoadingOptions: PropTypes.string,
  /**
   * To show or hide the no options message on empty texfield value
   */
  showNoOptionsWithEmptyTextField: PropTypes.bool,
}

NoOptionsMessage.defaultProps = {
  showNoOptionsWithEmptyTextField: true,
}
