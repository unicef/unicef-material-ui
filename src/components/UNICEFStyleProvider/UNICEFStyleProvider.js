import './../../MuiClassNameSetup'
import React from 'react'
import { ThemeProvider, StyledEngineProvider, CssBaseline } from '@mui/material'
import theme from './../../theme'

export default function UNICEFStyleProvider(props) {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {props.children}
      </ThemeProvider>
    </StyledEngineProvider>
  )
}
