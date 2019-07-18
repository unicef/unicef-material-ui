import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { TextField, Button, MenuItem, Typography } from '@material-ui/core'

const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];

const useStyles = makeStyles(theme => ({
  container: {
		display: 'flex',
		alignItems: 'baseline'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  margin: {
		margin: '16px 0px'
  },
  menu: {
    width: 200,
  },
}));

export default function Form () {

	const classes = useStyles();

  const [values, setValues] = React.useState({
    name: 'Name',
    age: '',
    multiline: 'Controlled',
    currency: 'EUR',
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
	};
	
	return (
		<React.Fragment>
			<Typography  variant="h5" className={classes.margin}>
        Form
      </Typography>
			<form className={classes.container} noValidate autoComplete="off">
				<TextField
					required
					id="outlined-required"
					label="Name"
					defaultValue="Hello World"
					className={classes.textField}
					margin="normal"
					variant="outlined"
				/>
				<TextField
					error
					id="outlined-error"
					label="Error"
					defaultValue="Hello World"
					className={classes.textField}
					margin="normal"
					variant="outlined"
				/>
				<TextField
					error
					id="outlined-select-currency"
					select
					label="Select"
					className={classes.textField}
					value={values.currency}
					onChange={handleChange('currency')}
					SelectProps={{
						MenuProps: {
							className: classes.menu,
						},
					}}
					helperText="Please select your currency"
					margin="normal"
					variant="outlined"
				>
					{currencies.map(option => (
						<MenuItem key={option.value} value={option.value}>
							{option.label}
						</MenuItem>
					))}
				</TextField>
				<Button variant="contained" color="primary" size="large">
					Primary
				</Button>
			</form>
			<Typography  variant="h5" >
        Text area
      </Typography>
			<TextField
				className={classes.margin}
				variant="outlined"
				label="Textarea with autoresize"
				placeholder="Text area increases and decreases with typing ..."
				multiline={true}
				fullWidth={false}
				helperText="Auto resize"
			/>
		</React.Fragment>
	)
}