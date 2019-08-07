import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Drawer from "@material-ui/core/Drawer"
import { Box } from "@material-ui/core";

const drawerWidth = 300

const useStyles = makeStyles(theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
}));

export default function USidebar(props) {
  const classes = useStyles()

  return (
    <Box display={{ xs: 'none', md: 'block' }}>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div style={{ minHeight: props.headerHeight }} />
        {props.children}
      </Drawer>
    </Box>
  );
}
