/* eslint-disable */
import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { TextField, Typography, Box, MenuItem } from '@mui/material'
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
    pointerEvents: 'auto',
    display: 'flex',
    alignItems: 'center',
  },
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
  constructor(props) {
    super(props)
  }

  handleBlur = event => {
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
      variant,
      error,
      customErrorMessages,
      validators,
      requiredError,
      helperText,
      validatorListener,
      withRequiredValidator,
      onBlur,
      maxLength,
      counter,
      counterClassName,
      readOnly,
      label,
      InputProps,
      InputLabelProps,
      showLabelHelp,
      InputLabelHelpProps,
      select,
      id,
      SelectProps,
      options,
      children,
      ...rest
    } = this.props
    const { isValid, isSelectOpen } = this.state
    const length = this.props.value ? this.props.value.length : 0
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
          InputProps={{
            readOnly: readOnly,
            ...InputProps,
          }}
          InputLabelProps={{
            ...InputLabelProps,
            style: { ...styles.labelRoot },
          }}
          label={
            showLabelHelp ? (
              <InputLabelHelp inputLabel={label} {...InputLabelHelpProps} />
            ) : (
              label
            )
          }
          id={id}
          /** Accessibility fixes for select field */
          {...(select
            ? {
                inputProps: {
                  ...(this.props.inputProps ? this.props.inputProps : {}),
                  'aria-describedby': null,
                },
                SelectProps: {
                  ...(SelectProps ? SelectProps : {}),
                  open: isSelectOpen ? true : false,
                  onClose: this.handleSelectClose,
                  onOpen: this.handleSelectOpen,
                  MenuProps: {
                    MenuListProps: {
                      id: `${id}-select-menu`,
                      'aria-labelledby': null,
                    },
                  },
                  SelectDisplayProps: {
                    role: 'combobox',
                    'aria-controls': `${id}-select-menu`,
                    'aria-expanded': isSelectOpen ? true : false,
                    'aria-describedby': `${id}-helper-text`,
                  },
                },
              }
            : {})}
        >
          {select
            ? options && options.length
              ? options.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))
              : children
            : ''}
        </TextField>
        {counter && (
          <Box
            sx={{
              display: 'block',
            }}
          >
            <Typography
              style={{
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

UTextField.propTypes = {
  /**
   * Array of validators.See list of default validators above.
   *
   * Ex: `validators={['required', 'isEmail']}`
   */
  validators: PropTypes.array,
  /**
   * customErrorMessages is an object with key as validator and value as customised error message.
   *
   * Ex: `customErrorMessages={{required: 'This field is required'}`
   */
  customErrorMessages: PropTypes.object,
  /** Name of input. */
  name: PropTypes.string,
  /** It triggers after each validation.It will return true or false. */
  validatorListener: PropTypes.func,
  /** Allow to use required validator in any validation trigger, not only form submit. */
  withRequiredValidator: PropTypes.bool,
  /** To make textfield to be select. See below examples section for select example and sample code */
  select: PropTypes.bool,
  /** Select options if the textfield is select */
  options: PropTypes.shape({
    value: PropTypes.any,
    label: PropTypes.string,
  }),
  /** To enable character counter */
  counter: PropTypes.bool,
  /** Maximum length of characters */
  maxLength: PropTypes.number,
  /** To make textfield read only */
  readOnly: PropTypes.bool,
  /** Props applied to the Input element. */
  InputProps: PropTypes.object,
  /** Show label help */
  showLabelHelp: PropTypes.bool,
  /** Props applied to the input label help element. E.g InputLabelHelpProps={{type:'link', label:'Help', link:'unicef.github.io', icon, tooltipTitle: 'Tooltip title', tooltipPlacement: 'bottom}} */
  InputLabelHelpProps: PropTypes.object,
  /** Id of the field */
  id: PropTypes.string,
  /** Props applied to the Select element. */
  SelectProps: PropTypes.object,
  /** If the field is select box and no options are passed, then this children will be used. */
  children: PropTypes.node,
}

UTextField.defaultProps = {
  variant: 'outlined',
  readOnly: false,
  validatorListener: () => {},
  withRequiredValidator: true,
  showLabelHelp: false,
  InputLabelHelpProps: {},
  select: false,
  SelectProps: {},
}

export default UTextField
