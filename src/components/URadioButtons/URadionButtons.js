import {
  Box,
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  Typography,
} from'@mui/material'
import { makeStyles } from '@mui/styles'
import PropTypes from 'prop-types'
/**
 * displays radio buttons
 */
const useStyles = makeStyles(theme => ({
  padding: {
    paddingLeft: theme.spacing(3),
  },
  readOnlyPadding: {
    paddingBottom: theme.spacing(1),
  },
  gutter: {
    marginLeft: theme.spacing(2),
  },
}))
export default function URadioButtons({
  value,
  onChange,
  isReadOnly,
  variant,
  optionLabels,
  optionValues,
}) {
  const classes = useStyles()
  const handleOnChange = event => {
    onChange && onChange(event)
  }

  return (
    <Box>
      {isReadOnly ? (
        <Typography className={classes.padding}>{value || '-'}</Typography>
      ) : (
        <FormControl required component="fieldset">
          <RadioGroup
            row={variant === 'row' ? true : false}
            aria-label="position"
            name="value"
            value={value || false}
            onChange={handleOnChange}
          >
            {optionValues.map((optionValue, index) => (
              <FormControlLabel
                key={index}
                value={optionValue}
                control={<Radio color="secondary" className={classes.gutter} />}
                label={optionLabels[index]}
              />
            ))}
          </RadioGroup>
        </FormControl>
      )}
    </Box>
  )
}

URadioButtons.propTypes = {
  /** value of the radio button */
  value: PropTypes.string,
  /**function to handle radio button change */
  onChange: PropTypes.func,
  /**read only boolean*/
  isReadOnly: PropTypes.bool,
  /**radio button variant */
  variant: PropTypes.oneOf(['row', 'column']),
  /**array of radio button labels */
  optionLabels: PropTypes.array,
  /**array of radio button values */
  optionValues: PropTypes.array,
}

URadioButtons.defaultProps = {
  variant: 'row',
}
