import React from 'react'
import PropTypes from 'prop-types'
import UNICEFStyleProvider from './src/components/UNICEFStyleProvider'

export default function StyleguideWrapper({ children }) {
  return <UNICEFStyleProvider>{children}</UNICEFStyleProvider>
}

StyleguideWrapper.propTypes = {
  /** The content to be wrapped */
  children: PropTypes.node,
}
