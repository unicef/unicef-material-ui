import PropTypes from 'prop-types'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles(theme => ({
  rootReadOnly: {},
  lineByLineOption: {
    flexDirection: 'column!important',
    alignItems: 'flex-start!important',
  },
}))

export default function ValueContainer({ isMulti, selectProps, children }) {
  const classes = useStyles()

  const lineByLineOption =
    selectProps &&
    selectProps.TextFieldProps &&
    selectProps.TextFieldProps.lineByLineOption

  const readOnly =
    selectProps &&
    selectProps.TextFieldProps &&
    selectProps.TextFieldProps.readOnly

  return (
    <div
      className={`${
        lineByLineOption && isMulti ? classes.lineByLineOption : ''
      } ${readOnly ? classes.rootReadOnly : ''} ${
        selectProps.classes.valueContainer
      }`}
    >
      {children}
    </div>
  )
}

ValueContainer.propTypes = {
  /**
   * The children to be rendered.
   */
  children: PropTypes.node,
  selectProps: PropTypes.object.isRequired,
}
