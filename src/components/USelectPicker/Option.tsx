import React from 'react'
import MenuItem from '@mui/material/MenuItem'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { OptionProps } from 'react-select'

export interface SelectOption {
  value: any
  label: string
  subLabel?: string
  avatar?: React.ReactNode
  [key: string]: any
}

export interface CustomOptionProps extends OptionProps<SelectOption, boolean> {
  data: SelectOption
  selectProps?: {
    TextFieldProps?: {
      hideAvatar?: boolean
    }
  }
}

export default function Option(props: CustomOptionProps) {
  const hideAvatar =
    props.selectProps &&
    props.selectProps.TextFieldProps &&
    props.selectProps.TextFieldProps.hideAvatar
  return (
    <MenuItem
      ref={props.innerRef}
      selected={props.isFocused}
      component="div"
      sx={{
        fontWeight: props.isSelected ? 500 : 400,
      }}
      {...props.innerProps}
    >
      <React.Fragment>
        {hideAvatar ? (
          ''
        ) : props.data.avatar ? (
          props.data.avatar
        ) : (
          <Avatar sx={{ width: 32, height: 32 }} />
        )}
        <Box fontSize={14} pl={1} display="flex" flexDirection="column">
          <Typography variant="subtitle2">{props.data.label}</Typography>
          <Box fontSize={12}>{props.data.subLabel}</Box>
        </Box>
      </React.Fragment>
    </MenuItem>
  )
}

