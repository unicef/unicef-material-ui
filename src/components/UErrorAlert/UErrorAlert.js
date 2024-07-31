import React from 'react'
import { Box, Alert } from '@mui/material'
import PropTypes from 'prop-types'
/**
 * UErrorAlert is a component to display error message to the user
 */
export default function UErrorAlert({ error, preformatted = false, onClose }) {
  return (
    <React.Fragment>
      {error && (
        <Box marginTop={2} marginBottom={2}>
          <Alert severity="error" onClose={() => onClose && onClose()}>
            {preformatted ? (
              <pre>{error.message}</pre>
            ) : (
              <React.Fragment>{error.message}</React.Fragment>
            )}
          </Alert>
        </Box>
      )}
    </React.Fragment>
  )
}

UErrorAlert.propTypes = {
  /** Error object which holds the error message to display */
  error: PropTypes.object,
  /** Format the error message */
  preformatted: PropTypes.bool,
  /** Triggers close action of error alert */
  onClose: PropTypes.func,
}
