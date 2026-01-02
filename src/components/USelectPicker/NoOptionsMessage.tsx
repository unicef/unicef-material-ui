import React from 'react'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import { NoticeProps } from 'react-select'

const PREFIX = 'NoOptionsMessage'

const classes = {
  noOptionsMessage: `${PREFIX}-noOptionsMessage`,
}

const StyledTypography = styled(Typography)(({ theme }) => ({
  [`&.${classes.noOptionsMessage}`]: {
    padding: theme.spacing(1.5),
  },
}))

export interface CustomNoOptionsMessageProps extends Omit<NoticeProps<any, boolean>, 'selectProps'> {
  selectProps?: {
    noOptionsText?: string
  }
}

export default function NoOptionsMessage({
  innerProps,
  selectProps,
}: CustomNoOptionsMessageProps) {
  return (
    <StyledTypography
      color="textSecondary"
      {...innerProps}
      className={classes.noOptionsMessage}
    >
      {selectProps?.noOptionsText}
    </StyledTypography>
  )
}

