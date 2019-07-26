import React from 'react'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import { theme, UNICEFStyleProvider, Header, NavTabs } from 'unicef-material-ui'
import './App.css'
import { NavLinks, Form, CardWithTabs, CardsExample, Alert, MenuItems, MenuTabs, LoadingButton } from './components'

export default function App() {

  const tabs = [
    { name: 'Active', type: 'normal', link: "/header" }, 
    { name: 'Disabled', type: 'disabled', link: null }, 
    { name: 'Directory', type: 'normal', link: null }
  ]

  return (
    <React.Fragment>
      <MuiThemeProvider theme={theme}>
        <UNICEFStyleProvider>
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
            <LoadingButton />
            <Alert />
            <CardWithTabs />
            <CardsExample />
          </div>
        </UNICEFStyleProvider>
      </MuiThemeProvider >
    </React.Fragment>
  )
}
