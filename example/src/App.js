import React from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import theme from './theme'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { Header } from 'unicef-material-ui'
import { create } from 'jss';
import { StylesProvider, jssPreset } from '@material-ui/styles';
import './App.css'
import { NavLinks, NavTabs } from './components'

const history = createBrowserHistory()

const jss = create({
  ...jssPreset(),
  // Define a custom insertion point that JSS will look for when injecting the styles into the DOM.
  insertionPoint: 'jss-insertion-point',
});


export default function App() {

  const tabs = [{ name: 'Active', type: 'normal', link: "/header" }, { name: 'Disabled', type: 'disabled', link: null }, { name: 'Directory', type: 'normal', link: null }]

  // Example tab
  const tab = <ul>
    <li>Liat</li>
    <li>Liat</li>
    <li>Liat</li>
    <li>Liat</li>
  </ul>

  const tabss = <ul>
  <li>Liat</li>
  <li>Liat</li>
  <li>Liat</li>
  <li>Liat</li>
  </ul>

  return (
    <Router history={history}>
      <Switch>
        <Route exact={true} path="/">
          <MuiThemeProvider theme={theme}>
            <StylesProvider jss={jss}>
              <Header
                applicationName="Application"
                navLinks={<NavLinks />}
                tabs={<NavTabs tabs={tabs} />}
                logo={false}
                menuItems={tabss}
                menuTabs={tab}
                menuButton={true}
              />
            </StylesProvider>
          </MuiThemeProvider>

        </Route>
      </Switch>
    </Router>
  );
}

