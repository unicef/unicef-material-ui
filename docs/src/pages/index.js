import React from "react";
import { theme, UNICEFStyleProvider, Header } from "unicef-material-ui";

export default function App() {

    return (
        // <MuiThemeProvider theme={theme}>
            <Header
              applicationName="Application"
            //   navLinks={<NavLinks />}
            //   tabs={<NavTabs tabs={tabs} />}
            //   // hideLogo={false}
            //   // logoBorderLine={false}
            //   // logo={<img alt="user" src={avatar} />}
            //   menuItems={<MenuItems />}
            //   menuTabs={<MenuTabs />}
              menuButton={true}
            />
        // </MuiThemeProvider >
    )
}
