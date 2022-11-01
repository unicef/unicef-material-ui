import React from 'react'
import { styled, alpha } from '@mui/material/styles'
import { findReactChildren } from '../../utils'
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Drawer,
  Link,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import PropTypes from 'prop-types'
import UHeaderMainMenu from '../UHeaderMainMenu'
import UHeaderRightButtons from '../UHeaderRightButtons'
import UHeaderLeftMenu from '../UHeaderLeftMenu'
import UNavbarCenter from '../UNavbarCenter'

const PREFIX = 'UHeader'

const classes = {
  bgColor: `${PREFIX}-bgColor`,
  root: `${PREFIX}-root`,
  title: `${PREFIX}-title`,
  navRight: `${PREFIX}-navRight`,
  navbarLine: `${PREFIX}-navbarLine`,
  margin: `${PREFIX}-margin`,
  navbarCenter: `${PREFIX}-navbarCenter`,
}

const StyledAppBar = styled(AppBar, {
  shouldForwardProp: prop => prop !== 'bgColor',
})(({ theme, color, bgColor }) => ({
  [`& .${classes.bgColor}`]: {
    color: color || null,
    backgroundColor: bgColor,
  },

  [`& .${classes.root}`]: {
    flexGrow: 1,
    paddingLeft: theme.spacing(2),
  },

  [`& .${classes.title}`]: {
    flexGrow: 1,
  },

  [`& .${classes.navRight}`]: {
    borderBottomLeftRadius: theme.spacing(4),
    borderTopLeftRadius: theme.spacing(4),
    backgroundColor: theme.palette.primary.main,
  },

  [`& .${classes.navbarLine}`]: {
    marginRight: theme.spacing(2),
    paddingRight: theme.spacing(2),
    borderRight: '1px solid #fff',
  },

  [`& .${classes.margin}`]: {
    margin: theme.spacing(2),
  },

  [`& .${classes.navbarCenter}`]: {
    marginLeft: 16,
    marginRight: 16,
  },
}))

/**
 *
 * Standardized header component with UNICEF look and feel.
 *
 */

export default function UHeader(props) {
  const {
    position,
    applicationName,
    showHamburgerMenu,
    hideLogo,
    logo,
    hideLogoBorderLine,
    logoUrl,
    onLogoClick,
    openDrawer,
    toggleDrawer,
    elevation,
    bgColor,
  } = props

  const handleUrlClick = e => {
    if (onLogoClick) {
      onLogoClick()
      e.preventDefault()
    }
  }

  return (
    <StyledAppBar position={position} elevation={elevation} bgColor={bgColor}>
      <Toolbar disableGutters={true} className={classes.bgColor}>
        <Box display="flex" ml={3} alignItems="center">
          {showHamburgerMenu !== false && (
            <Box mr={2}>
              <IconButton
                edge="start"
                onClick={e => toggleDrawer && toggleDrawer(e, true)}
                color="inherit"
                aria-label="Open drawer"
                size="large"
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                open={openDrawer}
                onClose={e => toggleDrawer && toggleDrawer(e, false)}
              >
                {findReactChildren(props, UHeaderLeftMenu)}
              </Drawer>
            </Box>
          )}
          {(!hideLogo && (
            <Link
              onClick={e => handleUrlClick(e)}
              href={logoUrl}
              className={`${
                hideLogoBorderLine !== false && classes.navbarLine
              }`}
            >
              {logo ? (
                logo
              ) : (
                <svg width="114" height="28" xmlns="http://www.w3.org/2000/svg">
                  <g fill="#FFFFFE" fillRule="evenodd">
                    <path d="M104.416 18.213c-1.366-.749-1.392-1.786-1.32-2.168.073-.389.34-.218.51-.218.896 0 1.839-.266 3.001-1.453 1.311-1.337 1.722-4.31-.292-6.246-2.17-2.089-4.478-1.724-5.967.153-.304.385-1.049.667-1.693.645-.955-.036-.353.716-.353.871 0 .158-.145.268-.23.243-.324-.092-.194.387-.194.533a.223.223 0 0 1-.205.218c-.4 0-.29.361-.278.461.01.095-.025.263-.158.337-.128.073-.278.388-.278.63 0 .436.399.738 1.067 1.236.664.497.748.968.76 1.308.013.337.044.885.196 1.247.18.434.156 1.234-.764 1.27-1.125.045-3.123.944-3.292 1.005-.635.225-1.474.307-2.129.143a9.938 9.938 0 0 1-1.006-.816c-.131-.453.097-.938.326-1.265.375.376.933.351 1.246.362.315.014 1.852-.228 2.07-.3.219-.074.314-.05.448 0 .586.212 1.392.276 1.719-.848.327-1.126-.447-.812-.544-.763-.097.05-.231.036-.183-.06.144-.287-.071-.257-.193-.268-.314-.03-.725.304-.859.424-.134.121-.266.11-.315.085-.417-.208-1.66.092-2.046-.581.036-.18-.316-2.918-.495-3.389a.464.464 0 0 1 .047-.447c.315-.475 1.186.035 1.659.024.565-.016.656-.252.811-.443.149-.185.258-.081.34-.132.102-.068.005-.2.041-.273.038-.072.08-.037.175-.12.098-.087-.014-.267.036-.34.14-.21.52-.042.292-.591-.125-.303.049-.632.218-.849.274-.354 1.333-1.844-.533-3.39-1.78-1.476-3.584-1.357-4.746-.098-1.16 1.259-.581 3.1-.46 3.584.12.485-.228.924-.63 1.114-.318.15-1.043.634-1.59 1.11a9.789 9.789 0 0 1 6.16-8.902c.157.195.332.38.521.555-.41.298-1.304 1.098-1.304 1.098a3.026 3.026 0 0 0 .481.115s.788-.67 1.156-.936c.288.22.603.401.936.548a46.146 46.146 0 0 0-.627 1.145s.104.062.196.124c.094.062.152.117.152.117s.49-.922.674-1.23a4.7 4.7 0 0 0 1.275.236v1.69c-.24-.008-.86-.033-1.111-.059l-.158-.015.088.13c.067.099.118.195.164.283l.018.036.041.004c.182.015.748.035.958.04v3.074h.427v-.703c.625-.03 1.145-.074 1.774-.128l.028-.003.551-.488-.3.026c-.665.087-1.249.127-1.778.157l-.275.016V5.136a9.904 9.904 0 0 0 2.3-.322c.207.507.596 1.738.596 1.738l.402-.125s-.39-1.222-.593-1.73a9.944 9.944 0 0 0 1.842-.783c.472.58.878 1.212 1.214 1.884-.303.14-.854.336-.853.336.441.049.777.154.777.154l.256-.111.115.266.552.245-.064-.153-.225-.538a14.99 14.99 0 0 0 1.709-.99 9.83 9.83 0 0 1-2.284 13.205zM97.389.61c-.607.264-1.186.582-1.732.955a5.06 5.06 0 0 1-.455-.465 9.681 9.681 0 0 1 2.187-.49zm-.592 1.667a4.133 4.133 0 0 1-.787-.44 10.29 10.29 0 0 1 1.769-.935c-.35.438-.682.898-.982 1.375zM98.245.989v1.617a4.324 4.324 0 0 1-1.044-.185A15.02 15.02 0 0 1 98.245.989zm.427 2.041c.44-.02.873-.099 1.29-.238.313.521.595 1.068.841 1.632a9.427 9.427 0 0 1-2.131.294V3.03zm0-2.06c.378.455.733.941 1.059 1.45-.344.106-.7.17-1.059.186V.97zm2.254.866a4.21 4.21 0 0 1-.787.44 15.96 15.96 0 0 0-.99-1.378c.623.255 1.219.57 1.777.938zm.803-.734c-.14.167-.29.32-.455.464a10.363 10.363 0 0 0-1.718-.95 9.62 9.62 0 0 1 2.173.486zm1.212 2.485a9.38 9.38 0 0 1-1.727.721 15.28 15.28 0 0 0-.856-1.671 4.66 4.66 0 0 0 .936-.548c.6.437 1.153.941 1.647 1.498zm-.795-2.328c.818.33 1.59.774 2.299 1.318-.353.292-.733.56-1.131.797a10.77 10.77 0 0 0-1.688-1.56c.187-.172.363-.356.52-.555zm4.315 3.402c-.524.355-1.078.674-1.65.956a10.702 10.702 0 0 0-1.225-1.916 9.652 9.652 0 0 0 1.194-.856 9.858 9.858 0 0 1 1.681 1.816zm-8-4.533c-5.655 0-10.256 4.6-10.256 10.257 0 5.654 4.601 10.256 10.257 10.256 5.654 0 10.256-4.602 10.256-10.256 0-5.656-4.602-10.257-10.256-10.257zM85.997 3.381l-.155.174c-.587.654-1.924 2.378-1.718 4.271l.02.132.068.375.186-.214c.82-.946 1.434-2.547 1.685-4.395l.07-.519-.156.176zm-2.51 2.075l-.058.202c-.08.28-.227.865-.305 1.644-.108 1.103-.083 2.664.66 3.829l.082.138.086.141.11-.708c.123-1.252-.04-3.876-.395-5.048l-.124-.398-.056.2zm-.382 5.142l-.012.214c-.065 1.162-.018 4.028 1.817 5.548 0 .002.218.178.218.178l-.01-.324c-.031-1.089-1.035-4.336-1.789-5.5l-.213-.33-.011.214zm.017 5.094l.043.18c.368 1.512 2.064 3.961 4.682 4.671l.358.098-.13-.299c-.487-1.13-3.011-3.765-4.632-4.633l-.366-.196.045.18z" />
                    <path d="M86.022 5.384l-.132.127c-1.246 1.203-1.83 2.662-1.785 4.462l.011.412.181-.24c.675-.883 1.517-3.14 1.767-4.421l.09-.468-.132.128zm-.014 3.069l-.133.12c-.447.407-1.89 1.88-1.765 3.703.02.28.086.58.198.894l.102.292.187-.251c.69-.931 1.605-3.388 1.555-4.531l-.016-.347-.128.12zm.697 3.109l-.133.152c-.976 1.13-1.473 2.292-1.442 3.362.026.79.35 1.548.962 2.25l.204.238.171-.25c.423-.62.756-2.626.708-4.213-.02-.56-.092-1.024-.211-1.34l-.128-.35-.131.151z" />
                    <path d="M86.48 15.669l-.043.16a7.33 7.33 0 0 0-.281 2.126c.04 1.537.642 2.74 1.795 3.573l.194.139.043-.296.017-.236c-.032-1.25-.857-4.397-1.504-5.358l-.178-.264-.044.156z" />
                    <path d="M84.196 19.705l.094.09c.973.93 2.623 2.13 5.709 1.822l.257-.025-.145-.124c-.577-.489-4.322-1.695-5.647-1.819l-.361-.034.093.09zm5.478 3.692l-.443.14.425.202c1.795.855 4.046 1.108 5.351.597.49-.194.788-.507 1.152-.92 2.297.277 4.449 2.5 5.703 4.315l.068.09.096-.036c.142-.056.359-.252.45-.366l.088-.11-.079-.123c-1.308-1.99-3.357-3.224-3.447-3.274-1.843-1.046-5.098-1.862-9.364-.515" />
                    <path d="M89.255 18.745l.025.155c.273 1.742.97 4.026 3.868 3.773l.185-.015-.046-.184c-.196-.791-2.85-3.091-3.778-3.738l-.278-.146.024.155zm20.489-15.54l.07.52c.252 1.847.867 3.448 1.686 4.394l.187.214.065-.375.021-.132c.207-1.893-1.13-3.617-1.716-4.271l-.157-.174-.156-.176zm2.611 2.051l-.123.398c-.357 1.172-.52 3.796-.396 5.048l.11.708.086-.141.083-.138c.741-1.165.767-2.726.657-3.829a9.612 9.612 0 0 0-.302-1.644l-.058-.202-.057-.2zm1.452 5.129l-.214.33c-.752 1.163-1.758 4.41-1.788 5.499l-.01.324s.215-.176.215-.178c1.838-1.52 1.884-4.386 1.82-5.548l-.012-.214-.01-.213z" />
                    <path d="M112.82 15.513l-.366.196c-1.62.868-4.144 3.503-4.631 4.633l-.13.299.36-.098c2.616-.71 4.311-3.159 4.679-4.67l.046-.18.043-.18zm-5.128-10.257l.089.464c.238 1.274 1.076 3.529 1.757 4.422l.185.243.015-.408c.07-1.776-.513-3.235-1.778-4.461l-.135-.13-.133-.13z" />
                    <path d="M109.76 8.333l-.015.347c-.048 1.142.865 3.6 1.556 4.53l.187.252.103-.292c.112-.314.178-.614.196-.895.127-1.822-1.318-3.295-1.765-3.702l-.13-.12-.133-.12z" />
                    <path d="M110.091 11.41l-.133.35c-.121.317-.192.78-.21 1.341-.05 1.587.286 3.593.706 4.212l.173.251.207-.237c.611-.703.934-1.46.96-2.251.033-1.07-.464-2.231-1.444-3.362l-.13-.152-.129-.152zm-1.746 4.103l-.176.264c-.646.96-1.472 4.108-1.502 5.358 0 0 .015.23.017.236l.042.296.195-.139c1.152-.833 1.756-2.036 1.795-3.573a7.28 7.28 0 0 0-.282-2.127l-.045-.16-.044-.155z" />
                    <path d="M111.795 19.615l-.36.034c-1.325.124-5.072 1.33-5.65 1.82l-.144.123.257.025c3.09.308 4.738-.892 5.71-1.822l.093-.09.094-.09zm-13.91 4.297c-.09.05-2.14 1.284-3.446 3.274l-.08.122.089.111c.091.114.307.31.449.366l.096.036.067-.09c1.253-1.816 3.404-4.039 5.702-4.315.363.413.661.725 1.154.92 1.304.511 3.554.258 5.35-.597l.426-.203-.444-.139c-4.267-1.347-7.52-.53-9.363.515" />
                    <path d="M106.667 18.59l-.278.146c-.928.647-3.584 2.947-3.78 3.738l-.045.184.183.015c2.9.253 3.597-2.032 3.87-3.773l.026-.155.024-.155zm-73.521 6.128h3.45V9.03h-3.45v15.687zM32.82 5.374h4.102v-3.22H32.82v3.22zM11.202 8.333h3.157v15.935h-3.091v-2.35h-.066c-1.264 2-3.39 2.826-5.718 2.826-3.49 0-5.484-2.54-5.484-5.746V8.333h3.159v9.428c0 2.762.664 4.793 3.688 4.793 1.297 0 3.058-.636 3.722-2.284.597-1.493.633-3.365.633-3.746v-8.19zm8.264 2.824h.066c1.05-1.999 3.351-2.824 4.994-2.824 1.15 0 6.243.286 6.243 5.396v11.015h-3.12v-10.03c0-2.635-1.15-4.063-3.78-4.063 0 0-1.71-.095-3.023 1.174-.459.443-1.314 1.142-1.314 4.253v8.666H16.41V8.809h3.056v2.348zm29.757 2.607c-.156-1.944-1.089-3.298-3.209-3.298-2.832 0-3.924 2.432-3.924 6.074 0 3.64 1.092 6.077 3.924 6.077 1.96 0 3.176-1.26 3.33-3.486h2.964c-.253 3.486-2.867 5.613-6.327 5.613-5.014 0-7.007-3.514-7.007-8.08 0-4.54 2.304-8.33 7.261-8.33 3.302 0 5.792 2.069 5.943 5.43h-2.955zm16.336 1.296c.064-2.59-1.141-4.595-4.05-4.595-2.502 0-3.983 2.06-3.983 4.596h8.033zm-8.033 2.033c-.221 2.716.917 5.524 3.983 5.524 2.34 0 3.51-.893 3.856-3.15h3.167c-.476 3.521-3.26 5.277-7.053 5.277-5.093 0-7.12-3.514-7.12-8.08 0-4.54 2.345-8.33 7.373-8.33 4.742.096 6.986 3.022 6.986 7.314v1.445H57.526zm14.777 6.625V9.986h-2.56V7.903h2.56V4.506C72.395 1.04 74.851.128 76.955.128c.68 0 1.336.187 2.02.312v2.487c-.48-.026-.952-.096-1.428-.096-1.596 0-2.516.446-2.43 2.175v2.897h3.44v2.083h-3.44v13.732h-2.814z" />
                  </g>
                </svg>
              )}
            </Link>
          )) ||
            ''}
          <Typography variant="h6" className={classes.title}>
            <Link
              color="inherit"
              underline="none"
              onClick={e => handleUrlClick(e)}
              href={logoUrl && logoUrl}
              title={applicationName}
            >
              {applicationName}
            </Link>
          </Typography>
          <div className={classes.navbarCenter}>
            {findReactChildren(props, UNavbarCenter)}
          </div>
        </Box>
        <Box
          height="64px"
          display={{ xs: 'none', md: 'block' }}
          ml="auto"
          className={classes.navRight}
        >
          {findReactChildren(props, UHeaderRightButtons)}
        </Box>
      </Toolbar>
      {findReactChildren(props, UHeaderMainMenu)}
    </StyledAppBar>
  )
}

UHeader.propTypes = {
  /** position of the header, 
    'absolute'
    | 'fixed'
    | 'relative'
    | 'static'
    | 'sticky'   */
  position: PropTypes.string,
  /** Color of text in the header */
  color: PropTypes.string,
  /** Background color of the header */
  bgColor: PropTypes.string,
  /** Button with hamburger icon on the left of the header. It enables the side menu (menuItems). */
  showHamburgerMenu: PropTypes.bool.isRequired,
  /** Name of the application, will be displayed next to the logo */
  applicationName: PropTypes.string,
  /** UNICEF logo enabled by default. */
  hideLogo: PropTypes.bool,
  /** Link in logo and application Name (Ex: Redirects to home page) */
  logoUrl: PropTypes.string,
  /** To show new logo or image */
  logo: PropTypes.element,
  /** It is the separator line between application name and logo with white border. */
  hideLogoBorderLine: PropTypes.bool,
  /** Calls back when there is a click on Logo as well as app name and prevents the url to push to home*/
  onLogoClick: PropTypes.func,
  /** Current opened state of the hamburger menu drawer */
  openDrawer: PropTypes.bool,
  /** Callback to change the openDrawer state */
  toggleDrawer: PropTypes.func,
  /** AppBar elevation value to handle the box shadow effect */
  elevation: PropTypes.number,
}

UHeader.defaultProps = {
  position: 'fixed',
  showHamburgerMenu: true,
  hideLogo: false,
  logoUrl: '/',
  hideLogoBorderLine: true,
  elevation: 4,
}
