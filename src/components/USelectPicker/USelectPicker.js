import React from 'react'
import PropTypes from 'prop-types'
import CircularProgress from '@mui/material/CircularProgress'
import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { Avatar, Chip } from '@mui/material'
import { InputLabelHelp } from '../Shared'
import { inputLabelClasses } from '@mui/material/InputLabel'
import { outlinedInputClasses } from '@mui/material/OutlinedInput'
import { autocompleteClasses } from '@mui/material/Autocomplete'

/**
 * USelectPicker is a control for selecting an option from a list. Has the features below:
 *
 * * Select a single option from a list.
 * * Select multiple options from a list.
 * * Autocomplete.
 * * Clear current selection.
 */
export default function USelectPicker({
  label,
  options,
  getOptionLabel,
  isOptionEqualToValue,
  hideAvatar = true,
  multiple,
  loading,
  error,
  errorLoadingOptions,
  noOptionsText,
  helperText,
  placeholder,
  readOnly,
  showLabelHelp,
  InputLabelHelpProps,
  sx,
  variant,
  textFieldProps,
  ...rest
}) {
  const _placeholder = readOnly ? '' : placeholder

  const defaultRenderOption = (optionProps, option) => {
    return (
      <Box
        {...optionProps}
        key={option.value}
        component="div"
        sx={{
          display: 'flex',
          alignItems: 'center',
          px: 2,
          py: 1,
          cursor: 'pointer',
        }}
      >
        <React.Fragment>
          {hideAvatar ? (
            ''
          ) : option.avatar ? (
            option.avatar
          ) : (
            <Avatar width="32" height="32" />
          )}
          <Box
            sx={{
              fontSize: 14,
              pl: 1,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Typography variant="subtitle2">{option.label}</Typography>
            <Box
              sx={{
                fontSize: 12,
              }}
            >
              {option.subLabel}
            </Box>
          </Box>
        </React.Fragment>
      </Box>
    )
  }

  return (
    <Autocomplete
      multiple={multiple}
      readOnly={readOnly}
      disableCloseOnSelect={multiple}
      disableClearable={readOnly}
      loading={loading}
      options={options || []}
      getOptionLabel={getOptionLabel || (option => option?.label ?? '')}
      isOptionEqualToValue={
        isOptionEqualToValue || ((option, val) => option?.value === val?.value)
      }
      noOptionsText={
        errorLoadingOptions ? (
          <Box sx={{ color: 'error.main' }}>{errorLoadingOptions}</Box>
        ) : (
          noOptionsText
        )
      }
      renderOption={rest.renderOption || defaultRenderOption}
      renderValue={(value, getItemProps) => {
        if (multiple) {
          return value.map((option, index) => {
            const { key, ...itemProps } = getItemProps({ index })
            return (
              <Chip
                variant="outlined"
                avatar={
                  !hideAvatar ? (
                    option?.avatar ? (
                      option.avatar
                    ) : (
                      <Avatar />
                    )
                  ) : undefined
                }
                label={option.label}
                key={key}
                {...itemProps}
              />
            )
          })
        } else {
          return (
            <Box
              sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
              {...getItemProps()}
            >
              {!hideAvatar ? (
                value?.avatar ? (
                  value.avatar
                ) : (
                  <Avatar sizes="16px" />
                )
              ) : null}
              {value?.label || ''}
            </Box>
          )
        }
      }}
      renderInput={params => (
        <TextField
          {...params}
          _placeholder={_placeholder}
          error={error}
          label={
            showLabelHelp ? (
              <InputLabelHelp inputLabel={label} {...InputLabelHelpProps} />
            ) : (
              label
            )
          }
          helperText={helperText}
          variant={variant}
          {...textFieldProps}
          slotProps={{
            ...params.slotProps,
            ...(textFieldProps?.slotProps || {}),
            input: {
              ...(textFieldProps?.slotProps?.input || {}),
              ...params.slotProps.input,
              endAdornment: (
                <React.Fragment>
                  {loading ? (
                    <CircularProgress
                      sx={{ color: 'text.secondary' }}
                      size={20}
                    />
                  ) : null}
                  {params.slotProps.input.endAdornment}
                </React.Fragment>
              ),
            },
          }}
        />
      )}
      sx={{
        ...(sx ? sx : {}),
        ...(showLabelHelp
          ? {
              [`& .${inputLabelClasses.root}`]: {
                pointerEvents: 'auto',
                display: 'flex',
                alignItems: 'center',
              },
            }
          : {}),
        ...(readOnly
          ? {
              [`& .${outlinedInputClasses.root}`]: {
                '& fieldset': {
                  borderColor: 'transparent',
                },
                '&:hover fieldset': {
                  borderColor: 'transparent',
                },
                '&.Mui-focused fieldset': {
                  borderColor: 'transparent',
                },
              },
              [`& .${autocompleteClasses.endAdornment}`]: {
                display: 'none',
              },
            }
          : {}),
      }}
      {...rest}
    />
  )
}

USelectPicker.propTypes = {
  /** Text to display when nothing is selected. */
  placeholder: PropTypes.string,
  /** Enables the multiple select. Default is false. */
  multiple: PropTypes.bool,
  /** Label of the picker. */
  label: PropTypes.string,
  /** Variant of TextField to use. Default is outlined.*/
  variant: PropTypes.oneOf(['outlined', 'standard', 'filled']),
  /** Callback fired when the value is changed: (event, value, reason, details) => void */
  onChange: PropTypes.func,
  /** Currently selected value (single option object, or array of option objects when multiple) */
  value: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  /** Array of options to display in the dropdown.
   * Each option is an object with the following attributes:
   *
   * ```
   * {
   * value: 3,
   * label: 'Kundal Singh Mehra', //First line, typically the name
   * subLabel: 'Back-end Developer', // Second line, typically position or email
   * avatar: (  //Avatar element to display.
   *   <Avatar
   *     src={'http://...'}
   *   />
   *  ),
   *   }
   *```
   */
  options: PropTypes.array,
  /** Shows a loading spinner and uses loadingText while options are loading */
  loading: PropTypes.bool,
  /** Display error state */
  error: PropTypes.bool,
  /** Error message to display in the no options text */
  errorLoadingOptions: PropTypes.string,
  /** Helper text to display below the input */
  helperText: PropTypes.string,
  /** Custom renderOption override, passed through to MUI Autocomplete */
  renderOption: PropTypes.func,
  /** Custom renderTags override, passed through to MUI Autocomplete */
  renderTags: PropTypes.func,
  /** Custom getOptionLabel override, passed through to MUI Autocomplete */
  getOptionLabel: PropTypes.func,
  /** Custom isOptionEqualToValue override, passed through to MUI Autocomplete */
  isOptionEqualToValue: PropTypes.func,
  /** Show label help */
  showLabelHelp: PropTypes.bool,
  /** Props applied to the input label help element. E.g. InputLabelHelpProps={{type:'link', label:'Help', link:'unicef.github.io', icon, tooltipTitle: 'Tooltip title', tooltipPlacement: 'bottom'}} */
  InputLabelHelpProps: PropTypes.object,
  /** Hide people avatar */
  hideAvatar: PropTypes.bool,
  /** Is the read only field or not */
  readOnly: PropTypes.bool,
  /** No options text */
  noOptionsText: PropTypes.string,
  /** Loading text */
  loadingText: PropTypes.string,
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object,
  ]),
  /** Props applied to the TextField component. */
  textFieldProps: PropTypes.object,
}
