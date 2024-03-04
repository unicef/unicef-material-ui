import React from 'react'
import { styled } from '@mui/material/styles'
import PropTypes from 'prop-types'
import Typography from '@mui/material/Typography'

const PREFIX = 'NoOptionsMessage'

const classes = {
  noOptionsMessage: `${PREFIX}-noOptionsMessage`,
}

const StyledTypography = styled(Typography)(({ theme }) => ({
  [`&.${classes.noOptionsMessage}`]: {
    padding: theme.spacing(1.5),
  },
}))

export default function NoOptionsMessage({ innerProps, selectProps }) {
  return (
    <StyledTypography
      color="textSecondary"
      {...innerProps}
      className={classes.noOptionsMessage}
    >
      {selectProps && selectProps.noOptionsText}
    </StyledTypography>
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
}
