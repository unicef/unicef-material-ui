import React from 'react'
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

const options = [
  { label: 'Afghanistan' },
  { label: 'Aland Islands' },
  { label: 'Albania' },
  { label: 'Algeria' },
  { label: 'American Samoa' },
  { label: 'Andorra' },
  { label: 'Angola' },
  { label: 'Anguilla' },
  { label: 'Antarctica' },
  { label: 'Antigua and Barbuda' },
  { label: 'Argentina' },
  { label: 'Armenia' },
  { label: 'Aruba' },
  { label: 'Australia' },
  { label: 'Austria' },
  { label: 'Azerbaijan' },
  { label: 'Bahamas' },
  { label: 'Bahrain' },
  { label: 'Bangladesh' },
  { label: 'Barbados' },
  { label: 'Belarus' },
  { label: 'Belgium' },
  { label: 'Belize' },
  { label: 'Benin' },
  { label: 'Bermuda' },
  { label: 'Bhutan' },
  { label: 'Bolivia, Plurinational State of' },
  { label: 'Bonaire, Sint Eustatius and Saba' },
  { label: 'Bosnia and Herzegovina' },
  { label: 'Botswana' },
  { label: 'Bouvet Island' },
  { label: 'Brazil' },
  { label: 'British Indian Ocean Territory' },
  { label: 'Brunei Darussalam' },
].map(suggestion => ({
  value: suggestion.label,
  label: suggestion.label,
}))

export default function App() {
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
              label="Countries"
              TextFieldProps={{
                helperText: 'Please select the countries from above',
              }}
              placeholder="Select countries ...."
              options={options}
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
