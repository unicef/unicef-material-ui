import React, { useState } from 'react'
import Select, { StylesConfig, Props as SelectProps } from 'react-select'
import { useTheme, styled, Theme } from '@mui/material/styles'
import { Box } from '@mui/material'
import CancelIcon from '@mui/icons-material/Cancel'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import { TextFieldProps } from '@mui/material/TextField'

import MultiValue from './MultiValue'
import SingleValue from './SingleValue'
import Menu from './Menu'
import Control from './Control'
import NoOptionsMessage from './NoOptionsMessage'
import ValueContainer from './ValueContainer'
import Option, { SelectOption } from './Option'
import Input from './Input'
import { InputLabelHelpProps } from '../Shared'

const PREFIX = 'USelectPicker'

const classes = {
  input: `${PREFIX}-input`,
  valueContainer: `${PREFIX}-valueContainer`,
  OptionsMessage: `${PREFIX}-OptionsMessage`,
  placeholder: `${PREFIX}-placeholder`,
  paper: `${PREFIX}-paper`,
  divider: `${PREFIX}-divider`,
  labelRoot: `${PREFIX}-labelRoot`,
  inputHover: `${PREFIX}-inputHover`,
  notchedOutline: `${PREFIX}-notchedOutline`,
}

const StyledBox = styled(Box, {
  shouldForwardProp: prop => prop !== 'hasHelpText',
})<{ hasHelpText?: boolean }>(({ theme, hasHelpText }) => ({
  [`& .${classes.input}`]: {
    display: 'flex',
    padding: '10px 14px',
    height: 'auto',
  },
  [`& .${classes.valueContainer}`]: {
    display: 'flex',
    flexWrap: 'wrap',
    flex: 1,
    alignItems: 'center',
    overflow: 'hidden',
  },
  [`& .${classes.OptionsMessage}`]: {
    padding: theme.spacing(1, 2),
  },
  [`& .${classes.paper}`]: {
    minWidth: '100%',
  },
  [`& .${classes.divider}`]: {
    height: theme.spacing(2),
  },
  [`& .${classes.labelRoot}`]: {
    pointerEvents: 'auto',
    display: 'flex',
    alignItems: 'center',
  },
  [`& .${classes.inputHover}`]: {
    '&:hover $notchedOutline': {
      borderColor: 'transparent',
    },
  },
  [`& .${classes.notchedOutline}`]: {
    borderRadius: 2,
    borderColor: 'transparent',
  },
}))

const defaultComponents = (theme: Theme) => ({
  Control,
  Menu,
  MultiValue,
  NoOptionsMessage,
  IndicatorSeparator: () => null,
  Option,
  SingleValue,
  ValueContainer,
  Input,
  DropdownIndicator: (props: { isDisabled?: boolean }) => (
    <ArrowDropDownIcon
      sx={{
        color: props.isDisabled
          ? theme.palette.action.disabled
          : theme.palette.text.secondary,
      }}
    />
  ),
  MultiValueRemove: (removeProps: any) => <CancelIcon {...removeProps} />,
})

const ICON_VARIANTS = {
  dark: 'dark',
  light: 'light',
} as const

export type IconVariant = typeof ICON_VARIANTS[keyof typeof ICON_VARIANTS]

export interface USelectPickerProps
  extends Omit<
    SelectProps<SelectOption, boolean>,
    'components' | 'styles' | 'onInputChange' | 'noOptionsMessage' | 'onChange'
  > {
  /** Text to display when nothing is selected. */
  placeholder?: string
  /** Enables the multiple select. Default is false. */
  isMulti?: boolean
  /** Label of the picker. */
  label?: string
  /** Variant of TextField to use. Default is outlined.*/
  variant?: 'outlined' | 'standard' | 'filled'
  /** Id to assign to the input element */
  inputId?: string
  /** Callback fired when the value is changed. */
  onChange?: (
    newValue: SelectOption | SelectOption[] | null,
    actionMeta?: { action: string; option?: SelectOption }
  ) => void
  /** Array of to display select on the dropdown. */
  options?: SelectOption[]
  /** Props passed to the TextField used in the picker. Use any value of Material UI TextField API. */
  TextFieldProps?: Partial<TextFieldProps> & {
    showLabelHelp?: boolean
    InputLabelHelpProps?: InputLabelHelpProps
    lineByLineOption?: boolean | string
    hideAvatar?: boolean
    readOnly?: boolean
    [key: string]: any
  }
  /**
   * To show or hide the no options message on empty texfield value
   */
  showNoOptionsWithEmptyTextField?: boolean
  /**
   *  To display error message on loading options
   */
  errorLoadingOptions?: string
  /** To customize the components of select */
  components?: Record<string, any>
  /** Show label help */
  showLabelHelp?: boolean
  /** Props applied to the input label help element. */
  InputLabelHelpProps?: InputLabelHelpProps
  /** Hide people avatar */
  hideAvatar?: boolean
  /** Is the read only field or not */
  readOnly?: boolean
  /** Whether the selected options displayed in the new line or not in multiple selected options */
  lineByLineOption?: boolean
  /** Is the select value clearable */
  isClearable?: boolean
  /** Whether to enable search functionality */
  isSearchable?: boolean
  /** Whether the input is disabled */
  isDisabled?: boolean
  /** Whether the menu is open */
  menuIsOpen?: boolean
  /** Down arrow variant */
  iconVariant?: IconVariant
  /** No options text */
  noOptionsText?: string
  /** Loading text */
  loadingText?: string
  /** Callback fired when input value changes */
  onInputChange?: (value: string) => void
}

/**
 * USelectPicker is a control for selecting a option from a list. Has the features below:
 *
 * * Select a single option from a list.
 * * Select multiple option from a list.
 * * Autocomplete.
 * * Clear current selection.
 *
 */

export default function USelectPicker(props: USelectPickerProps) {
  const theme = useTheme()
  const {
    label,
    variant = 'outlined',
    TextFieldProps = {},
    showNoOptionsWithEmptyTextField = true,
    onInputChange,
    components,
    showLabelHelp = false,
    InputLabelHelpProps = {},
    hideAvatar = true,
    readOnly = false,
    lineByLineOption = false,
    isClearable = undefined,
    isSearchable = true,
    isDisabled = false,
    menuIsOpen = undefined,
    placeholder = 'Select...',
    iconVariant = ICON_VARIANTS.light,
    isMulti = false,
    noOptionsText = 'No options',
    loadingText = 'Loading...',
    ...others
  } = props

  const [isTextFieldEmpty, setIsTextFieldEmpty] = useState(true)

  const selectStyles: StylesConfig<SelectOption, boolean> = {
    input: base => ({
      ...base,
      height: iconVariant === ICON_VARIANTS.dark ? theme.spacing(4) : 'inherit', // if dark variant, then match height with material ui controls
      color: theme.palette.text.primary,
      '& input': {
        font: 'inherit',
      },
    }),
    menuPortal: base => ({ ...base, zIndex: 9999 }),
    menu: base => ({
      ...base,
      zIndex: 9999,
    }),
    menuList: base => ({
      ...base,
      padding: theme.spacing(0.5, 0),
      maxHeight: '300px',
      overflowY: 'auto',
    }),
    placeholder: base => ({
      ...base,
      position: 'absolute',
      left: theme.spacing(2),
    }),
  }

  const defaultTextFieldProps = {
    label: label,
    variant: variant,
    slotProps: {
      ...(TextFieldProps?.slotProps ? TextFieldProps.slotProps : {}),
      inputLabel: {
        shrink: true,
        classes: { root: classes.labelRoot },
        ...(TextFieldProps.slotProps?.inputLabel
          ? TextFieldProps.slotProps.inputLabel
          : {}),
      },
    },
    readOnly,
    lineByLineOption,
    hideAvatar,
    showLabelHelp,
    InputLabelHelpProps,
  }
  // To show or hide the no options menu
  const showNoOptions = showNoOptionsWithEmptyTextField || !isTextFieldEmpty

  const mergedTextFieldProps = { ...defaultTextFieldProps, ...TextFieldProps }
  // handle the input change
  const handleInputChange = (value: string) => {
    setIsTextFieldEmpty(value === '')
    onInputChange && onInputChange(value)
  }

  const extraComponents: Record<string, any> = {}
  if (iconVariant === ICON_VARIANTS.dark)
    extraComponents.DropdownIndicator = (props: { isDisabled?: boolean }) => (
      <ArrowDropDownIcon
        sx={{
          color: props.isDisabled
            ? theme.palette.action.disabled
            : theme.palette.text.secondary,
        }}
      />
    )
  if (readOnly) extraComponents.DropdownIndicator = () => null

  const selectPlaceholder = readOnly ? '' : placeholder

  return (
    <StyledBox
      hasHelpText={
        props.TextFieldProps && props.TextFieldProps.helperText ? true : false
      }
    >
      <Select<SelectOption, boolean>
        classes={classes}
        styles={selectStyles}
        components={{
          ...defaultComponents(theme),
          ...components,
          ...extraComponents,
        } as any}
        menuPosition="fixed"
        TextFieldProps={mergedTextFieldProps}
        onInputChange={value => handleInputChange(value)}
        noOptionsMessage={showNoOptions ? (obj: { inputValue: string }) => <NoOptionsMessage innerProps={{}} selectProps={{ noOptionsText: noOptionsText || 'No options' }} /> : undefined}
        isClearable={readOnly ? false : isClearable}
        isSearchable={readOnly ? false : isSearchable}
        isDisabled={readOnly ? true : isDisabled}
        menuIsOpen={readOnly ? false : menuIsOpen}
        placeholder={selectPlaceholder}
        isMulti={isMulti}
        noOptionsText={noOptionsText}
        loadingText={loadingText}
        {...others}
      />
    </StyledBox>
  )
}

