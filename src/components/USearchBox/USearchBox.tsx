import React, { useState, useEffect } from 'react'
import { styled } from '@mui/material/styles'
import {
  IconButton,
  InputAdornment,
  Box,
  Button,
  TextField,
  TextFieldProps,
} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import CloseIcon from '@mui/icons-material/Close'

const PREFIX = 'USearchBox'

const classes = {
  root: `${PREFIX}-root`,
  iconSeparator: `${PREFIX}-iconSeparator`,
  searchIcon: `${PREFIX}-searchIcon`,
  iconLabel: `${PREFIX}-iconLabel`,
}

const StyledInputAdornment = styled(InputAdornment)(({ theme }) => ({
  [`& .${classes.root}`]: {
    width: '100%',
    background: 'white',
  },

  [`& .${classes.iconSeparator}`]: {
    width: '1px',
    display: 'block',
    height: '54px',
    background: 'rgba(0, 0, 0, 0.23)',
    marginRight: theme.spacing(1),
  },

  [`& .${classes.searchIcon}`]: {
    color: theme.palette.primary.main,
  },

  [`& .${classes.iconLabel}`]: {
    marginLeft: theme.spacing(0.5),
  },
}))

export interface USearchBoxProps extends Omit<TextFieldProps, 'value' | 'onChange' | 'onKeyDown'> {
  /** Initial search text for the input field */
  value?: string
  /** Search box placeholder */
  placeholder?: string
  /** Search box input field class name */
  className?: string
  /** It called when apply the search */
  onSearch?: (value: string) => void
  /** Show a vertical separator between the text field and search icon */
  showSeparator?: boolean
  /** Label next to the search icon */
  iconLabel?: string
}

/**
 * USearchBox is a component to display search box
 */
export default function USearchBox({
  value,
  onSearch,
  placeholder = 'Search',
  slotProps,
  className,
  showSeparator = true,
  iconLabel,
  ...rest
}: USearchBoxProps) {
  const [searchValue, setSearch] = useState(value || '')

  useEffect(() => {
    setSearch(value || '')
  }, [value])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
  }

  const applySearch = (val?: string) => {
    onSearch && onSearch(val !== undefined ? val : searchValue)
  }

  const handleSearch = () => {
    applySearch(searchValue)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
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
      onKeyDown={handleKeyDown}
      fullWidth
      name="search"
      variant="outlined"
      value={searchValue}
      className={`${classes.root} ${className || ''}`}
      autoComplete="off"
      slotProps={{
        ...slotProps,
        inputLabel: {
          shrink: false,
          ...(slotProps?.inputLabel ? slotProps.inputLabel : {}),
        },
        input: {
          ...(slotProps?.input ? slotProps.input : {}),
          endAdornment: (
            <StyledInputAdornment position="end">
              {searchValue ? (
                <IconButton
                  aria-label="Clear"
                  onClick={handleClear}
                  size="large"
                >
                  <CloseIcon />
                </IconButton>
              ) : (
                ''
              )}
              {showSeparator ? (
                <Box className={classes.iconSeparator}></Box>
              ) : (
                ''
              )}
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
                  size="large"
                >
                  <SearchIcon />
                </IconButton>
              )}
            </StyledInputAdornment>
          ),
        },
      }}
      {...rest}
    />
  )
}

