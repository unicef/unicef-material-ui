import React, { memo } from 'react'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import { StylesProvider, createGenerateClassName, jssPreset } from '@material-ui/styles'
import { create } from 'jss'
import { theme, Header, NavTabs } from 'unicef-material-ui'
import './App.css'
import { NavLinks, Form, CardWithTabs, Cards, Alert, MenuItems, MenuTabs } from './components'

const generateClassName = createGenerateClassName({
  productionPrefix: 'c',
});

const jss = create({
  ...jssPreset(),
  // Define a custom insertion point that JSS will look for when injecting the styles into the DOM.
  insertionPoint: 'jss-insertion-point',
});

function App() {

  const tabs = [{ name: 'Active', type: 'normal', link: "/header" }, { name: 'Disabled', type: 'disabled', link: null }, { name: 'Directory', type: 'normal', link: null }]

  return (
    <MuiThemeProvider theme={theme}>
      <StylesProvider generateClassName={generateClassName}>
        <StylesProvider jss={jss}>
          <Header
            applicationName="Application"
            navLinks={<NavLinks />}
            tabs={<NavTabs tabs={tabs} />}
            // hideLogo={false}
            // logoBorderLine={false}
            // logo={<img alt="user" src={avatar} />}
            menuItems={<MenuItems />}
            menuTabs={<MenuTabs />}
            menuButton={true}
          />
          <div className="margin-top">
            <Form />
            <Alert />
            <CardWithTabs />
            <Cards />
          </div>
        </StylesProvider>
      </StylesProvider>
    </MuiThemeProvider>
  )
}
export default memo(App)