USelect Examaple:

```jsx
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

;<USelect label="Countries" options={suggestions} variant="outlined" />
```
