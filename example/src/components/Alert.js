import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
	Typography,
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle
} from '@material-ui/core';


const useStyles = makeStyles(theme => ({

	margin: {
		margin: '16px 0px'
	}
}));


export default function Alert() {
	const [open, setOpen] = React.useState(false);
	const classes = useStyles();

	function handleClickOpen() {
		setOpen(true);
	}

	function handleClose() {
		setOpen(false);
	}

	return (
		<div>
			<Typography variant="h5" className={classes.margin}>
        Alert
      </Typography>
			<Button variant="outlined" color="primary" onClick={handleClickOpen}>
				Open alert dialog
      </Button>
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-description">
						Let Google help apps determine location. This means sending anonymous location data to
						Google, even when no apps are running.
          </DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} color="primary">
						Disagree
          </Button>
					<Button onClick={handleClose} color="primary" autoFocus>
						Agree
          </Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}