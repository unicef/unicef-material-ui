import React from 'react'
import PropTypes from 'prop-types'

export default function InputComponent({ inputRef, ...props }) {
  return <div ref={inputRef} {...props} />
}

InputComponent.propTypes = {
  inputRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({
      current: PropTypes.any.isRequired,
    }),
  ]),
}
