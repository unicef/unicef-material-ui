# [unicef-material-ui](https://unicef.github.io/unicef-material-ui/)

Customized version of the react version material UI for UNICEF


## Getting started

In order to use the UNICEF's Material UI in your project you can download using npm.

### Using npm

First, install the npm package

```bash
 npm install @unicef/unicef-material-ui

```

## Usage

App.js

### theme

 This is customized version of theme for whole application. 
 Add a `MuiThemeProvider` to the top level of your app to pass the theme down the React component tree. Then, you can access the theme object in style functions.

 More info: <a href="https://material-ui.com/styles/advanced/#theming">Material-ui theming</a>

    ```jsx
    import React from 'react'
    import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
    import { theme } from 'unicef-material-ui'

    export default function App() {

      return (
        <MuiThemeProvider theme={theme}>
          {/* Components*/}
        </MuiThemeProvider>
      )
    }
    ```

### Header
Header needs be wrapped inside theme using `MuiThemeProvider`,
Either to the top level of your app or inside any component.

    ```jsx
    import React from 'react'
    import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
    import { Header, theme } from 'unicef-material-ui'

    export default function App() {

      return (
        <MuiThemeProvider theme={theme}>
          <Header
              applicationName="Application"
              navLinks={<NavLinks />}
              tabs={<NavTabs />}
              // hideLogo={false}
              // logoBorderLine={false}
              // logo={<img alt="user" src={avatar} />}
              menuItems={<MenuItems />}
              menuTabs={<MenuTabs />}
              menuButton={true}
          />
        </MuiThemeProvider>
      )
    }
    ```

## Description how to use props

### Props

- Application Name : String

```
  Ex: applicationName={"Material Ui"}
```

- menuItems : component

```
   Ex: menuItems = {<MenuItem />}
```

- menuTabs : component

```
  Ex: menuTabs = {<MenuTabs />}
```

- menuButton will be displayed by default.
  If your application does not need menuButton
  send below prop:

```
    menuButtton={false}
```

- logo will be displayed by default.
  If you want to hide the logo,

```
   hideLogo={false}
```

    If you want to pass your own logo or image

```
    Ex: logo={<img alt="" src="imageUrl"}
```

- Nav bar links to be passes as prop
  navLinks : component,

```
    navLinks = {<NavLinks />}
```

- Tabs : component

```
   tabs = {<NavTabs />}
```

# Contribution

Just clone the project and make a pull request.

# License

Distributed under GLPv3.
