Buttons or Links to be displayed on the right side of the header.

It must be wrapped inside UHeader(Parent Component).

UHeaderRightButtons Example:

```jsx
import UHeader from '../UHeader';
import {
  Button,
  Link,
  Box,
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
        Email
      </Button>
      <Button color="inherit">
        <NotificationsIcon />
        <Link color="inherit" href="/">
          Notifications
        </Link>
      </Button>
    </Box>
  </UHeaderRightButtons>
</UHeader>
```
