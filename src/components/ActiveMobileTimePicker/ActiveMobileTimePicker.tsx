import React from 'react'
import { styled } from '@mui/material/styles'
import { Box } from '@mui/material'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { MobileTimePicker, MobileTimePickerProps } from '@mui/x-date-pickers/MobileTimePicker'
import { outlinedInputClasses } from '@mui/material/OutlinedInput'
import { pickersOutlinedInputClasses } from '@mui/x-date-pickers/PickersTextField'
import { inputAdornmentClasses } from '@mui/material/InputAdornment'
import { SxProps, Theme } from '@mui/material/styles'
import UTextField from '../UTextField'
import { ActiveTimePickerProps } from '../ActiveTimePicker'

const PREFIX = 'ActiveMobileTimePicker'

const classes = {
  root: `${PREFIX}-root`,
}

const StyledBox = styled(Box, {
  shouldForwardProp: prop => prop !== 'readOnly' && prop !== 'interactiveMode',
})<{ readOnly?: boolean; interactiveMode?: boolean }>(({ theme, readOnly, interactiveMode }) => ({
  [`& .${classes.root}`]: {
    ...(readOnly
      ? {
          [`& .${outlinedInputClasses.notchedOutline}`]: {
            borderColor: 'transparent',
          },
          [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
            borderColor: 'transparent',
          },
          [`& .${outlinedInputClasses.focused} .${outlinedInputClasses.notchedOutline}`]:
            {
              borderColor: 'transparent',
            },
        }
      : {}),
    ...(!readOnly && !interactiveMode
      ? {}
      : {
          [`& .${outlinedInputClasses.notchedOutline}`]: {
            borderColor: 'transparent',
          },
        }),
  },
}))

export interface ActiveMobileTimePickerProps
  extends Omit<MobileTimePickerProps<Date>, 'value' | 'onChange' | 'sx' | 'renderInput'>,
    Pick<ActiveTimePickerProps, 'inputFormat' | 'inputVariant' | 'showLabelHelp' | 'InputLabelHelpProps' | 'slotProps' | 'interactiveMode' | 'readOnly' | 'sx'> {
  /** Callback function when change the picker field */
  onChange: (value: Date | null) => void
  /** Value of the picker field */
  value?: Date | string | null
}

/**
 * ActiveMobileTimePicker is a customized material ui mobile time picker.
 * This component let's you access the clock to select the time.
 * Please have look at [Material UI Mobile Time Picker](https://mui.com/x/api/date-pickers/mobile-time-picker/) for more details
 */
export default function ActiveMobileTimePicker({
  inputFormat = 'hh:mm a',
  label,
  onChange,
  value,
  showLabelHelp,
  slotProps = {
    inputLabel: { shrink: true },
  },
  InputLabelHelpProps,
  inputVariant = 'outlined',
  interactiveMode,
  readOnly,
  sx,
  ...others
}: ActiveMobileTimePickerProps) {
  const timeValue = value instanceof Date ? value : value ? new Date(value) : null

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <StyledBox readOnly={readOnly} interactiveMode={interactiveMode}>
        <MobileTimePicker<Date>
          className={classes.root}
          label={label}
          inputFormat={inputFormat}
          onChange={onChange}
          value={timeValue}
          readOnly={readOnly}
          sx={(theme: Theme) => ({
            ...(sx ? (typeof sx === 'function' ? sx(theme) : sx) : {}),
            ...(readOnly && {
              [`& .${pickersOutlinedInputClasses.notchedOutline},&:hover .${pickersOutlinedInputClasses.notchedOutline},&.Mui-focused .${pickersOutlinedInputClasses.notchedOutline}`]:
                {
                  borderColor: 'transparent !important',
                },
              [`& .${inputAdornmentClasses.root}`]: {
                display: 'none !important',
              },
            }),
            ...(interactiveMode &&
              !readOnly && {
                [`& .${pickersOutlinedInputClasses.notchedOutline}`]: {
                  borderColor: 'transparent',
                },
                [`& .${pickersOutlinedInputClasses.root} .${inputAdornmentClasses.root}`]:
                  {
                    display: 'none',
                  },
                [`&:hover .${pickersOutlinedInputClasses.notchedOutline}`]: {
                  borderColor: theme.palette.divider,
                },
                [`&:hover .${inputAdornmentClasses.root},&.Mui-focused .${inputAdornmentClasses.root}`]:
                  {
                    display: 'flex',
                  },
              }),
          })}
          {...others}
          renderInput={params => (
            <UTextField
              showLabelHelp={showLabelHelp}
              slotProps={slotProps}
              InputLabelHelpProps={InputLabelHelpProps}
              variant={inputVariant}
              readOnly={readOnly}
              {...params}
            />
          )}
        />
      </StyledBox>
    </LocalizationProvider>
  )
}

