import React from 'react'
import { StylesProvider, createGenerateClassName } from '@mui/styles'

const generateClassName = createGenerateClassName({
  productionPrefix: 'u',
  seed: 'Uni',
})

export default function UNICEFStyleProvider(props) {
  return (
    <StylesProvider injectFirst={true} generateClassName={generateClassName}>
      {props.children}
    </StylesProvider>
  )
}
