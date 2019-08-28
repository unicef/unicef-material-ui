import React from "react"
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider"
import {
  theme,
  UNICEFStyleProvider,
  UHeader,
  UHeaderRightButtons,
  UHeaderLeftMenu,
} from "unicef-material-ui"
import { NavLinks, MainContent, MenuTabs } from "../components"

export default function App() {
  return (
    <UNICEFStyleProvider>
      <UHeader
        showHamburgerMenu={true}
        color="white"
        bgColor="#1CABE2"
        applicationName="Material UI"
        logoUrl="https://unicef.github.io/unicef-material-ui/"
      >
        <UHeaderRightButtons>
          <NavLinks />
        </UHeaderRightButtons>
        <UHeaderLeftMenu>
          <MenuTabs />
        </UHeaderLeftMenu>
      </UHeader>
      <MainContent />
    </UNICEFStyleProvider>
  )
}
