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

export default function NoOptionsMessage({ innerProps }) {
  return (
    <StyledTypography
      color="textSecondary"
      {...innerProps}
      className={classes.noOptionsMessage}
    >
      No options
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
