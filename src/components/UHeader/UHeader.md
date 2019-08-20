Header Example:

```js
import NavTabs from "../NavTabs"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  bgPosition: {
    position: "relative",
  },
}))

const classes = useStyles()

<UHeader
  showHamburgerMenu={true}
  applicationName="Application"
  headerClass={classes.bgPosition}
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
