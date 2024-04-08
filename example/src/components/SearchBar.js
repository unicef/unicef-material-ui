import React from 'react'
import { styled } from '@mui/material/styles'
import InputBase from '@mui/material/InputBase'
import { alpha } from '@mui/material/styles'
import SearchIcon from '@mui/icons-material/Search'

const PREFIX = 'SearchBar'

const classes = {
  search: `${PREFIX}-search`,
  searchIcon: `${PREFIX}-searchIcon`,
  inputRoot: `${PREFIX}-inputRoot`,
  inputInput: `${PREFIX}-inputInput`,
}

const Root = styled('div')(({ theme }) => ({
  [`&.${classes.search}`]: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },

  [`& .${classes.searchIcon}`]: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    top: 0,
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  [`& .${classes.inputRoot}`]: {
    backgroundColor: theme.palette.common.white,
  },

  [`& .${classes.inputInput}`]: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
}))

export default function SearchBar() {
  return (
    <Root className={classes.search}>
      <InputBase
        placeholder="Search…"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ 'aria-label': 'search' }}
      />
      <div className={classes.searchIcon}>
        <SearchIcon color="primary" />
      </div>
    </Root>
  )
}
