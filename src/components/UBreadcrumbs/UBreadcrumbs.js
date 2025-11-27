import React from 'react'
import { styled } from '@mui/material/styles'
import PropTypes from 'prop-types'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import Breadcrumbs from '@mui/material/Breadcrumbs'

const PREFIX = 'UBreadcrumbs'

const classes = {
  root: `${PREFIX}-root`,
  link: `${PREFIX}-link`,
  text: `${PREFIX}-text`,
}

const Root = styled('div')(({ theme }) => ({
  [`&.${classes.root}`]: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 8,
  },

  [`& .${classes.link}`]: {
    color: '#3344DD',
    textDecorationLine: 'underline',
  },

  [`& .${classes.text}`]: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    '@media (min-width: 1600px)': {
      width: 600,
    },
    '@media (min-width: 1280px) and (max-width: 1600px)': {
      width: 285,
    },
  },
}))

/**
 * Breadcrumbs is a component to implement current user path of the application
 */
export default function UBreadcrumbs(props) {
  const { breadcrumbLinks } = props

  return (
    <Root className={classes.root}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link color="inherit" to="/" className={classes.link}>
          Home
        </Link>
        {breadcrumbLinks.map((value, index) => {
          const last = index === breadcrumbLinks.length - 1

          return last ? (
            <Typography
              color="inherit"
              key={value.text}
              className={classes.text}
            >
              {value.text}
            </Typography>
          ) : (
            <Link to={value.to} key={value.text} className={classes.link}>
              {value.text}
            </Link>
          )
        })}
      </Breadcrumbs>
    </Root>
  )
}

UBreadcrumbs.propTypes = {
  /**
   * Breadcrumb links is array of objects contains text to display and link to url
   * Ex:
   * [{
   *   text: 'New HAC Appeal'
   *    to: '/newappeal'
   * }]
   */
  breadcrumbLinks: PropTypes.array,
}
