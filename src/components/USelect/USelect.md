### Examples:

#### Select:
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

```jsx
import { Typography } from '@material-ui/core';

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
}));

<USelect label="People" options={suggestions} variant="outlined" />;
```

#### Multi select :

```jsx static
const options = [
  { id: 1, title: 'Juan Merlos Tevar', subtitle: 'Manager', imageUrl: null },
  { id: 2, title: 'Suresh Sevarthi', subtitle: 'Front-end Developer', imageUrl: null },
  { id: 3, title: 'Kundal Singh Mehra', subtitle: 'Back-end Developer', imageUrl: null },
  { id: 4, title: 'Gia Zarina Santos', subtitle: 'Manager', imageUrl: null },
  { id: 5, title: 'Cory Kleinschmidt', subtitle: 'Information technology specialist', imageUrl: null },
  { id: 6, title: 'Riddhi Poladia', subtitle: 'Database Specialist', imageUrl: null },
  { id: 7, title: 'Mahananda Talgaonkar', subtitle: 'Sharepoint Developer', imageUrl: null },
  { id: 8, title: 'Mary Anne Alde', subtitle: 'Sharepoint analyst', imageUrl: null },
  { id: 9, title: 'Renga Narayanan', subtitle: 'Back-end Developer', imageUrl: null },
].map(suggestion => ({
  // we must need two properties value and label
  value: suggestion.id, // value will be the main property to differntiate all options.
  label: suggestion.title, // Required // label is the text to display in the chip and menu. Ex: title
  subtitle: suggestion.subtitle,
  imageUrl: suggestion.imageUrl,
}))
```

```jsx
import { Typography } from '@material-ui/core';

const options = [
  { id: 1, title: 'Juan Merlos Tevar', subtitle: 'Manager', imageUrl: null },
  { id: 2, title: 'Suresh Sevarthi', subtitle: 'Front-end Developer', imageUrl: null },
  { id: 3, title: 'Kundal Singh Mehra', subtitle: 'Back-end Developer', imageUrl: null },
  { id: 4, title: 'Gia Zarina Santos', subtitle: 'Manager', imageUrl: null },
  { id: 5, title: 'Cory Kleinschmidt', subtitle: 'Information technology specialist', imageUrl: null },
  { id: 6, title: 'Riddhi Poladia', subtitle: 'Database Specialist', imageUrl: null },
  { id: 7, title: 'Mahananda Talgaonkar', subtitle: 'Sharepoint Developer', imageUrl: null },
  { id: 8, title: 'Mary Anne Alde', subtitle: 'Sharepoint analyst', imageUrl: null },
  { id: 9, title: 'Renga Narayanan', subtitle: 'Back-end Developer', imageUrl: null },
].map(suggestion => ({
  // we must need two properties value and label
  value: suggestion.id, // value will be the main property to differntiate all options, it might be id, title or anything.
  label: suggestion.title, // Required // label is the text to display in the chip and menu. Ex: title
  subtitle: suggestion.subtitle,
  imageUrl: suggestion.imageUrl,
}));

<USelect label="People" options={options} variant="outlined" isMulti />;
```
