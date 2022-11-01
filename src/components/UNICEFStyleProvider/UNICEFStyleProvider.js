import React from 'react'
import { StyledEngineProvider } from '@mui/material/styles'
// import {
//   StylesProvider,
//   createGenerateClassName,
//   jssPreset,
// } from '@material-ui/styles'
// import { create } from 'jss'

// const generateClassName = createGenerateClassName({
//   productionPrefix: 'u',
//   seed: 'Uni',
// })

// const jss = create({
//   ...jssPreset(),
//   // Define a custom insertion point that JSS will look for when injecting the styles into the DOM.
//   insertionPoint: <head />,
// })

export default function UNICEFStyleProvider(props) {
  return (
    <StyledEngineProvider
      injectFirst={true}
      // generateClassName={generateClassName}
      // jss={jss}
    >
      {props.children}
    </StyledEngineProvider>
  )
}
