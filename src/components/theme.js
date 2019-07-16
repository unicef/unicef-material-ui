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
    unicefBlue: {
      main: '#1CABE2'
    },
  },
  shape: {
    borderRadius: 4,
  },
  // customize with mui classes
  overrides: {
    MuiTab: {
      root: {
        borderBottom: '2px solid transparent',
        '&:hover': {
        color: colorPrimary,
        backgroundColor: fade(colorPrimary,0.1),
        borderBottom: `2px solid ${colorPrimary}`,
        },
      },
      // labelIcon: {
      //   minHeight: 0,
      //   paddingTop: 0,
      // },
      // wrapper: {
      //   display: 'flex',
      //   flexDirection: 'row-reverse',
      // }
    },
    MuiIconButton: {
      root: {
        '&:hover': {
          backgroundColor: 'none'
        }
      },
    },
    // MuiLink: {
    //   underlineHover: {
    //     textDecorationLine: 'underline',
    //   },
    //   root: {
    //     color: '#fff'
    //   },
    // },
    MuiButton: {
      contained: {
        '&:active': {
          boxShadow: 'none',
        },
      },
    },
    // MuiIconButton: {
    //   root: {
    //     '&:hover': {
    //       backgroundColor: 'none'
    //     },
    //   },
    // },
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

export default theme;
