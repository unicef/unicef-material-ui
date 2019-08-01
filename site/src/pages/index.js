import React from "react";
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import { theme, UNICEFStyleProvider, Header } from "unicef-material-ui";
import { NavLinks, MainContent } from '../components'

export default function App() {

  return (
    <MuiThemeProvider theme={theme}>
      <UNICEFStyleProvider>
        <Header
          applicationName="Material UI"
          navLinks={<NavLinks />}
        //   tabs={<NavTabs tabs={tabs} />}
        //   // hideLogo={false}
        //   // logoBorderLine={false}
        //   // logo={<img alt="user" src={avatar} />}
        //   menuItems={<MenuItems />}
        //   menuTabs={<MenuTabs />}
          menuButton={true}
        />
        <MainContent />
      </UNICEFStyleProvider>
    </MuiThemeProvider >
  )
}
