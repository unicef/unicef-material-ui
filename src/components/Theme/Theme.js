import { createMuiTheme } from "@material-ui/core/styles"
import { fade } from "@material-ui/core/styles/colorManipulator"
const colorPrimary = "#374EA2"

const unicef = {
  blue: "#1CABE2",
  darkBlue: "#374EA2",
  purple: "#6A3674",
  red: "#E2231A",
  darkRed: "#961A49",
  yellow: "#FFC20E",
  orange: "#F26A21",
  green: "#80BD41",
  darkGreen: "#00833D",
}

const zIndexDrawer = 1200

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
  palette: {
    primary: {
      main: colorPrimary,
    },
    unicef: unicef,
    unicefBlue: "#1CABE2",
  },
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
    MuiMenu: {
      list: {
        display: "flex",
        flexDirection: "column",
      },
    },
    MuiMenuItem: {
      gutters: {
        padding: "0px 16px !important",
      },
    },
    MuiTab: {
      root: {
        "& Mui": {
          selected: {},
        },
      },
    },
    MuiTypography: {
      root: {
        margin: "none",
      },
    },
    MuiIconButton: {
      root: {
        "&:hover": {
          backgroundColor: "transparent !important",
          textDecorationLine: "underline !important",
        },
      },
      edgeStart: {
        marginLeft: "0px !important",
      },
    },
    MuiButtonBase: {
      root: {
        display: "flex",
        borderRadius: 4,
      },
    },
    MuiInputBase: {
      root: {
        backgroundColor: "white",
      },
    },
    MuiButton: {
      contained: {
        "&:active": {
          boxShadow: "none",
        },
      },
    },
    MuiDrawer: {
      paper: {
        minWidth: 256,
      },
      paperAnchorDockedLeft: {
        borderRight: "none",
      },
    },
    MuiSvgIcon: {
      root: {
        paddingRight: 4,
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
/** This is customized version of theme for whole application. To use UNICEF theme add MuiThemeProvider at the top level of your app, it will set the custom styles of unicef down to the component tree.
 *  More info: Material-ui theming
 */
export default theme