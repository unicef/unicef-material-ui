import React from 'react'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import {
  theme,
  UNICEFStyleProvider,
} from 'unicef-material-ui'
import './App.css'
import {
  Layout
} from './components'

export default function App() {

  return (
    <MuiThemeProvider theme={theme}>
      <UNICEFStyleProvider>
        <Layout />
      </UNICEFStyleProvider>
    </MuiThemeProvider>
  )
}
