import React from 'react'
import { StylesProvider, createGenerateClassName, jssPreset } from '@material-ui/styles'
import { create } from 'jss'

const generateClassName = createGenerateClassName({
	productionPrefix: 'c',
});

const jss = create({
	...jssPreset(),
	// Define a custom insertion point that JSS will look for when injecting the styles into the DOM.
	insertionPoint: 'jss-insertion-point',
});

export default function UNICEFStyleProvider(props) {

	return (
		<StylesProvider generateClassName={generateClassName}>
			<StylesProvider jss={jss}>
				{props.children}
			</StylesProvider>
		</StylesProvider>
	)
}
