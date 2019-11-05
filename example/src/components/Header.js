import React from 'react'
import {
  UHeader,
  UHeaderRightButtons,
  UHeaderMainMenu,
  UHeaderLeftMenu,
  UNavbarCenter,
} from 'unicef-material-ui'
import NavLinks from './NavLinks'
import SideBarContent from './SideBarContent'
import Tab from '@material-ui/core/Tab'
import SearchBar from './SearchBar'

export default function Header() {
  const [value, setValue] = React.useState(0)

  function handleChange(event, newValue) {
    setValue(newValue)
  }

  return (
    <UHeader
      showHamburgerMenu={true}
      color="white"
      bgColor="#1CABE2"
      applicationName="Material UI"
      logoUrl={process.env.PUBLIC_URL}
    >
      <UNavbarCenter>
        <SearchBar />
      </UNavbarCenter>
      <UHeaderRightButtons>
        <NavLinks />
      </UHeaderRightButtons>
      <UHeaderMainMenu
        bgcolor="white"
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
      >
        <Tab label="Active" />
        <Tab label="Disabled" disabled />
        <Tab label="Directory" />
      </UHeaderMainMenu>
      <UHeaderLeftMenu>
        <SideBarContent />
      </UHeaderLeftMenu>
    </UHeader>
  )
}
