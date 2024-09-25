import React from 'react'
import { styled } from '@mui/material/styles'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  CardContent,
  Card,
  CardHeader,
  Grid2 as Grid,
  Typography,
  Divider,
} from '@mui/material'

const PREFIX = 'CardsExample'

const classes = {
  root: `${PREFIX}-root`,
  margin: `${PREFIX}-margin`,
}

// TODO jss-to-styled codemod: The Fragment root was replaced by div. Change the tag if needed.
const Root = styled('div')(({ theme }) => ({
  [`& .${classes.root}`]: {},

  [`& .${classes.margin}`]: {
    margin: theme.spacing(2, 0),
  },
}))

function createData(name, calories, fat) {
  return { name, calories, fat }
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
]

export default function CardsExample() {
  return (
    <Root>
      <Typography variant="h5" sx={{ margin: '32px 0px' }}>
        Cards and tables
      </Typography>
      <Grid container spacing={3}>
        <Grid item size={{ xs: 12, md: 6 }}>
          <Card>
            <CardHeader component="div" title="Card title"></CardHeader>
            <Divider />
            <CardContent>
              <Typography component="p" gutterBottom>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Typography>
              <Typography variant="body2">Last updated 5 mins ago</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item size={{ xs: 12, md: 6 }}>
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
    </Root>
  )
}
