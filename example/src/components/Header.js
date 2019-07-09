import React from 'react'
import '../App.css'
import { fade } from '@material-ui/core/styles/colorManipulator';
import { makeStyles } from '@material-ui/core/styles'
import {
  AppBar,
  Toolbar,
  Typography,
  Paper,
  Box,
  IconButton,
  Drawer,
  List,
  Divider,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import unicefLogo from '../assets/unicef-logo.svg';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#1CABE2',
  },
  '@media (min-width: 960px)' : {
    navRight: {
      backgroundColor: fade('#374EA2', 0.6),
      borderBottomLeftRadius: 32,
      borderTopLeftRadius: 32,
      padding: '0px 24px',
      height: "64px",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
    }
  },
  '@media (max-width: 959.98px)': {
    menuItems: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'baseline'
    },
  },
  margin: {
    margin: theme.spacing(2, 2)
  },
  marginLeft: {
    marginLeft: theme.spacing(2),
  },
  navBarLogo: {
    paddingLeft: theme.spacing(2),
    width: 124,
    height: 32,
  },
  navbarLine: {
    paddingRight: theme.spacing(2),
    borderRight: '1px solid #fff',
  },
  menuButton: {
    marginLeft: theme.spacing(1),
  },
  boxShadow: {
    boxShadow: 'none'
  },
}));

export default function Header(props) {

  const classes = useStyles();

  const [sideLeft, setSideLeft] = React.useState(false)
  const { applicationName, navLinks, tabs, menuButton, logo, menuItems, menuTabs } = props

  const toggleDrawer = (open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setSideLeft(open);
  };

  Header.propTypes = {
    applicationName: PropTypes.string,
    menuTabs: PropTypes.func,
    menuItems: PropTypes.func,
    navLinks: PropTypes.func,
    tabs: PropTypes.func,
  }

  const sideList = (
    <div
      className={classes.list}
      role="presentation"
    >
      {applicationName &&
        <React.Fragment>
          <Divider />
          <Typography variant="h6" className={`${classes.marginLeft} ${classes.margin}`}>
            UNICEF {applicationName}
          </Typography>
        </React.Fragment>
      }
      {menuItems &&
        <Box display={{ xs: 'block', md: 'none' }} lassName={classes.menuItems}>
          {menuItems}
        </Box>
      }
      {menuTabs &&
        <React.Fragment>
          <Divider />
          <List>
            {menuTabs}
          </List>
        </React.Fragment>
      }
    </div>
  );

  return (
    <React.Fragment>
      <AppBar className={classes.root}>
        <Toolbar disableGutters={true}>
          <Box flexGrow={1} >
            <Box display="flex" flexDirection='row' alignItems="center" justifyContent="start">
              {menuButton && <React.Fragment>
                <IconButton
                  edge="start"
                  className={classes.menuButton}
                  onClick={toggleDrawer(true)}
                  color="inherit"
                  aria-label="Open drawer"
                >
                  <MenuIcon />
                </IconButton>
                <Drawer open={sideLeft} onClose={toggleDrawer(false)}>
                  {sideList}
                </Drawer>
              </React.Fragment>
              }
              {/* <Avatar alt="unicef logo" src={unicefLogo} className={classes.navbarLine} /> */}
              {logo && <img className={`${applicationName && classes.navbarLine} ${classes.navBarLogo}`} alt="unicef logo" src={unicefLogo} />}
              <Typography variant="h6" className={classes.marginLeft}>
                {applicationName}
              </Typography>
            </Box>
          </Box>
          {navLinks && <Box display={{ xs: 'none', md: 'block' }} className={classes.navRight}>
            {navLinks}
          </Box>}
        </Toolbar>
        {tabs && <Box display={{ xs: 'none', md: 'block' }}>
          <Paper square className={classes.boxShadow}>
            {tabs}
          </Paper>
        </Box>
        }
      </AppBar>
    </React.Fragment>
  )
}
