import React from 'react';
import {
	Typography,
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle
} from '@material-ui/core';

export default function Alert() {
	const [open, setOpen] = React.useState(false);

	function handleClickOpen() {
		setOpen(true);
	}

	function handleClose() {
		setOpen(false);
	}

	return (
		<div>
			<Typography variant="h5" style={{ margin: '32px 0px' }}>
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