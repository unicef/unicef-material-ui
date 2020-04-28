import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { UTextField } from 'unicef-material-ui'

const useStyles = makeStyles(theme => ({
  icon: {
    display: 'none',
  },
  showIcon: {
    display: 'block'
  },
  notchedOutline: {
    borderRadius: 2,
    borderColor: 'transparent'
  },
  inputPadding: props => ({
    padding: props.inputPadding ? props.inputPadding : '9.25px 14px',
  }),
  input: props => ({
    ...theme.typography[props.typographyVariant]
  }),
}))

export default function ActiveFormTextField(props) {

  const classes = useStyles(props)
  const { variant, ...others } = props

  return (
    <UTextField
      InputLabelProps={{
        shrink: true,
      }}
      InputProps={{
        classes: {
          root: classes.input,
          notchedOutline: classes.notchedOutline,
          input: classes.inputPadding,
        },
      }}
      variant={variant || 'outlined'}
      {...others}
    >
      {props.children}
    </UTextField >
  )
}

// const useStyles = makeStyles(theme => ({
//   input: {
//     backgroundColor: 'inherit',
//     height: '100%',
//     outline: 'none',
//     border: '1px solid transparent',
//     textOverflow: 'ellipsis',
//     ...theme.typography.h6,
//     padding: 4,
//     width: '100%',
//     '&:hover': {
//       border: '1px solid',
//       borderColor: 'grey',
//     },
//     '&:focus': {
//       border: '1px solid',
//       borderColor: 'blue',
//     },
//   },
//   hoverInput: {
//     width: '40%'
//   },
//   label: {
//     paddingLeft: 4,
//     color: 'grey',
//     fontSize: 14,
//   }
// }))