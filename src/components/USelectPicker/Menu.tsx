import React from 'react'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import { components, MenuProps } from 'react-select'

const PREFIX = 'Menu'

const classes = {
  errorMessage: `${PREFIX}-errorMessage`,
}

const StyledPaper = styled(Paper)(({ theme }) => ({
  [`& .${classes.errorMessage}`]: {
    padding: theme.spacing(1),
    color: theme.palette.error.main,
  },
}))

export interface CustomMenuProps extends Omit<MenuProps<any, boolean>, 'isLoading'> {
  isLoading: boolean
  selectProps?: {
    errorOptionsMessage?: string
    loadingText?: string
    classes?: {
      paper?: string
    }
  }
}

export default function Menu({ isLoading, ...others }: CustomMenuProps) {
  const { errorOptionsMessage, loadingText } = others.selectProps || {}
  return (
    <components.Menu {...others} isLoading={isLoading}>
      <StyledPaper square className={others.selectProps?.classes?.paper}>
        {isLoading ? (
          <Box p={2}>
            <Typography>{loadingText}</Typography>
          </Box>
        ) : errorOptionsMessage ? (
          <Typography color="textSecondary" className={classes.errorMessage}>
            {errorOptionsMessage}
          </Typography>
        ) : (
          others.children
        )}
      </StyledPaper>
    </components.Menu>
  )
}

