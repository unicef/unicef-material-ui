import React from 'react'
import UNICEFStyleProvider from './src/components/UNICEFStyleProvider'

export default function StyleguideWrapper({ children }) {
  return <UNICEFStyleProvider>{children}</UNICEFStyleProvider>
}
