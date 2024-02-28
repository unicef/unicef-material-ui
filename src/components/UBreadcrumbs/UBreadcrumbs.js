/* eslint-disable no-nested-ternary */
import PropTypes from 'prop-types';
import { makeStyles } from '@mui/styles'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import { Link as RouterLink } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 8,
  },
  link: {
    color: '#3344DD',
    textDecorationLine: 'underline',
  },
  text: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  [`@media (min-width: 1600px)`]: {
    text: {
      width: 600,
    },
  },
  [`@media (min-width: 1280px) and (max-width: 1600px)`]: {
    text: {
      width: 285,
    },
  },
}))
/**
 * Breadcrumbs is a component to implement current user path of the application
 */
export default function UBreadcrumbs(props) {
  const classes = useStyles()
  const { breadcrumbLinks } = props

  return (
    <div className={classes.root}>
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
    </div>
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
