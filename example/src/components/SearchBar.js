import React from 'react'
import InputBase from '@material-ui/core/InputBase'
import { fade, makeStyles } from '@material-ui/core/styles'
import SearchIcon from '@material-ui/icons/Search'

const useStyles = makeStyles(theme => ({
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    top: 0,
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    backgroundColor: theme.palette.common.white,
  },
  inputInput: {
    border: 'none',
    borderRadius: 4,
    fontSize: 16,
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
  const classes = useStyles()

  return (
    <div className={classes.search}>
      <div className={classes.inputRoot}>
        <input
          placeholder="Search…"
          className={classes.inputInput}
          aria-label="search"
        />
      </div>
      <div className={classes.searchIcon}>
        <SearchIcon color="primary" />
      </div>
    </div>
  )
}
