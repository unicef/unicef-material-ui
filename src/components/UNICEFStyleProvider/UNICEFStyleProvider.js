import React from 'react'
import { ThemeProvider, StyledEngineProvider, CssBaseline } from '@mui/material'
import theme from './../../theme'
import PropTypes from 'prop-types'

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

UNICEFStyleProvider.propTypes = {
  /** The content of the component. */
  children: PropTypes.node,
}
