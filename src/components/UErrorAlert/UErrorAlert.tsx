import React from 'react'
import { Box, Alert } from '@mui/material'

export interface UErrorAlertProps {
  /** Error object which holds the error message to display */
  error?: { message?: string } | null
  /** Format the error message */
  preformatted?: boolean
  /** Triggers close action of error alert */
  onClose?: () => void
}

/**
 * UErrorAlert is a component to display error message to the user
 */
export default function UErrorAlert({ error, preformatted = false, onClose }: UErrorAlertProps) {
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

