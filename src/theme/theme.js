import { createTheme } from '@mui/material/styles'
import { enUS } from '@mui/material/locale'

/**
 * UNICEF color palette.
 */
export const unicefColors = {
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

/**
 * Creates a customized MUI theme with UNICEF color palette.
 *
 * Applies UNICEF color palette, typography, and component overrides
 * on top of MUI's default theme. Supports locale-specific configurations
 * for internationalized applications.
 *
 * @param {object} [locale=enUS] - MUI locale object for localized component text.
 * @returns A fully configured MUI theme instance.
 *
 * @example
 * import { createUnicefMuiTheme } from '@unicef/material-ui'
 * import { frFR } from '@mui/material/locale'
 *
 * const theme = createUnicefMuiTheme(frFR)
 */
export const createUnicefMuiTheme = (locale = enUS) => {
  const theme = createTheme(
    {
      typography: {
        useNextVariants: true,
        fontFamily: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'].join(','),
      },
      spacing: 8,
      palette: {
        primary: {
          main: unicefColors.darkBlue,
        },
        secondary: {
          main: unicefColors.blue,
        },
        error: {
          main: unicefColors.red,
        },
        unicef: unicefColors,
        unicefBlue: unicefColors.blue,
      },
      unicefBlue: unicefColors.blue,
      mixins: {
        toolbar: {},
      },
      shape: {
        borderRadius: 4,
      },
      // Component-level style overrides and default prop customizations
      components: {
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
    },
    locale
  )

  return theme
}

/**
 * Default UNICEF MUI theme instance (English locale).
 *
 * Wrap your application with `<ThemeProvider theme={theme}>` to apply
 * UNICEF brand styles throughout the component tree.
 */
const theme = createUnicefMuiTheme()

export default theme
