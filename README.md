# UNICEF Material-ui

Customized version of the material UI with react for UNICEF.

Live example found at [UNICEF Material Ui](https://unicef.github.io/unicef-material-ui/)

## Getting started

In order to use the UNICEF's Material UI in your project you can download using npm.

### Using npm

First, install the npm package

```bash
 npm install @unicef/material-ui

```

## Usage

### Adding UNICEF theme to your app

This is customized version of theme for whole application. 
To use UNICEF theme add `MuiThemeProvider` at the top level of your app, it will set the custom styles of unicef down to the component tree. 

More info: <a href="https://material-ui.com/styles/advanced/#theming">Material-ui theming</a>

App.js

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

## Custom components

All components require to be wrapped inside of a theme using `MuiThemeProvider` at the top level of the `App`, as explained above.

### `Header`
Standarized header component with UNICEF look and feel. 

TODO: Image of the header.


```jsx
  import React from 'react'
  import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
  import { Header, theme } from 'unicef-material-ui'

  export default function App() {

    return (
      <MuiThemeProvider theme={theme}>
        <Header
            showHamburgerMenu={false}
            applicationName="Application"
            navLinks={<NavLinks />}
            tabs={<NavTabs />}
            // hideLogo={false}
            // logoBorderLine={false}
            // newLogo={<img alt="user" src={avatar} />}
            menuItems={<MenuItems />}
            menuTabs={<MenuTabs />}
        />
      </MuiThemeProvider>
    )
  }
```

Props: 

#### `showHamburgerMenu : Boolean` 
Button with humburger icon on the left of the header. It enables enables the side menu (`menuItems`).
Enabled by default. Example:

```jsx
  showHamburguerMenu={false}
```
     
#### `applicationName : String`: 
Name of the appliaction, will be displayed left side in the header after the hamburger menu. 
Which will be enabled By. Example:

 ```jsx
    applicationName={"Material Ui"}
 ```
  
#### `hideLogo : Boolean`
UNICEF logo enabled by default, hide it By. Example:

 ```jsx
   hideLogo = {true}
 ```

#### `newLogo : Element(Image)`
logo is an optional once we hide it, add new logo or image By. Example:

 ```jsx
   newLogo = {<img alt="user" src={avatar} />} // Optional
 ```
 
#### `logoBorderLine : Boolean`
It is the separator line between application name and logo with white border.
Enabled by default, if `hideLogo` is not set to true.

 ```jsx
   logoBorderLine={false}
 ```
 
 #### `navLinks : component`
 Navigation Links are displyed on right side of header with customized background color.
 
 ```jsx
   navLinks={<NavLinks />}
 ```
 
 ####  `tabs : component`
 Tabs are displyed below the header.
 use material ui [tabs](https://material-ui.com/components/tabs/) for creating customised tabs.
 
 ```jsx
   tabs={<NavTabs />}
 ```
 
 #### `menuItems : component`
 Menu Items are the `navLinks` displayed in side menu, only on screens are smaller(less than 959.58px).
 create a component with material ui `<ListItems />`. Optional, enabled By. Example:

  ```jsx
    menuItems={<MenuItems />}
  ```
  
#### `menuTabs : component`
Menu Tabs are the `Navigation Tabs`. Which is always displayed in the side menu.
Enabled By. Example:

 ```jsx
   menuTabs={<MenuTabs />}
 ```

# License

Distributed under GLPv3.
