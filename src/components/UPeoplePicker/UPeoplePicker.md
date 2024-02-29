### Examples

```jsx static
const options = [
  { value: 1, label: 'Juan Merlos Tevar', subLabel: 'Manager', imageUrl: null },
  {
    value: 2,
    label: 'Suresh Sevarthi',
    subLabel: 'Front-end Developer',
    imageUrl: null,
  },
  {
    value: 3,
    label: 'Kundal Singh Mehra',
    subLabel: 'Back-end Developer',
    imageUrl: null,
  },
  { value: 4, label: 'Gia Zarina Santos', subLabel: 'Manager', imageUrl: null },
  {
    value: 5,
    label: 'Cory Kleinschmidt',
    subLabel: 'Information technology specialist',
    imageUrl: null,
  },
  {
    value: 6,
    label: 'Riddhi Poladia',
    subLabel: 'Database Specialist',
    imageUrl: null,
  },
  {
    value: 7,
    label: 'Mahananda Talgaonkar',
    subLabel: 'Sharepoint Developer',
    imageUrl: null,
  },
  {
    value: 8,
    label: 'Mary Anne Alde',
    subLabel: 'Sharepoint analyst',
    imageUrl: null,
  },
  {
    value: 9,
    label: 'Renga Narayanan',
    subLabel: 'Back-end Developer',
    imageUrl: null,
  },
]

<UPeoplePicker label="People" options={options} />
```

#### Single people picker

```jsx
import { Typography } from'@mui/material'

const options = [
  { value: 1, label: 'Juan Merlos Tevar', subLabel: 'Manager', imageUrl: null },
  {
    value: 2,
    label: 'Suresh Sevarthi',
    subLabel: 'Front-end Developer',
    imageUrl: null,
  },
  {
    value: 3,
    label: 'Kundal Singh Mehra',
    subLabel: 'Back-end Developer',
    imageUrl: null,
  },
  { value: 4, label: 'Gia Zarina Santos', subLabel: 'Manager', imageUrl: null },
  {
    value: 5,
    label: 'Cory Kleinschmidt',
    subLabel: 'Information technology specialist',
    imageUrl: null,
  },
  {
    value: 6,
    label: 'Riddhi Poladia',
    subLabel: 'Database Specialist',
    imageUrl: null,
  },
  {
    value: 7,
    label: 'Mahananda Talgaonkar',
    subLabel: 'Sharepoint Developer',
    imageUrl: null,
  },
  {
    value: 8,
    label: 'Mary Anne Alde',
    subLabel: 'Sharepoint analyst',
    imageUrl: null,
  },
  {
    value: 9,
    label: 'Renga Narayanan',
    subLabel: 'Back-end Developer',
    imageUrl: null,
  },
]

;<UPeoplePicker label="People" options={options} variant="outlined" />
```

#### Multi People picker

```jsx
import { Typography } from'@mui/material'

const options = [
  { value: 1, label: 'Juan Merlos Tevar', subLabel: 'Manager', imageUrl: null },
  {
    value: 2,
    label: 'Suresh Sevarthi',
    subLabel: 'Front-end Developer',
    imageUrl: null,
  },
  {
    value: 3,
    label: 'Kundal Singh Mehra',
    subLabel: 'Back-end Developer',
    imageUrl: null,
  },
  { value: 4, label: 'Gia Zarina Santos', subLabel: 'Manager', imageUrl: null },
  {
    value: 5,
    label: 'Cory Kleinschmidt',
    subLabel: 'Information technology specialist',
    imageUrl: null,
  },
  {
    value: 6,
    label: 'Riddhi Poladia',
    subLabel: 'Database Specialist',
    imageUrl: null,
  },
  {
    value: 7,
    label: 'Mahananda Talgaonkar',
    subLabel: 'Sharepoint Developer',
    imageUrl: null,
  },
  {
    value: 8,
    label: 'Mary Anne Alde',
    subLabel: 'Sharepoint analyst',
    imageUrl: null,
  },
  {
    value: 9,
    label: 'Renga Narayanan',
    subLabel: 'Back-end Developer',
    imageUrl: null,
  },
]

;<UPeoplePicker label="People" options={options} variant="outlined" isMulti />
```
