import React, { useEffect, useState } from 'react'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import {
  theme,
  UNICEFStyleProvider,
  UHeader,
  ULayout,
  USideBar,
  UContent,
  UHeaderRightButtons,
  UHeaderMainMenu,
  UHeaderLeftMenu,
  USelect,
} from 'unicef-material-ui'
import './App.css'
import {
  NavLinks,
  ColorsExample,
  CardWithTabs,
  CardsExample,
  Alert,
  MenuTabs,
  Buttons,
  FormValidator,
} from './components'
import { Tab, Typography } from '@material-ui/core'
import { mergeClasses } from '@material-ui/styles';

const options = [
  { title: 'Juan Merlos Tevar', subtitle: 'Manager', imageUrl: null },
  { title: 'Suresh Sevarthi', subtitle: 'Front-end Developer', imageUrl: null },
  { title: 'Kundal Singh Mehra', subtitle: 'Back-end Developer', imageUrl: null },
  { title: 'Gia Zarina Santos', subtitle: 'Manager', imageUrl: null },
  { title: 'Cory Kleinschmidt', subtitle: 'Information technology specialist', imageUrl: null },
  { title: 'Riddhi Poladia', subtitle: 'Database Specialist', imageUrl: null },
  { title: 'Mahananda Talgaonkar', subtitle: 'Sharepoint Developer', imageUrl: null },
  { title: 'Mary Anne Alde', subtitle: 'Sharepoint analyst', imageUrl: null },
  { title: 'Renga Narayanan', subtitle: 'Back-end Developer', imageUrl: null },
].map(suggestion => ({
  value: suggestion.title,
  label: suggestion.title,
  subtitle: suggestion.subtitle,
  imageUrl: suggestion.imageUrl,
}))

export default function App() {

  const [isLoading, setLoading] = useState(true)
  const [gotOptions, setOptions] = useState([''])

  useEffect(() => {
    setTimeout(() => {
      setOptions(options)
      setLoading(false)
    }, 3000);
    return () => clearTimeout();
  }, []);

  return (
    <MuiThemeProvider theme={theme}>
      <UNICEFStyleProvider>
        <ULayout>
          <UHeader
            showHamburgerMenu={true}
            color="white"
            bgColor="#1CABE2"
            applicationName="Application"
            logoUrl="https://unicef.github.io/unicef-material-ui/"
          >
            <UHeaderRightButtons>
              <NavLinks />
            </UHeaderRightButtons>
            <UHeaderMainMenu
              bgcolor="white"
              value={0}
              indicatorColor="primary"
              textColor="primary"
            // onChange={handleChange}
            >
              <Tab label="Active" />
              <Tab label="Disabled" disabled />
              <Tab label="Directory" />
            </UHeaderMainMenu>
            <UHeaderLeftMenu>
              <MenuTabs />
            </UHeaderLeftMenu>
          </UHeader>
          <USideBar headerHeight={112}>
            <MenuTabs />
          </USideBar>
          <UContent headerHeight={112}>
            <ColorsExample />
            <Typography variant="h5" style={{ marginTop: '16px' }}>
              USelect
            </Typography>
            <USelect
              label="People"
              TextFieldProps={{
                helperText: 'Please select people from list',
              }}
              isLoading={isLoading}
              placeholder="Select people ..."
              options={gotOptions}
              isMulti
            />
            <Typography variant="h5" style={{ marginTop: '16px' }}>
              Form validator
            </Typography>
            <FormValidator />
            <Buttons />
            <Alert />
            <CardWithTabs />
            <CardsExample />
          </UContent>
        </ULayout>
      </UNICEFStyleProvider>
    </MuiThemeProvider>
  )
}
