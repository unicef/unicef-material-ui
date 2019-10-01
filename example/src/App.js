import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import {
  theme,
  UNICEFStyleProvider,
} from 'unicef-material-ui'
import './App.css'
import Home from './Pages/Home'
import { Header } from './components'

export default function App() {

  return (
    <Router>
      <MuiThemeProvider theme={theme}>
        <UNICEFStyleProvider>
          <Header />
          <Switch>
            <Route path='/' component={Home} />
          </Switch>
        </UNICEFStyleProvider>
      </MuiThemeProvider>
    </Router>
  )
}
