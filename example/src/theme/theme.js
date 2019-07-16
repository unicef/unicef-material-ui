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
    MuiTab: {
      root: {
        borderBottom: '2px solid transparent',
        '&:hover': {
          color: colorPrimary,
          backgroundColor: fade(colorPrimary, 0.1),
          // borderBottom: `2px solid ${colorPrimary}`,
        },
      },
    },
    MuiIconButton: {
      root: {
        '&:hover': {
          backgroundColor: 'transparent'
        }
      },
    },
    MuiButtonBase: {
      root: {
        display: 'flex',
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

export default theme;
