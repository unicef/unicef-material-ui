import React, { Fragment } from 'react'
import { Tooltip, makeStyles, Link } from '@material-ui/core'
import PropTypes from 'prop-types'

import HelpIcon from '@material-ui/icons/HelpOutline'
import LaunchIcon from '@material-ui/icons/Launch'

const useStyles = makeStyles(theme => ({
  root: {
    marginRight: theme.spacing(-1),
    marginTop: theme.spacing(-0.5),
    paddingLeft: theme.spacing(1.5),
    order: 999,
    display: 'inline-flex',
    alignItems: 'center',
    color: theme.palette.primary.main,
  },
  tooltipHelpLabel: {
    paddingLeft: theme.spacing(0.5),
    borderBottom: `1px dotted ${theme.palette.primary.main}`,
  },
  linkHelpLabel: {
    paddingLeft: theme.spacing(0.5),
  },
}))

export default function InputLabelHelp({
  inputLabel,
  type,
  label,
  link,
  icon,
  tooltipTitle,
  tooltipPlacement,
}) {
  const classes = useStyles()
  return (
    <Fragment>
      <span>{inputLabel}</span>
      {type === 'tooltip' ? (
        <Tooltip title={tooltipTitle} placement={tooltipPlacement}>
          <span className={classes.root}>
            {icon ? icon : <HelpIcon />}
            {label ? (
              <span className={classes.tooltipHelpLabel}>{label}</span>
            ) : (
              ''
            )}
          </span>
        </Tooltip>
      ) : (
        <Link
          href={link}
          target={'_blank'}
          underline="always"
          className={classes.root}
          title="Opens a new tab"
        >
          {icon ? icon : <LaunchIcon />}
          {label ? <span className={classes.linkHelpLabel}>{label}</span> : ''}
        </Link>
      )}
    </Fragment>
  )
}

InputLabelHelp.propTypes = {
  // Input label
  inputLabel: PropTypes.string,
  // Type of help icon
  type: PropTypes.oneOf(['tooltip', 'link']),
  // Help label
  label: PropTypes.string,
  // Tooltip title
  tooltipTitle: PropTypes.string,
  // Link of the help
  link: PropTypes.string,
  // Help icon
  icon: PropTypes.node,
  // Tooltip placement
  tooltipPlacement: PropTypes.string,
}

InputLabelHelp.defaultProps = {
  label: 'Help',
  type: 'tooltip',
  icon: null,
  tooltipPlacement: 'top',
}
