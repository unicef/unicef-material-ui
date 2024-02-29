import PropTypes from 'prop-types'
import clsx from 'clsx'
import Chip from '@mui/material/Chip'
import Avatar from '@mui/material/Avatar'
import { emphasize } from '@mui/material/styles'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles(theme => ({
  chip: {
    marginLeft: theme.spacing(0.5),
    marginTop: theme.spacing(0.25),
    maxWidth: '90%',
    '& .Uni-MuiChip-deleteIcon': {
      display: 'flex',
    },
  },
  chipFocused: {
    backgroundColor: emphasize(
      theme.palette.type === 'light'
        ? theme.palette.grey[300]
        : theme.palette.grey[700],
      0.08
    ),
  },
  avatar: {
    width: 24,
    height: 24,
  },
  deleteIconReadOnly: {
    display: 'none!important',
  },
  rootReadOnly: {
    fontSize: '1rem',
    marginLeft: 0,
    background: 'transparent',
  },
  labelReadOnly: {
    paddingLeft: 0,
    marginLeft: 0,
  },
}))

export default function MultiValue({
  data,
  children,
  removeProps,
  onClick,
  selectProps,
  ...props
}) {
  const classes = useStyles()
  const hideAvatar =
    selectProps &&
    selectProps.TextFieldProps &&
    selectProps.TextFieldProps.hideAvatar

  const readOnly =
    selectProps &&
    selectProps.TextFieldProps &&
    selectProps.TextFieldProps.readOnly

  return (
    <Chip
      avatar={
        hideAvatar ? null : data.avatar ? (
          data.avatar
        ) : (
          <Avatar className={classes.avatar} />
        )
      }
      label={children}
      className={clsx(classes.chip, {
        [classes.chipFocused]: props.isFocused,
      })}
      classes={{
        deleteIcon: readOnly ? classes.deleteIconReadOnly : '',
        root: readOnly ? classes.rootReadOnly : '',
        label: readOnly ? classes.labelReadOnly : '',
      }}
      onDelete={removeProps.onClick}
      {...(readOnly
        ? {}
        : {
            deleteIcon: <props.components.Remove {...removeProps} />,
            variant: 'outlined',
          })}
    />
  )
}

MultiValue.propTypes = {
  /** Children to display */
  children: PropTypes.node,
  /** To check wether it is focused */
  isFocused: PropTypes.bool,
  /** To remove the chip */
  removeProps: PropTypes.shape({
    onClick: PropTypes.func,
    onMouseDown: PropTypes.func,
    onTouchEnd: PropTypes.func,
  }),
}
