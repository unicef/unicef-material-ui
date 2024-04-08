import { createTheme } from '@mui/material/styles'

const unicef = {
  blue: '#1CABE2',
  darkBlue: '#374EA2',
  purple: '#6A3674',
  red: '#E2231A',
  darkRed: '#961A49',
  yellow: '#FFC20E',
  orange: '#F26A21',
  green: '#80BD41',
  darkGreen: '#00833D',
}

const theme = createTheme({
  typography: {
    useNextVariants: true,
    fontFamily: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'].join(','),
  },
  spacing: 8,
  palette: {
    primary: {
      main: unicef.darkBlue,
    },
    secondary: {
      main: unicef.blue,
    },
    error: {
      main: unicef.red,
    },
    unicef: unicef,
    unicefBlue: unicef.blue,
  },
  unicefBlue: unicef.blue,
  mixins: {
    toolbar: {},
  },
  shape: {
    borderRadius: 4,
  },
  components: {
    // Name of the component
    MuiButtonBase: {
      defaultProps: {
        // The props to change the default for.
        disableRipple: true, // No more ripple, on the whole application 💣!
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          minWidth: 256,
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          backgroundColor: 'white',
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          minWidth: 160,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          zIndex: 1200,
        },
      },
    },
  },
})
/** This is customized version of theme for whole application. To use UNICEF theme add MuiThemeProvider at the top level of your app, it will set the custom styles of unicef down to the component tree.
 *  More info: Material-ui theming
 */
export default theme
