import React from 'react'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import { theme, UNICEFStyleProvider, Header, UNLayout, UNSidebar, UNPageContent, NavTabs } from 'unicef-material-ui'
import './App.css'
import { NavLinks, ColorsExample, FormExample, CardWithTabs, CardsExample, Alert, MenuItems, MenuTabs, LoadingButton } from './components'

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
          <UNLayout>
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
            <UNSidebar headerHeight={112}>
              <MenuItems />
            </UNSidebar>
            <UNPageContent headerHeight={112}>
              <ColorsExample></ColorsExample>
              <FormExample />
              <LoadingButton />
              <Alert />
              <CardWithTabs />
              <CardsExample />
            </UNPageContent>
          </UNLayout>
        </UNICEFStyleProvider>
      </MuiThemeProvider >
    </React.Fragment>
  )
}
