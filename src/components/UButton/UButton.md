UButton with examples :

```jsx
import { Typography, Grid } from "@mui/material";

const [loading, setLoading] = React.useState(false);
const timer = React.useRef();

React.useEffect(() => {
  return () => {
    clearTimeout(timer.current);
  };
}, []);

function handleButton() {
  setLoading(true);
  timer.current = setTimeout(() => {
    setLoading(false);
  }, 2000);
}

<Grid container spacing={2}>
  <Grid size={{xs:12,md:4}}>
    <Typography variant="subtitle1">Primary button</Typography>
    <UButton variant="uPrimary">Primary</UButton>
  </Grid>
  <Grid size={{xs:12,md:4}}>
    <Typography variant="subtitle1">Default button</Typography>
    <UButton variant="uDefault">Default</UButton>
  </Grid>
  <Grid size={{xs:12,md:4}}>
    <Typography variant="subtitle1">Spinning button</Typography>
    <UButton
      variant="uPrimary"
      spinButton
      loading={loading}
      disabled={loading}
      onClick={handleButton}
    >
      Spin Button
    </UButton>
  </Grid>
</Grid>;
```
