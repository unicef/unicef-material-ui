### Examples

```jsx static
const options = [
  { value: 1, label: 'Juan Merlos Tevar', subLabel: 'Manager', },
  {
    value: 2,
    label: 'Suresh Sevarthi',
    subLabel: 'Front-end Developer',
  },
  {
    value: 3,
    label: 'Kundal Singh Mehra',
    subLabel: 'Back-end Developer',
  },
  { value: 4, label: 'Gia Zarina Santos', subLabel: 'Manager' },
  {
    value: 5,
    label: 'Cory Kleinschmidt',
    subLabel: 'Information technology specialist',
  },
  {
    value: 6,
    label: 'Riddhi Poladia',
    subLabel: 'Database Specialist',
  },
  {
    value: 7,
    label: 'Mahananda Talgaonkar',
    subLabel: 'Sharepoint Developer',
  },
  {
    value: 8,
    label: 'Mary Anne Alde',
    subLabel: 'Sharepoint analyst',
  },
  {
    value: 9,
    label: 'Renga Narayanan',
    subLabel: 'Back-end Developer',
  },
]

<USelectPicker label="People" options={options} isMulti={true} />
```

#### Multi select picker

```jsx
import { Typography } from '@material-ui/core'

const options = [
  {
    value: 'EAPR',
    label: 'EAPR',
    subLabel: 'East Asia and Pacific Region',
  },
  {
    value: 'ECAR',
    label: 'ECAR',
    subLabel: 'Europe and Central Asia Region',
  },
  {
    value: 'ESAR',
    label: 'ESAR',
    subLabel: 'Estern and Southern Africa Region',
  },
  {
    value: 'LACR',
    label: 'LACR',
    subLabel: 'Latin America and the Caribbean',
  },
  {
    value: 'MENAR',
    label: 'MENAR',
    subLabel: 'Middle East and North Africa',
  },
  {
    value: 'SAR',
    label: 'SAR',
    subLabel: 'South Asia Region',
  },
  {
    value: 'WCAR',
    label: 'WCAR',
    subLabel: 'West and Central Africa Region',
  },
]

;<USelectPicker label="Regions" options={options} isMulti={true} variant="outlined" />
```

#### Single select picker

```jsx
import { Typography } from '@material-ui/core'

const options = [
  {
    value: 'EAPR',
    label: 'EAPR',
    subLabel: 'East Asia and Pacific Region',
  },
  {
    value: 'ECAR',
    label: 'ECAR',
    subLabel: 'Europe and Central Asia Region',
  },
  {
    value: 'ESAR',
    label: 'ESAR',
    subLabel: 'Estern and Southern Africa Region',
  },
  {
    value: 'LACR',
    label: 'LACR',
    subLabel: 'Latin America and the Caribbean',
  },
  {
    value: 'MENAR',
    label: 'MENAR',
    subLabel: 'Middle East and North Africa',
  },
  {
    value: 'SAR',
    label: 'SAR',
    subLabel: 'South Asia Region',
  },
  {
    value: 'WCAR',
    label: 'WCAR',
    subLabel: 'West and Central Africa Region',
  },
]

;<USelectPicker label="Regions" options={options} variant="outlined" />
```
