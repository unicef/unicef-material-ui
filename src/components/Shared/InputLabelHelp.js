import React, { Fragment } from 'react'
import { styled } from '@mui/material/styles'
import { Tooltip, Link, Box } from '@mui/material'
import PropTypes from 'prop-types'

import HelpIcon from '@mui/icons-material/HelpOutline'
import LaunchIcon from '@mui/icons-material/Launch'

const PREFIX = 'InputLabelHelp'

const classes = {
  root: `${PREFIX}-root`,
  help: `${PREFIX}-help`,
  tooltipHelpLabel: `${PREFIX}-tooltipHelpLabel`,
  linkHelpLabel: `${PREFIX}-linkHelpLabel`,
  tooltipPopper: `${PREFIX}-tooltipPopper`,
}

const StyledBox = styled(Box)(({ theme }) => ({
  [`&.${classes.root}`]: {
    order: 999,
    display: 'inline-flex',
    alignItems: 'center',
  },
  [`& .${classes.help}`]: {
    paddingLeft: theme.spacing(0.5),
    color: theme.palette.primary.main,
    display: 'flex',
    alignItems: 'center',
  },

  [`& .${classes.tooltipHelpLabel}`]: {
    paddingLeft: theme.spacing(0.5),
    borderBottom: `1px dotted ${theme.palette.primary.main}`,
  },

  [`& .${classes.linkHelpLabel}`]: {
    paddingLeft: theme.spacing(0.5),
  },

  [`& .${classes.tooltipPopper}`]: {
    '& a': {
      color: theme.palette.common.white,
    },
  },
}))

export default function InputLabelHelp({
  inputLabel,
  type = 'tooltip',
  label = 'Help',
  link,
  icon = null,
  tooltipTitle,
  tooltipPlacement = 'top',
}) {
  return (
    <Fragment>
      <span>{inputLabel}</span>
      <StyledBox className={classes.root}>
        {type === 'tooltip' ? (
          <Tooltip
            title={<div dangerouslySetInnerHTML={{ __html: tooltipTitle }} />}
            placement={tooltipPlacement}
            classes={{ popper: classes.tooltipPopper }}
          >
            <span className={classes.help}>
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
            className={classes.help}
            title="Opens a new tab"
          >
            {icon ? icon : <LaunchIcon />}
            {label ? (
              <span className={classes.linkHelpLabel}>{label}</span>
            ) : (
              ''
            )}
          </Link>
        )}
      </StyledBox>
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
