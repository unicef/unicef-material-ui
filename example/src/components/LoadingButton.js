import React from 'react'
import { SpinningButton, CustomSelect } from 'unicef-material-ui'
import {
	Typography
} from '@material-ui/core';

export default function LoadingButton() {

	const [loading, setLoading] = React.useState(false);
	const [success, setSuccess] = React.useState(true);
	const timer = React.useRef();

	React.useEffect(() => {
		return () => {
			clearTimeout(timer.current);
		};
	}, []);

	function handleLoadingFunc(value) {
		if (value) {
			setSuccess(false);
			setLoading(true);
			timer.current = setTimeout(() => {
				setSuccess(true);
				setLoading(false);
			}, 2000);
		}
	}

	return (
		<React.Fragment>
			<Typography variant="h5" style={{ margin: '16px 0px' }}>
				Spinning button
      </Typography>
			<SpinningButton loading={loading} success={success} loadingFunc={handleLoadingFunc} buttonText="Download" />
			<CustomSelect />
		</React.Fragment>
	)
}
