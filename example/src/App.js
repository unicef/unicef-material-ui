import React from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import './App.css'
import { createBrowserHistory } from 'history'
import { NavLinks, NavTabs } from './components'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import theme from './theme'
import { Header } from 'unicef-material-ui'


const history = createBrowserHistory()

export default function App() {

  const tabs = [{ name: 'Active', type: 'normal', link: "/header" }, { name: 'Disabled', type: 'disabled', link: null }, { name: 'Directory', type: 'normal', link: null }]
  return (
    <Router history={history}>
      <Switch>
        <Route exact={true} path="/">
          <MuiThemeProvider theme={theme}>
            <Header
              applicationName="Application"
              navLinks={<NavLinks />}
                tabs={<NavTabs tabs={tabs} />}
              logo={false}
              menuButton={true}
            />
          </MuiThemeProvider>
        </Route>
      </Switch>
    </Router>
  );
}

