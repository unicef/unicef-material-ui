import React from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'
// import theme from './theme'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { theme, Header } from 'unicef-material-ui'
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
    <li>Tab 1</li>
    <li>Tab 2</li>
    <li>Tab 3</li>
    <li>Tab 4</li>
  </ul>

  // Menu Items
  const items = <ul>
  <li>Notifications</li>
  <li>With icon</li>
  <li>Dropdown</li>
  <li>Profile</li>
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
                menuItems={items}
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

