UHeaderMainMenu Example : 

```jsx
import UHeader from '../UHeader';
import {
  Tab
} from "@material-ui/core";

<UHeader
  position="static"
  showHamburgerMenu={false}
  applicationName="Application"
>
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
