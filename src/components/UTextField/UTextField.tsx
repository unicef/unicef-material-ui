/* eslint-disable */
import React, { Fragment } from 'react'
import { TextField, Typography, Box, MenuItem, TextFieldProps } from '@mui/material'
/* eslint-enable */
import ValidatorComponent from '../ValidatorComponent'
import { InputLabelHelp } from '../Shared'

// TODO - research how to use theme
const styles = {
  counter: {
    marginLeft: 16,
  },
  counterError: {
    color: '#f44336',
  },
  labelRoot: {
    pointerEvents: 'auto' as const,
    display: 'flex',
    alignItems: 'center',
  },
}

interface UTextFieldState {
  isValid?: boolean
  isSelectOpen?: boolean
}

export interface UTextFieldProps extends Omit<TextFieldProps, 'variant' | 'error' | 'helperText' | 'onBlur'> {
  /**
   * Array of validators.See list of default validators above.
   *
   * Ex: `validators={['required', 'isEmail']}`
   */
  validators?: string[]
  /**
   * customErrorMessages is an object with key as validator and value as customised error message.
   *
   * Ex: `customErrorMessages={{required: 'This field is required'}`
   */
  customErrorMessages?: Record<string, string> | string
  /** Name of input. */
  name?: string
  /** It triggers after each validation.It will return true or false. */
  validatorListener?: (isValid: boolean) => void
  /** Allow to use required validator in any validation trigger, not only form submit. */
  withRequiredValidator?: boolean
  /** To make textfield to be select. See below examples section for select example and sample code */
  select?: boolean
  /** Select options if the textfield is select */
  options?: Array<{ value: any; label: string }>
  /** To enable character counter */
  counter?: boolean
  /** Maximum length of characters */
  maxLength?: number
  /** To make textfield read only */
  readOnly?: boolean
  /** Show label help */
  showLabelHelp?: boolean
  /** Props applied to the input label help element. E.g InputLabelHelpProps={{type:'link', label:'Help', link:'unicef.github.io', icon, tooltipTitle: 'Tooltip title', tooltipPlacement: 'bottom}} */
  InputLabelHelpProps?: Record<string, any>
  /** Id of the field */
  id?: string
  /** If the field is select box and no options are passed, then this children will be used. */
  children?: React.ReactNode
  /** error */
  error?: boolean
  /** helperText */
  helperText?: string
  /** onBlur */
  onBlur?: (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  /** variant */
  variant?: 'outlined' | 'filled' | 'standard'
  /** slotProps */
  slotProps?: Record<string, any>
}

//Extending the ValidatorComponent using class component, so taking an exclusion from our rule: functional components only.

/**
 * UTextField is a Material-ui TextField component with form validation.
 * UTextField is a [ValidatorComponent](https://www.npmjs.com/package/react-form-validator-core) from `react-form-validator-core` and must be wrapped inside its parent component UValidatorForm.
 *
 * Default validation rules:
 * * matchRegexp
 * * isEmail
 * * isUrl
 * * isEmpty
 * * required
 * * trim
 * * isNumber
 * * isFloat
 * * isPositive
 * * minNumber
 * * maxNumber
 * * minFloat
 * * maxFloat
 * * minStringLength
 * * maxStringLength
 * * isString
 * * maxFileSize
 * * allowedExtensions
 * * isPhone
 * * isAlphanumeric
 * * isSafeText
 *
 * It accepts all the props of Material-ui [TextField](https://mui.com/material-ui/api/text-field/#textfield-api)
 */
class UTextField extends ValidatorComponent {
  constructor(props: UTextFieldProps) {
    super(props)
  }

  handleBlur = (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { isValid } = this.state
    const { error } = this.props
    if (!isValid || error) {
      return
    } else {
      this.props.onBlur && this.props.onBlur(event)
    }
  }

  handleSelectOpen = () => {
    this.setState({
      isSelectOpen: true,
    })
  }

  handleSelectClose = () => {
    this.setState({
      isSelectOpen: false,
    })
  }

  renderValidatorComponent() {
    /* eslint-disable no-unused-vars */
    const {
      variant = 'outlined',
      error,
      customErrorMessages,
      validators,
      requiredError,
      helperText,
      validatorListener = () => {},
      withRequiredValidator = true,
      onBlur,
      maxLength,
      counter,
      counterClassName,
      readOnly = false,
      label,
      slotProps = {},
      showLabelHelp = false,
      InputLabelHelpProps = {},
      select = false,
      id,
      options,
      children,
      ...rest
    } = this.props
    const { isValid, isSelectOpen } = this.state
    const length = this.props.value ? String(this.props.value).length : 0
    const counterError = maxLength && maxLength < length

    return (
      <Fragment>
        <TextField
          variant={variant}
          {...rest}
          select={select}
          error={!isValid || error}
          onBlur={event => this.handleBlur(event)}
          helperText={(!isValid && this.getErrorMessage()) || helperText}
          slotProps={{
            ...slotProps,
            input: {
              ...(slotProps?.input ? slotProps.input : {}),
              readOnly,
            },
            inputLabel: {
              ...(slotProps?.inputLabel ? slotProps?.inputLabel : {}),
              style: { ...styles.labelRoot },
            },
            htmlInput: {
              ...(slotProps?.htmlInput ? slotProps.htmlInput : {}),
              ...(select ? { 'aria-describedby': null } : {}),
            },
            /** Accessibility fixes for select field */
            ...(select
              ? {
                  ...(slotProps?.select ? slotProps?.select : {}),
                  open: isSelectOpen ? true : false,
                  onClose: this.handleSelectClose,
                  onOpen: this.handleSelectOpen,
                  MenuProps: {
                    slotProps: {
                      list: {
                        id: `${id}-select-menu`,
                        'aria-labelledby': null,
                      },
                    },
                  },
                  SelectDisplayProps: {
                    role: 'combobox',
                    'aria-controls': `${id}-select-menu`,
                    'aria-expanded': isSelectOpen ? true : false,
                    'aria-describedby': `${id}-helper-text`,
                  },
                }
              : {}),
          }}
          label={
            showLabelHelp ? (
              <InputLabelHelp inputLabel={label} {...InputLabelHelpProps} />
            ) : (
              label
            )
          }
          id={id}
        >
          {select
            ? options && options.length
              ? options.map((option: { value: any; label: string }) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))
              : children
            : ''}
        </TextField>
        {counter && (
          <Box display="block">
            <Typography
              sx={{
                ...styles.counter,
                ...(counterError && styles.counterError),
              }}
              variant="caption"
              color="textSecondary"
            >
              {maxLength ? `${length}/${maxLength}` : length} characters
            </Typography>
          </Box>
        )}
      </Fragment>
    )
  }
}

export default UTextField

