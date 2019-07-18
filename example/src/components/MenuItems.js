import React from 'react'
import {
  ListItemText,
  Badge,
  List,
  ListItem,
  Collapse
} from '@material-ui/core';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';


function MenuItems() {

  const [openDropdown, setOpenDropdown] = React.useState(false)

  const handleDropdown = () => {
    setOpenDropdown(!openDropdown)
  }

  return( 
  <React.Fragment>
    <ListItem button key="With Icon" >
      <ListItemIcon> <MailIcon /> </ListItemIcon>
      <ListItemText primary="With Icon" />
    </ListItem>
    <ListItem button key="Notifications">
      <ListItemIcon> <Badge badgeContent={17} color="secondary">
        <NotificationsIcon />
      </Badge> </ListItemIcon>
      <ListItemText primary="Notifications" />
    </ListItem>
    <ListItem button key="Dropdown" onClick={handleDropdown} >
      <ListItemIcon>{openDropdown ? <ExpandLess /> : <ExpandMore />}</ListItemIcon>
      <ListItemText primary="Dropdown" />
    </ListItem>
    <Collapse in={openDropdown} timeout="auto" unmountOnExit>
      <List component="div" disablePadding>
        <ListItem button>
          <ListItemIcon>
            <StarBorder />
          </ListItemIcon>
          <ListItemText primary="Starred" />
        </ListItem>
      </List>
    </Collapse>
  </React.Fragment>
  )
}

export default MenuItems