# unicef-material-ui
Customized version of the react version material UI for UNICEF

## Getting started

In order to use the UNICEF's Material UI in your project you can download using npm.

### Using npm

This is material ui customization, and therefore you can use the components by importing in to your project.

First, install the npm package

```bash
 npm install @unicef/unicef-material-ui

```

## Usage

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
  * Application Name : String
 ```
   Ex: applicationName={"Material Ui"}
 ```
  * menuItems : component
  
 ```
    Ex: menuItems = {<MenuItem />}
 ```
  * menuTabs : component
  
 ```
   Ex: menuTabs = {<MenuTabs />}
 ```
  * menuButton will be displayed by default.
    If your application does not need menuButton 
     send below prop: 
 ```
     menuButtton={false}
 ```

  * logo will be displayed by default.
    If you want to hide the logo, 
 ```
    hideLogo={false}
 ```

    If you want to pass your own logo or image
```
    Ex: logo={<img alt="" src="imageUrl"}
```

  *  Nav bar links to be passes as prop
    navLinks : component,
```
    navLinks = {<NavLinks />}
```

  * Tabs : component
 ```
    tabs = {<NavTabs />}
 ```

# Contribution

Just clone the project and make a pull request.

# License

Distributed under GLPv3.
