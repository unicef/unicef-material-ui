import React from 'react'
import { styled } from '@mui/material/styles'
import {
  Box,
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  Typography,
} from '@mui/material'
import PropTypes from 'prop-types'
const PREFIX = 'URadioButtons'

const classes = {
  padding: `${PREFIX}-padding`,
  readOnlyPadding: `${PREFIX}-readOnlyPadding`,
  gutter: `${PREFIX}-gutter`,
}

const StyledBox = styled(Box)(({ theme }) => ({
  [`& .${classes.padding}`]: {
    paddingLeft: theme.spacing(3),
  },

  [`& .${classes.readOnlyPadding}`]: {
    paddingBottom: theme.spacing(1),
  },

  [`& .${classes.gutter}`]: {
    marginLeft: theme.spacing(2),
  },
}))

export default function URadioButtons({
  value,
  onChange,
  isReadOnly,
  variant = 'row',
  optionLabels,
  optionValues,
}) {
  const handleOnChange = event => {
    onChange && onChange(event)
  }

  return (
    <StyledBox>
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
                control={<Radio className={classes.gutter} />}
                label={optionLabels[index]}
              />
            ))}
          </RadioGroup>
        </FormControl>
      )}
    </StyledBox>
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
