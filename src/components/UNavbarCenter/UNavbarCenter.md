UNavbarCenter is a component to display the content in header after the app title

It accepts all the components that you can display in the header

All the components must be wrapped inside UNavbarCenter component. Ex: Search

UNavbarCenter Example :

```jsx
import UHeader from '../UHeader'
import { Button, Box, InputBase } from'@mui/material'
import { styled, alpha } from '@mui/material/styles'
import SearchIcon from '@mui/icons-material/Search'

const PREFIX = 'UNavBar'

const classes = {
  search: `${PREFIX}-search`,
  searchIcon: `${PREFIX}-searchIcon`,
  inputRoot: `${PREFIX}-inputRoot`,
  inputInput: `${PREFIX}-inputInput`,
  inputRoot: `${PREFIX}-inputRoot`,
}

const StyledBox = styled('div')(({ theme }) => ({
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

// export default function UHeaderWithSearch() {
// return (
;<UHeader
  position="static"
  showHamburgerMenu={false}
  applicationName="Application"
>
  <UNavbarCenter>
    <StyledBox className={classes.search}>
      <InputBase
        placeholder="Search…"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        slotProps={{inputLabel:{ 'aria-label': 'search' }}}
      />
      <Box className={classes.searchIcon}>
        <SearchIcon color="primary" />
      </Box>
    </StyledBox>
  </UNavbarCenter>
</UHeader>
// )
//}
```
