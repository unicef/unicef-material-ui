import React from 'react'
import { styled } from '@mui/material/styles'
import PropTypes from 'prop-types'
import { Box, Button, CircularProgress } from '@mui/material'

const PREFIX = 'UButton'

const classes = {
  root: `${PREFIX}-root`,
  wrapper: `${PREFIX}-wrapper`,
  buttonProgress: `${PREFIX}-buttonProgress`,
}

const StyledBox = styled(Box)(({ theme }) => ({
  [`&.${classes.root}`]: {
    display: 'flex',
    alignItems: 'center',
  },

  [`& .${classes.wrapper}`]: {
    position: 'relative',
  },

  [`& .${classes.buttonProgress}`]: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
}))

/**
 * Custom advanced button with unicef colors and also it has spinning effect in the button
 *
 * */
export default function UButton({
  spinButton = false,
  loading = false,
  variant = 'contained',
  color = 'primary',
  ...others
}) {
  function getVariant(variant) {
    switch (variant) {
      case 'uDefault':
        return 'outlined'
      case 'uPrimary':
        return 'contained'
      case 'contained':
        return 'contained'
      case 'outlined':
        return 'outlined'
      case 'text':
        return 'text'
      default:
        return 'contained'
    }
  }

  const CustomButton = (
    <Button
      variant={getVariant(variant)}
      color={color}
      disableRipple
      {...others}
    >
      {props.children}
    </Button>
  )

  return !spinButton ? (
    CustomButton
  ) : (
    <StyledBox className={classes.root}>
      <Box className={classes.wrapper}>
        {CustomButton}
        {loading && (
          <CircularProgress size={24} className={classes.buttonProgress} />
        )}
      </Box>
    </StyledBox>
  )
}

UButton.propTypes = {
  /**
   * loading is to handle the spinning in button.
   */
  loading: PropTypes.bool,
  /**
   * spinButton will enable the spinning button.
   */
  spinButton: PropTypes.bool,
  /**
   * variant is type of button: uDefault | uPrimary | contained | outlined | text.
   */
  variant: PropTypes.string,
  /**  color of the button */
  color: PropTypes.string,
}
