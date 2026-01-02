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

const PREFIX = 'URadioButtons'

const classes = {
  padding: `${PREFIX}-padding`,
  readOnlyPadding: `${PREFIX}-readOnlyPadding`,
  gutter: `${PREFIX}-gutter`,
}

const StyledBox = styled('div')(({ theme }) => ({
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

export interface URadioButtonsProps {
  /** value of the radio button */
  value?: string
  /**function to handle radio button change */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  /**read only boolean*/
  isReadOnly?: boolean
  /**radio button variant */
  variant?: 'row' | 'column'
  /**array of radio button labels */
  optionLabels?: string[]
  /**array of radio button values */
  optionValues?: string[]
}

export default function URadioButtons({
  value,
  onChange,
  isReadOnly,
  variant = 'row',
  optionLabels = [],
  optionValues = [],
}: URadioButtonsProps) {
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(event)
  }

  return (
    <StyledBox>
      {isReadOnly ? (
        <Typography className={classes.padding}>{value || '-'}</Typography>
      ) : (
        <FormControl required component="fieldset">
          <RadioGroup
            row={variant === 'row'}
            aria-label="position"
            name="value"
            value={value || ''}
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

