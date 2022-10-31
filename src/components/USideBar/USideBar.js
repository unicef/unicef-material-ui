import React from 'react'
import { styled } from '@mui/material/styles'
import { Box, Drawer } from '@mui/material'
import PropTypes from 'prop-types'

const PREFIX = 'USideBar'

const classes = {
  drawer: `${PREFIX}-drawer`,
  drawerPaper: `${PREFIX}-drawerPaper`,
}

const StyledBox = styled(Box)(({ theme }) => ({
  [`& .${classes.drawer}`]: props => ({
    width: props.width || drawerWidth,
    flexShrink: 0,
  }),

  [`& .${classes.drawerPaper}`]: props => ({
    zIndex: 999,
    width: props.width || drawerWidth,
  }),
}))

const drawerWidth = 300

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
  const { headerHeight, width, ...others } = props
  return (
    <StyledBox display={{ xs: 'none', md: 'block' }}>
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
    </StyledBox>
  )
}

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
