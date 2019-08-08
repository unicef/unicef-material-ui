import React from "react"
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider"
import { makeStyles } from "@material-ui/core/styles"
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
import { useTheme } from "@material-ui/core/styles"
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

const useStyles = makeStyles({
  header: {
    zIndex: theme.zIndex.drawer + 1,
  },
  bgColor: {
    backgroundColor: "#1CABE2",
  },
})

export default function App() {
  const tabs = [
    { name: "Active", type: "normal", link: null },
    { name: "Disabled", type: "disabled", link: null },
    { name: "Directory", type: "normal", link: null },
  ]
  const theme = useTheme()

  const classes = useStyles()
  return (
    <React.Fragment>
      <MuiThemeProvider theme={theme}>
        <UNICEFStyleProvider>
          <ULayout>
            <UHeader
              applicationName="Application"
              classes={{
                header: "zIndex",
                bgColor: "bg",
              }}
              // hideLogo={false}
              // logoBorderLine={false}
              // logo={<img alt="user" src={avatar} />}
              showHumburgerMenu={true}
            >
              <URightLinks>
                <NavLinks />
              </URightLinks>
              <UHeaderMainMenu tabs={tabs} />
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
    </React.Fragment>
  )
}
