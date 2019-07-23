import { createMuiTheme } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
const colorPrimary = '#374EA2'


const theme = createMuiTheme({

  typography: {
    useNextVariants: true,
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  palette: {
    primary: {
      main: colorPrimary,
    },
  },
  shape: {
    borderRadius: 4,
  },
  // customize with mui classes
  overrides: {
    MuiMenu : {
      list: {
        display: 'flex',
        flexDirection: 'column',
      },
    },
    MuiMenuItem : {
      gutters : {
        padding: '0px 16px !important'
      }
    },
    MuiTab: {
      root: {
        borderBottom: '2px solid transparent',
        '&:hover': {
          color: colorPrimary,
          backgroundColor: fade(colorPrimary, 0.1),
          textDecorationLine: 'none !important',
        },
        '& Mui' : {
          selected :{
            backgroundColor: fade(colorPrimary, 0.1),
          }
        }
      },
    },
    MuiTypography: {
      root: {
        margin: 'none'
      }
    },
    MuiIconButton: {
      root: {
        '&:hover': {
          backgroundColor: 'transparent !important',
          textDecorationLine: 'underline !important'
        }
      },
      edgeStart : {
        marginLeft: '0px !important'
      },
    },
    MuiButtonBase: {
      root: {
        display: 'flex',
        borderRadius: 4,
      },
    },
    MuiButton: {
      contained: {
        '&:active': {
          boxShadow: 'none',
        },
      },
    },
    MuiDrawer: {
      paper: {
        minWidth: 256,
      },
      paperAnchorDockedLeft: {
        borderRight: 'none',
      },
    },
    MuiSvgIcon: {
      root: {
        paddingRight: 4,
      },
    }
  },
  props: {
    // Name of the component
    MuiButtonBase: {
      // The default props to change
      disableRipple: true, // No more ripple
    },
  },
});
/** This is customized version of theme for whole application. To use UNICEF theme add MuiThemeProvider at the top level of your app, it will set the custom styles of unicef down to the component tree.
  *  More info: Material-ui theming 
  */
export default theme;
