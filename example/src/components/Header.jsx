import React, { useState } from 'react'
import {
  UHeader,
  UHeaderRightButtons,
  UHeaderMainMenu,
  UHeaderLeftMenu,
  UNavbarCenter,
} from 'unicef-material-ui'
import NavLinks from './NavLinks'
import SideBarContent from './SideBarContent'
import Tab from '@mui/material/Tab'
import SearchBar from './SearchBar'
import AsyncBadgeExample from './AsyncBadgeExample'

export default function Header() {
  const [value, setValue] = useState(0)
  const [openDrawer, setOpenDrawer] = useState(false)

  function handleChange(newValue) {
    setValue(newValue)
  }

  const toggleDrawer = (event, open) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }
    setOpenDrawer(open)
  }

  return (
    <UHeader
      showHamburgerMenu={true}
      color="white"
      bgColor="#1CABE2"
      applicationName="Material UI"
      //logoUrl={process.env.PUBLIC_URL}
      openDrawer={openDrawer}
      toggleDrawer={toggleDrawer}
    >
      <UNavbarCenter>
        <SearchBar />
        <AsyncBadgeExample />
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
        <SideBarContent toggleDrawer={toggleDrawer} />
      </UHeaderLeftMenu>
    </UHeader>
  )
}
