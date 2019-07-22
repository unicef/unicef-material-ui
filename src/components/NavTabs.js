import React from 'react'
import {
	Tab,
	Tabs,
	Link
} from '@material-ui/core';
import PropTypes from 'prop-types';


export default function NavTabs(props) {

	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	}

	NavTabs.propTypes = {
		tabs: PropTypes.array,
	}

	return (
		<Tabs value={value} indicatorColor="primary" textColor="primary" onChange={handleChange}>
			{props.tabs.map((tab) =>
				<Tab label={tab.name} key={tab.name} disabled={tab.type === 'disabled' && true} component={Link} to={tab.link} />
			)}
		</Tabs>
	)
}
