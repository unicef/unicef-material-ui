Header Example:

```jsx
import UHeader from './UHeader'
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  bgPosition: {
    position: "relative",
  },
}))

const classes = useStyles()

<UHeader
  applicationName="Application"
  // navLinks={<NavLinks />}
  // tabs={<NavTabs tabs={tabs}/>}
  // hideLogo={false}
  // logoBorderLine={false}
  // newLogo={<img alt="user" src={avatar} />}
  // menuItems={<MenuItems />}
  // menuTabs={<MenuTabs />}
>
</UHeader>
```
