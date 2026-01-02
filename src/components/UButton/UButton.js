import React from 'react'
import PropTypes from 'prop-types'
import { Box, Button, CircularProgress } from '@mui/material'

/**
 * Custom advanced button with unicef colors and also it has spinning effect in the button
 *
 * */
export default function UButton({
  spinButton = false,
  loading = false,
  variant = 'contained',
  color = 'primary',
  children,
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
      {children}
    </Button>
  )

  return !spinButton ? (
    CustomButton
  ) : (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ position: 'relative' }}>
        {CustomButton}
        {loading && (
          <CircularProgress
            size={24}
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              marginTop: -12,
              marginLeft: -12,
            }}
          />
        )}
      </Box>
    </Box>
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
