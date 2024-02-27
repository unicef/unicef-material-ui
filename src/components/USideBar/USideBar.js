import React from 'react'
import { makeStyles } from '@mui/styles'
import { Box, Drawer } from'@mui/material'
import PropTypes from 'prop-types'

const drawerWidth = 300

const useStyles = makeStyles(theme => ({
  drawer: props => ({
    width: props.width || drawerWidth,
    flexShrink: 0,
  }),
  drawerPaper: props => ({
    zIndex: 999,
    width: props.width || drawerWidth,
  }),
}))

/**
 * USideBar is the custom material ui component to display the content in the side bar.
 *
 * Children components inside USideBar will be displayed on the side bar.
 *
 * USideBar is located on the left side of the screen, below the header.
 *
 * USideBar must be wrapped inside the ULayout(Parent Component).
 */
export default function USideBar(props) {
  const classes = useStyles(props)
  const { headerHeight, width, ...others } = props

  USideBar.propTypes = {
    /** Height of the header including MainMenu */
    headerHeight: PropTypes.number,
    /**
     * width of the Drawer in USideBar
     */
    width: PropTypes.number,
  }

  USideBar.defaultProps = {
    headerHeight: 64,
  }

  return (
    <Box display={{ xs: 'none', md: 'block' }}>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        {...others}
      >
        <div style={{ minHeight: headerHeight }} />
        {props.children}
      </Drawer>
    </Box>
  )
}
