import React from "react"
import PropTypes from "prop-types"

/** UMainMenuLink */
export default function UMainMenuLink(props) {
  const { label, href, disabled } = props

  UMainMenuLink.propTypes = {
    /** Label to be displyed on tab */
    label: PropTypes.string.isRequired,
    /** Link for tab */
    href: PropTypes.string,
    /** To make tab to be disabled */
    disabled: PropTypes.bool,
  }

  UMainMenuLink.defaultProps = {
    href: null,
    disabled: false,
  }

  return
}
