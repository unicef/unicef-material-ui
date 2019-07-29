import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
	Typography,
	Link,
	IconButton,
	Avatar,
} from '@material-ui/core'
import MailIcon from '@material-ui/icons/Mail'


const useStyles = makeStyles(theme => ({
	menu: {
		color: '#fff'
	},
	links: {
		color: '#fff',
		backgroundColor : 'transparent !important',
		textDecorationLine: 'none',
	},
	marginLeft: {
		marginLeft: theme.spacing(2),
	},
	avatar: {
		width: 32,
		height: 32,
	},
	iconButton : {
		'& hover': {
			textDecorationLine: 'underline !important'
		}
	}
}));

export default function NavLinks() {
	const classes = useStyles();

	return (
		<React.Fragment>
			<IconButton aria-label="Show 4 new mails" color="inherit" className={classes.iconButton}>
				<MailIcon />
				<Typography variant="subtitle1">
					<Link href="https://github.com/unicef/unicef-material-ui" className={classes.links}>
						GitHub
          			</Link>
				</Typography>
			</IconButton>
		</React.Fragment>
	)
}
