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
  UMainMenuLink,
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
    // <MuiThemeProvider theme={theme}>
    //   <UNICEFStyleProvider>
    <ULayout>
      <UHeader
        color="white"
        bgColor="#1CABE2"
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
        <UHeaderMainMenu bgColor="white">
          <UMainMenuLink label="Active" href="/" />
          <UMainMenuLink label="disabled" disabled href="/" />
          <UMainMenuLink label="Directory" href="/" />
        </UHeaderMainMenu>
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
    //   </UNICEFStyleProvider>
    // </MuiThemeProvider>
  )
}
