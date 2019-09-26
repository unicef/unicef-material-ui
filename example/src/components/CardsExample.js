import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  Card,
  CardHeader,
  Grid,
  Divider,
  Typography,
} from '@material-ui/core'
import ActiveFormTextField from './ActiveFormTextField'
import { UValidatorForm } from 'unicef-material-ui'

const useStyles = makeStyles(theme => ({
  root: {
  },
  margin: {
    margin: '16px 0px'
  },
  input: {
    borderRadius: 0,
  }
}));

function createData(name, calories, fat) {
  return { name, calories, fat };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
];

export default function CardsExample() {
  const classes = useStyles();

  return (
    <React.Fragment >
      <Typography variant="h5" >
        Cards and tables
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardHeader component='div' title='Unicef material-ui'></CardHeader>
            <Divider />
            <UValidatorForm>
              <ActiveFormTextField defaultValue="Customized version for UNICEF of Material UI" typographyVariant="p" variant="outlined" inputPadding={'0px'} fullWidth multiline />
            </UValidatorForm>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className={classes.root}>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <TableCell>Dessert (100g serving)</TableCell>
                  <TableCell align="right">Calories</TableCell>
                  <TableCell align="right">Fat&nbsp;(g)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map(row => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.calories}</TableCell>
                    <TableCell align="right">{row.fat}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}