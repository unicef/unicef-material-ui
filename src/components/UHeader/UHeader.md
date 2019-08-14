Header Example:

```jsx
import UHeaderRightButtons from '../UHeaderRightButtons';
import UHeaderMainMenu from '../UHeaderMainMenu';
import {
  Button,
  Link,
  Box,
  Tab,
} from "@material-ui/core";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";

<UHeader
  position="static"
  showHamburgerMenu={false}
  applicationName="Application"
>
  <UHeaderRightButtons>
    <Box display="flex" height="64px" pl={4} pr={2}>
      <Button color="inherit">
        <MailIcon />
        Login
      </Button>
      <Button color="inherit">
        <NotificationsIcon />
        <Link color="inherit" href="/">
          Notifications
        </Link>
      </Button>
    </Box>
  </UHeaderRightButtons>
  <UHeaderMainMenu 
    bgcolor="white"
    value={0}
    indicatorColor="primary"
    textColor="primary"
    //onChange={handleChange}
    >
    <Tab label="Active" />
    <Tab label="Disabled" disabled />
  </UHeaderMainMenu>
</UHeader>
```
