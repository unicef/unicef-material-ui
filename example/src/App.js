import React from 'react'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import { Theme, UNICEFStyleProvider, Header, NavTabs, SpinningButton, CustomSelect } from 'unicef-material-ui'
import './App.css'
import { NavLinks, Form, CardWithTabs, Cards, Alert, MenuItems, MenuTabs } from './components'
import {
  Typography
} from '@material-ui/core';

export default function App() {

  const tabs = [{ name: 'Acti', type: 'normal', link: "/header" }, { name: 'Disabled', type: 'disabled', link: null }, { name: 'Directory', type: 'normal', link: null }]
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(true);
  const timer = React.useRef();

  React.useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  function handleLoadingFunc(value) {
    if(value) {
      setSuccess(false);
      setLoading(true);
      timer.current = setTimeout(() => {
        setSuccess(true);
        setLoading(false);
      }, 2000);
    }
 }

  return (
    <React.Fragment>
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
            <Typography  variant="h5" style={{margin: '16px 0px'}}>
              SpinningButton
            </Typography>
            <SpinningButton loading={loading} success={success} loadingFunc={handleLoadingFunc} buttonText="Download"/>
            <Typography  variant="h5" style={{margin: '16px 0px'}}>
              Custom Select
            </Typography>
            <CustomSelect />
          </div>
        </UNICEFStyleProvider>
      </MuiThemeProvider >
    </React.Fragment>
  )
}
