import { jssPreset } from '@mui/styles'
import { StyledEngineProvider } from '@mui/material/styles'
import { createGenerateClassName } from '@mui/styles'
import { create } from 'jss'

const generateClassName = createGenerateClassName({
  productionPrefix: 'u',
  seed: 'Uni',
})

const jss = create({
  ...jssPreset(),
  // Define a custom insertion point that JSS will look for when injecting the styles into the DOM.
  insertionPoint: <head />,
})

export default function UNICEFStyleProvider(props) {
  return (
    // Inject Emotion before JSS
    <StyledEngineProvider
      injectFirst={true}
      generateClassName={generateClassName}
      // jss={jss}
    >
      {/* Your component tree. Now you can override Material UI's styles. */}
      {props.children}
    </StyledEngineProvider>
  )
}
