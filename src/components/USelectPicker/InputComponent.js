import React from 'react'
import PropTypes from 'prop-types'

export default function InputComponent({ inputRef, ...props }) {
  return (
    <div
      ref={inputRef}
      {...props}
      required={undefined} // Remove required from div element
      aria-invalid={undefined} // Remove aria-invalid from div element
    />
  )
}

InputComponent.propTypes = {
  inputRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({
      current: PropTypes.any.isRequired,
    }),
  ]),
}
