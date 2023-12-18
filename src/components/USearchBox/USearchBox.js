import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
  IconButton,
  InputAdornment,
  Box,
  Button,
  TextField,
} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import CloseIcon from '@material-ui/icons/Close'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    background: 'white',
  },
  iconSeparator: {
    width: '1px',
    display: 'block',
    height: '54px',
    background: 'rgba(0, 0, 0, 0.23)',
    marginRight: theme.spacing(1),
  },
  searchIcon: {
    color: theme.palette.primary.main,
  },
  iconLabel: {
    marginLeft: theme.spacing(0.5),
  },
}))

/**
 * USearchBox is a component to display search box
 */
export default function USearchBox({
  value,
  onSearch,
  placeholder,
  inputProps,
  className,
  showSeparator,
  iconLabel,
  ...rest
}) {
  const [searchValue, setSearch] = useState(value)
  const classes = useStyles()

  useEffect(() => {
    setSearch(value)
  }, [value])

  const handleChange = event => {
    setSearch(event.target.value)
  }

  const applySearch = val => {
    onSearch && onSearch(val !== undefined ? val : searchValue)
  }

  const handleSearch = () => {
    applySearch(searchValue)
  }

  const handleKeyPress = e => {
    if (e.key === 'Enter') {
      applySearch()
    }
  }

  const handleClear = () => {
    setSearch('')
    applySearch('')
  }

  return (
    <TextField
      placeholder={placeholder}
      onChange={handleChange}
      onKeyPress={handleKeyPress}
      name="search"
      variant="outlined"
      value={searchValue}
      className={`${classes.root} ${className}`}
      autoComplete="off"
      InputLabelProps={{ shrink: false }}
      InputProps={{
        endAdornment: (
          <InputAdornment>
            {searchValue ? (
              <IconButton aria-label="Clear" onClick={handleClear}>
                <CloseIcon />
              </IconButton>
            ) : (
              ''
            )}
            {showSeparator ? <Box className={classes.iconSeparator}></Box> : ''}
            {iconLabel ? (
              <Button
                aria-label="Search"
                className={classes.searchIcon}
                onClick={handleSearch}
              >
                <SearchIcon />
                <span className={classes.iconLabel}>{iconLabel}</span>
              </Button>
            ) : (
              <IconButton
                aria-label="Search"
                className={classes.searchIcon}
                onClick={handleSearch}
              >
                <SearchIcon />
              </IconButton>
            )}
          </InputAdornment>
        ),
      }}
      {...rest}
    />
  )
}

// It accepts all the Material Ui TextField props
USearchBox.propTypes = {
  /** Initial search text for the input field */
  value: PropTypes.string,
  /** Search box placeholder */
  placeholder: PropTypes.string,
  /** Search box input field class name */
  className: PropTypes.string,
  /** It called when apply the search */
  onSearch: PropTypes.func,
  /** Show a vertical separator between the text field and search icon */
  showSeparator: PropTypes.bool,
  /** Label next to the search icon */
  iconLabel: PropTypes.string,
}

USearchBox.defaultProps = {
  placeholder: 'Search',
  showSeparator: true,
}
