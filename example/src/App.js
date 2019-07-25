import React from 'react'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import { Theme, UNICEFStyleProvider, Header, NavTabs } from 'unicef-material-ui'
import './App.css'
import { NavLinks, Form, CardWithTabs, Cards, Alert, MenuItems, MenuTabs } from './components'

export default function App() {

  const tabs = [{ name: 'Acti', type: 'normal', link: "/header" }, { name: 'Disabled', type: 'disabled', link: null }, { name: 'Directory', type: 'normal', link: null }]

  return (
    <MuiThemeProvider theme={Theme}>
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
          <Alert />
          <CardWithTabs />
          <Cards />
        </div>
      </UNICEFStyleProvider>
    </MuiThemeProvider >
  )
}
