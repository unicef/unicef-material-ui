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

const options = [
  { title: 'Juan Merlos Tevar', subtitle: 'Manager', imageUrl: null },
  { title: 'Suresh Sevarthi', subtitle: 'Front-end Developer', imageUrl: null },
  { title: 'Kundal Singh Mehra', subtitle: 'Back-end Developer', imageUrl: null },
  { title: 'Gia Zarina Santos', subtitle: 'Manager', imageUrl: null },
  { title: 'Cory Kleinschmidt', subtitle: 'Information technology specialist', imageUrl: null },
  { title: 'Riddhi Poladia', subtitle: 'Database Specialist', imageUrl: null },
  { title: 'Mahananda Talgaonkar', subtitle: 'Sharepoint Developer', imageUrl: null },
  { title: 'Mary Anne Alde', subtitle: 'Sharepoint analyst', imageUrl: null },
  { title: 'Renga Narayanan', subtitle: 'Back-end Developer', imageUrl: null },
].map(suggestion => ({
  value: suggestion.title,
  label: suggestion.title,
  subtitle: suggestion.subtitle,
  imageUrl: suggestion.imageUrl,
}))

;<React.Fragment>
  <Typography varaint="h6">Select</Typography>
  <USelect label="People" options={suggestions} variant="outlined" />
  <Typography varaint="h6">Multiple Select</Typography>
  <USelect label="People" options={options} variant="outlined" isMulti />
</React.Fragment>
```
