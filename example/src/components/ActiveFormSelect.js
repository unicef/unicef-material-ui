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
  inputPadding: {
    padding: '9.25px 14px',
  },
  input: props => ({
    ...theme.typography[props.typographyVariant]
  }),
}))

export default function ActiveFormSelect(props) {

  const classes = useStyles(props)
  const { select, typographyVariant, ...others } = props
  const [hideIcon, setHideIcon] = React.useState(classes.icon)

  function onMouseOver() {
    setHideIcon(classes.showIcon)
  }

  function handleBlur(event) {
    event.preventDefault()

    setHideIcon(classes.icon)
    return props.onBlur && props.onBlur
  }

  return (
    <UTextField
      InputLabelProps={{
        shrink: true,
      }}
      InputProps={{
        disableUnderline: true,
        classes: { root: classes.input, notchedOutline: classes.notchedOutline, input: classes.inputPadding }
      }}
      select
      SelectProps={{
        classes: { icon: hideIcon }
      }}
      onMouseOver={onMouseOver}
      onMouseLeave={handleBlur}
      onBlur={handleBlur}
      variant="outlined"
      {...others}
    >
      {props.children}
    </UTextField>
  )
}
