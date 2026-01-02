import React from 'react'
import { Box, CircularProgress, Typography } from '@mui/material'

export interface UPageLoadingProgressProps {
  /** text to display instead of circular progress */
  text?: string
}

/**
 * UPageLoadingProgress is a component to display page loading progress in the user screen
 * It has two type of page loading information which is displayed in the center of the screen
 * 1. Display circular progress
 * 2. Display text message
 */
export default function UPageLoadingProgress({ text = '' }: UPageLoadingProgressProps) {
  return (
    <Box
      sx={{
        height: '50vh',
        flex: '1',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        spacing: 8,
      }}
    >
      {text ? (
        <Typography variant="h6">{text}</Typography>
      ) : (
        <CircularProgress />
      )}
    </Box>
  )
}

