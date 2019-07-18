import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
	Typography,
	MenuItem,
	Menu,
	ListItemText,
	Badge,
	IconButton,
	Avatar,
} from '@material-ui/core'
import ArrowDropDown from '@material-ui/icons/ArrowDropDown'
import MailIcon from '@material-ui/icons/Mail'
import NotificationsIcon from '@material-ui/icons/Notifications'
import avatar from '../assets/avatar.png'


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

	const [profileOpen, setProfileOpen] = React.useState(null)
	const [profile, setProfile] = React.useState(null)

	const handleProfileMenuOpen = (event) => {
		setProfileOpen(event.currentTarget)
	}

	const handleProfileMenuClose = (event) => {
		setProfileOpen(null)
	}
	const handleProfile = (event) => {
		setProfile(event.currentTarget)
	}

	const handleProfileMenu = (event) => {
		setProfile(null)
	}

	return (
		<React.Fragment>
			<IconButton aria-label="Show 4 new mails" color="inherit" className={classes.iconButton}>
				<MailIcon />
				<Typography variant="subtitle1">
					<a href="#0" className={classes.links}>
						With Icon
          			</a>
				</Typography>
			</IconButton>
			<IconButton aria-label="Show 17 new notifications" color="inherit" className={classes.iconButton}>
				<Badge badgeContent={17} color="secondary">
					<NotificationsIcon />
				</Badge>
				<Typography variant="subtitle1">
					<a href="#0" className={classes.links}>
						Notifications
          			</a>
				</Typography>
			</IconButton>
			<IconButton aria-label="Show 17 new notifications" color="inherit" onClick={handleProfileMenuOpen} className={classes.iconButton}>
				<Typography variant="subtitle1">
					<a href="#0" className={classes.links}>
						Dropdown
            		</a>
				</Typography>
				<ArrowDropDown />
			</IconButton>
			<Menu
				elevation={0}
				variant="scrollable"
				scrollButtons="on"
				getContentAnchorEl={null}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'center',
				}}

				transformOrigin={{
					vertical: 'top',
					horizontal: 'center',
				}}
				id="menu"
				anchorEl={profileOpen}
				keepMounted
				open={Boolean(profileOpen)}
				onClose={handleProfileMenuClose}
			>
				<MenuItem>
					<ListItemText primary="Sent" />
				</MenuItem>
				<MenuItem>
					<ListItemText primary="Drafts" />
				</MenuItem>
				<MenuItem>
					<ListItemText primary="Inbox" />
				</MenuItem>
			</Menu>
			<IconButton
				edge="end"
				aria-label="Account of current user"
				aria-haspopup="true"
				onClick={handleProfile}
				className={classes.iconButton}
			>
				<Avatar alt="User" src={avatar} className={classes.avatar} />
			</IconButton>
			<Menu
				elevation={0}
				variant="scrollable"
				scrollButtons="on"
				getContentAnchorEl={null}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'center',
				}}

				transformOrigin={{
					vertical: 'top',
					horizontal: 'center',
				}}
				id="menu"
				anchorEl={profile}
				keepMounted
				open={Boolean(profile)}
				onClose={handleProfileMenu}
			>
				<MenuItem>
					<ListItemText primary="Sent mail" />
				</MenuItem>
				<MenuItem>
					<ListItemText primary="Drafts" />
				</MenuItem>
				<MenuItem>
					<ListItemText primary="Inbox" />
				</MenuItem>
			</Menu>
		</React.Fragment>
	)
}
