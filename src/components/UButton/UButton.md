UButtons with examples :

```jsx
import { Typography, Grid } from "@material-ui/core";

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
  <Grid item xs={4}>
    <Typography variant="subtitle1">Primary button</Typography>
    <UButton variant="uPrimary">Primary</UButton>
  </Grid>
  <Grid item xs={4}>
    <Typography variant="subtitle1">Default button</Typography>
    <UButton variant="uDefault">Default</UButton>
  </Grid>
  <Grid item xs={4}>
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
