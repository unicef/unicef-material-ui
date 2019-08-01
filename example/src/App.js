import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import {
  theme,
  UNICEFStyleProvider,
  Header,
  NavTabs
} from "unicef-material-ui";
import "./App.css";
import {
  NavLinks,
  Form,
  CardWithTabs,
  Cards,
  Alert,
  MenuItems,
  MenuTabs,
  LoadingButtton
} from "./components";

export default function App() {
  const tabs = [
    { name: "Active", type: "normal", link: "/header" },
    { name: "Disabled", type: "disabled", link: null },
    { name: "Directory", type: "normal", link: null }
  ];

  return (
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
          <LoadingButtton />
          <Alert />
          <CardWithTabs />
          <Cards />
        </div>
      </UNICEFStyleProvider>
    </MuiThemeProvider>
  );
}
