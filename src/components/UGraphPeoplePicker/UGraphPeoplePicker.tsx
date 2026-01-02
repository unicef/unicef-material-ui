// ApproversTypeListContainer
import React, { useState } from 'react'
import UPeoplePicker from '../UPeoplePicker'
import { UPeoplePickerProps } from '../UPeoplePicker'

export interface GraphUser {
  email?: string
  name?: string
  type?: string
  locationId?: string
  id?: string
  value?: string
  label?: string
}

export interface UGraphPeoplePickerProps
  extends Omit<UPeoplePickerProps, 'options' | 'onChange' | 'value' | 'onBlur'> {
  /** Id of the textfield */
  id?: number | string
  /** type the operation */
  type?: string
  /** onBlur event */
  onBlur?: (users: GraphUser[], type?: string) => void
  /** options of the people picker */
  option?: string
  /** description under the control */
  helpText?: string
  /** single or multiple user picker */
  isMultiple?: boolean
  /** trigger when user enters value */
  searchUsers?: (event: React.ChangeEvent<HTMLInputElement>) => Promise<{
    loading: boolean
    errorMessage: string | null
    graphData: GraphUser[]
  }>
  /** initial options */
  options?: GraphUser[]
}

const getOptions = (options?: GraphUser[]) =>
  options &&
  options.map(option => ({
    // we must need two properties value and label
    value: option.email, // value will be the main property to differentiate all options, it might be id, title or anything.
    label: option.name || '', // Required // label is the text to display in the chip and menu. Ex: title
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
  helpText = '',
  isMultiple = true,
  searchUsers,
  components,
  ...props
}: UGraphPeoplePickerProps) {
  const [graphData, setGraphData] = useState<GraphUser[]>([])
  const [selectedUsers, setSelectedUsers] = useState<GraphUser[]>(getOptions(options) || [])
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  // load users on value change
  const handleLoadUsers = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value !== '' && searchUsers) {
      setLoading(true)
      searchUsers(event).then(result => {
        setLoading(result.loading)
        setErrorMessage(result.errorMessage)
        setGraphData(result.graphData)
      })
    }
  }
  // onChange select users
  const selectUsers = (value: GraphUser | GraphUser[] | null) => {
    //for multiple users
    if (isMultiple && Array.isArray(value)) {
      const users = value.map(user => {
        const data: GraphUser = {
          value: user.email || user.value,
          label: user.label || user.name,
          name: user.label || user.name,
          subLabel: user.value,
        }
        return data
      })
      setSelectedUsers(users)
      // pass latest values to parent
      onBlur && onBlur(users, type)
    } else if (!isMultiple) {
      //for single user
      if (value && !Array.isArray(value)) {
        setSelectedUsers([value])
        // pass latest values to parent
        onBlur && onBlur([value], type)
      } else {
        // for no user
        setSelectedUsers([])
        // pass latest values to parent
        onBlur && onBlur([], type)
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
      components={components}
      {...props}
    />
  )
}


