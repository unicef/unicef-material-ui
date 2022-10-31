import { createTheme, adaptV4Theme } from '@mui/material/styles'

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

const zIndexDrawer = 1200

const theme = createTheme(
  adaptV4Theme({
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
      unicefBlue: '#1CABE2',
    },
    unicefBlue: '#1CABE2',
    mixins: {
      toolbar: {},
    },
    shape: {
      borderRadius: 4,
    },
    zIndex: {
      drawer: zIndexDrawer,
    },
    // customize with mui classes
    overrides: {
      MuiAppBar: {
        root: {
          zIndex: zIndexDrawer + 1,
        },
      },
      MuiInputBase: {
        root: {
          backgroundColor: 'white',
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
    },
    props: {
      // Name of the component
      MuiButtonBase: {
        // The default props to change
        disableRipple: true, // No more ripple
      },
    },
  })
)
/** This is customized version of theme for whole application. To use UNICEF theme add MuiThemeProvider at the top level of your app, it will set the custom styles of unicef down to the component tree.
 *  More info: Material-ui theming
 */
export default theme
