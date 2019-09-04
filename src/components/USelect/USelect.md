USelect Example:

```jsx
import { Typography } from '@material-ui/core'
const suggestions = [
  { label: 'Afghanistan' },
  { label: 'Aland Islands' },
  { label: 'Albania' },
  { label: 'Algeria' },
  { label: 'American Samoa' },
  { label: 'Andorra' },
  { label: 'Angola' },
].map(suggestion => ({
  value: suggestion.label,
  label: suggestion.label,
}))

;<React.Fragment>
  <Typography varaint="h6">Select</Typography>
  <USelect label="Countries" options={suggestions} variant="outlined" />
  <Typography varaint="h6">Multiple Select</Typography>
  <USelect label="Countries" options={suggestions} variant="outlined" isMulti />
</React.Fragment>
```
