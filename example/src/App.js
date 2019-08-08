import React from "react"
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider"
import {
  theme,
  UNICEFStyleProvider,
  UHeader,
  ULayout,
  USidebar,
  UPageContent,
  ULeftMenu,
  URightLinks,
  UHeaderMainMenu,
} from "unicef-material-ui"
import "./App.css"
import {
  NavLinks,
  ColorsExample,
  FormExample,
  CardWithTabs,
  CardsExample,
  Alert,
  MenuItems,
  MenuTabs,
  LoadingButton,
} from "./components"

export default function App() {
  const tabs = [
    { name: "Active", type: "normal", link: null },
    { name: "Disabled", type: "disabled", link: null },
    { name: "Directory", type: "normal", link: null },
  ]

  return (
    <MuiThemeProvider theme={theme}>
      <UNICEFStyleProvider>
        <ULayout>
          <UHeader
            applicationName="Application"
            logoUrl="https://unicef.github.io/unicef-material-ui/"
            // hideLogo={true}
            // hideLogoBorderLine={false}
            // logo={<img alt="user" src={avatar} />}
            showHumburgerMenu={true}
          >
            <URightLinks>
              <NavLinks />
            </URightLinks>
            <UHeaderMainMenu tabs={tabs} bgColor="white" />
            <ULeftMenu>
              <MenuTabs />
            </ULeftMenu>
          </UHeader>
          <USidebar headerHeight={112}>
            <MenuItems />
          </USidebar>
          <UPageContent headerHeight={112}>
            {/* <ColorsExample /> */}
            <FormExample />
            <LoadingButton />
            <Alert />
            <CardWithTabs />
            <CardsExample />
          </UPageContent>
        </ULayout>
      </UNICEFStyleProvider>
    </MuiThemeProvider>
  )
}
