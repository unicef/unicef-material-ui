### Examples:

```jsx static

const options = [
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
```

#### Select:

```jsx
import { Typography } from '@material-ui/core';

const options = [
  { label: 'Afghanistan' },
  { label: 'Aland Islands' },
  { label: 'Albania' },
  { label: 'Algeria' },
  { label: 'American Samoa' },
  { label: 'Andorra' },
  { label: 'Angola' },
].map(option => ({
  value: option.label,
  label: option.label,
}));

<USelect label="Select" options={options} variant="outlined" />;
```

#### Multi select :

```jsx
import { Typography } from '@material-ui/core';

const options = [
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
}));

<USelect label="People" options={options} variant="outlined" isMulti />;
```
