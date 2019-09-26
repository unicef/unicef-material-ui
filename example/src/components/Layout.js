import React, { useEffect, useState } from 'react'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import {
  theme,
  UNICEFStyleProvider,
  ULayout,
  USideBar,
  UContent,
  USelect,
} from 'unicef-material-ui'
import ColorsExample from './ColorsExample'
import CardWithTabs from './CardWithTabs'
import CardsExample from './CardsExample'
import Alert from './Alert'
import SideBarContent from './SideBarContent'
import FormValidator from './FormValidator'
import Buttons from './Buttons'
import Typography from '@material-ui/core/Typography'
import Header from './Header'

const options = [
  { id: 1, title: 'Juan Merlos Tevar', subtitle: 'Manager', imageUrl: null },
  { id: 2, title: 'Suresh Sevarthi', subtitle: 'Front-end Developer', imageUrl: null },
  { id: 3, title: 'Kundal Singh Mehra', subtitle: 'Back-end Developer', imageUrl: null },
  { id: 4, title: 'Gia Zarina Santos', subtitle: 'Manager', imageUrl: null },
  { id: 5, title: 'Cory Kleinschmidt', subtitle: 'Information technology specialist', imageUrl: null },
  { id: 6, title: 'Riddhi Poladia', subtitle: 'Database Specialist', imageUrl: null },
  { id: 7, title: 'Mahananda Talgaonkar', subtitle: 'Sharepoint Developer', imageUrl: null },
  { id: 8, title: 'Mary Anne Alde', subtitle: 'Sharepoint analyst', imageUrl: null },
  { id: 9, title: 'Renga Narayanan', subtitle: 'Back-end Developer', imageUrl: null },
].map(suggestion => ({
  value: suggestion.id,
  label: suggestion.title,
  subtitle: suggestion.subtitle,
  imageUrl: suggestion.imageUrl,
}))

export default function Layout() {

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
          <Header />
          <USideBar headerHeight={112} width={256}>
            <SideBarContent />
          </USideBar>
          <UContent headerHeight={112}>
            <ColorsExample />
            <Typography variant="h5" >
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
              // onChange={handleChange}
              isMulti
            />
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
