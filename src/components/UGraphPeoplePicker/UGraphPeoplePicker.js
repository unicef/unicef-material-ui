// ApproversTypeListContainer
import React, { useState } from 'react'
import UPeoplePicker from '../UPeoplePicker'
import PropTypes from 'prop-types'

const getOptions = options =>
  options &&
  options.map(option => ({
    // we must need two properties value and label
    value: option.email, // value will be the main property to differentiate all options, it might be id, title or anything.
    label: option.name, // Required // label is the text to display in the chip and menu. Ex: title
    subLabel: option.type,
    name: option.name,
    email: option.email,
    type: option.type,
    locationId: option.locationId,
    id: option.id,
  }))

/**
 * UGraphPeoplePicker is a component to fetch the users from graph display it in the people picker
 */
export default function UGraphPeoplePicker({
  id,
  type,
  label,
  options,
  onBlur,
  helpText,
  isMultiple,
  searchUsers,
}) {
  const [graphData, setGraphData] = useState([])
  const [selectedUsers, setSelectedUsers] = useState(getOptions(options))
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null)
  // load users on value change
  const handleLoadUsers = event => {
    if (event.target.value !== '') {
      setLoading(true)
      searchUsers(event).then(result => {
        setLoading(result.loading)
        setErrorMessage(result.errorMessage)
        setGraphData(result.graphData)
      })
    }
  }
  // onChange select users
  const selectUsers = event => {
    //for multiple users
    if (event && event.length > 0) {
      const users = event.map(user => {
        const data = {
          value: user.email || user.value,
          label: user.label || user.name,
          name: user.label || user.name,
          subLabel: user.value,
        }
        return data
      })
      setSelectedUsers(users)
      // pass latest values to parent
      onBlur(users, type)
    } else {
      //for single user
      if (event) {
        setSelectedUsers([event])
        // pass latest values to parent
        onBlur([event], type)
      } else {
        // for no user
        setSelectedUsers([])
        // pass latest values to parent
        onBlur([], type)
      }
    }
  }

  return (
    <UPeoplePicker
      id={id}
      label={label}
      options={graphData}
      onChange={selectUsers}
      value={selectedUsers}
      fullWidth
      TextFieldProps={{
        helperText: helpText,
        onChange: event => handleLoadUsers(event),
      }}
      isLoading={loading}
      errorOptionsMessage={errorMessage}
      showNoOptionsWithEmptyTextField={false}
      variant="outlined"
      isMulti={isMultiple}
    />
  )
}

UGraphPeoplePicker.propTypes = {
  /** Id of the textfield */
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /** type the operation */
  type: PropTypes.string,
  /** label */
  label: PropTypes.string,
  /** onBlur event */
  onBlur: PropTypes.func,
  /** options of the people picker */
  option: PropTypes.string,
  /** description under the control */
  helpText: PropTypes.string,
  /** single or multiple user picker */
  isMultiple: PropTypes.bool,
  /** trigger when user enters value */
  searchUsers: PropTypes.func,
}

UGraphPeoplePicker.defaultProps = {
  helpText: '',
  isMultiple: true,
}
