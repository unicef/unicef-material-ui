import React from "react";
import { useTheme } from "@material-ui/core/styles";
import { Grid, Box, Paper, Typography } from "@material-ui/core";

export default function ColorsExample() {
  const theme = useTheme();

  return (
    <Grid container spacing={2}>
      <Grid item xs="12">
        <Typography variant="h5">Unicef colors</Typography>
      </Grid>
      {Object.keys(theme.palette.unicef).map(color => {
        return (
          <Grid item xs={2}>
            <Paper p={3}>
              <Box bgcolor={theme.palette.unicef[color]} p={4}>
                <Typography variant="body">{color}</Typography>
              </Box>
            </Paper>
          </Grid>
        );
      })}
    </Grid>
  );
}
