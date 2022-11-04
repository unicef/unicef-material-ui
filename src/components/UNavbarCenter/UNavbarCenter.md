UNavbarCenter is a component to display the content in header after the app title

It accepts all the components that you can display in the header

All the components must be wrapped inside UNavbarCenter component. Ex: Search

UNavbarCenter Example :

```jsx
import UHeader from '../UHeader'
import { Button, Box, InputBase } from'@mui/material'
//import { fade, makeStyles } from '@material-ui/core/styles'
import SearchIcon from '@mui/icons-material/Search'
// To do
// const useStyles = makeStyles(theme => ({
//   search: {
//     position: 'relative',
//     borderRadius: theme.shape.borderRadius,
//     backgroundColor: fade(theme.palette.common.white, 0.15),
//     '&:hover': {
//       backgroundColor: fade(theme.palette.common.white, 0.25),
//     },
//     marginLeft: 0,
//     width: '100%',
//     [theme.breakpoints.up('sm')]: {
//       marginLeft: theme.spacing(1),
//       width: 'auto',
//     },
//   },
//   searchIcon: {
//     width: theme.spacing(7),
//     height: '100%',
//     position: 'absolute',
//     top: 0,
//     pointerEvents: 'none',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   inputRoot: {
//     backgroundColor: theme.palette.common.white,
//   },
//   inputInput: {
//     padding: theme.spacing(1, 1, 1, 7),
//     transition: theme.transitions.create('width'),
//     width: '100%',
//     [theme.breakpoints.up('sm')]: {
//       width: 120,
//       '&:focus': {
//         width: 200,
//       },
//     },
//   },
// }))

// export default function UHeaderWithSearch() {
//To do
//const classes = useStyles()
const classes = {}
// return (
;<UHeader
  position="static"
  showHamburgerMenu={false}
  applicationName="Application"
>
  <UNavbarCenter>
    <div className={classes.search}>
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
    </div>
  </UNavbarCenter>
</UHeader>
// )
//}
```
