import './../../MuiClassNameSetup'
import React from 'react'
import { ThemeProvider, StyledEngineProvider, CssBaseline } from '@mui/material'
import theme from './../../theme'

export interface UNICEFStyleProviderProps {
  children?: React.ReactNode
}

export default function UNICEFStyleProvider(props: UNICEFStyleProviderProps) {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {props.children}
      </ThemeProvider>
    </StyledEngineProvider>
  )
}

