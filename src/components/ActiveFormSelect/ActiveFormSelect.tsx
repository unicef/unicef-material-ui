import React from 'react'
import { styled } from '@mui/material/styles'
import { Box } from '@mui/material'
import { outlinedInputClasses } from '@mui/material/OutlinedInput'
import UTextField from '../UTextField'
import { ActiveFormTextFieldProps } from '../ActiveFormTextField'

const PREFIX = 'ActiveFormSelect'

const classes = {
  textField: `${PREFIX}-textField`,
  icon: `${PREFIX}-icon`,
  showIcon: `${PREFIX}-showIcon`,
  notchedOutline: `${PREFIX}-notchedOutline`,
  inputPadding: `${PREFIX}-inputPadding`,
  input: `${PREFIX}-input`,
  inputHover: `${PREFIX}-inputHover`,
}

const StyledBox = styled(Box, {
  shouldForwardProp: prop => prop !== 'typographyVariant',
})<{ typographyVariant?: string }>(({ theme, typographyVariant }) => ({
  [`& .${classes.textField}`]: {
    marginTop: theme.spacing(0.25),
    marginBottom: theme.spacing(0.25),
  },

  [`& .${classes.icon}`]: {
    display: 'none',
  },

  [`& .${classes.showIcon}`]: {
    display: 'block',
  },

  [`& .${classes.notchedOutline}`]: {
    borderRadius: 2,
    borderColor: 'transparent',
  },

  [`& .${classes.inputPadding}`]: {
    padding: '9.5px 14px',
    [`&.${outlinedInputClasses.disabled}`]: {
      color: theme.palette.text.primary,
      '-webkit-text-fill-color': theme.palette.text.primary,
    },
  },

  [`& .${classes.input}`]: {
    ...(typographyVariant && theme.typography[typographyVariant as keyof typeof theme.typography]
      ? theme.typography[typographyVariant as keyof typeof theme.typography]
      : {}),
  },

  [`& .${classes.inputHover}`]: {
    [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
      borderColor: 'transparent',
    },
  },
}))

export interface ActiveFormSelectProps extends Omit<ActiveFormTextFieldProps, 'variant'> {
  /** To make textfield to be select. See below examples section for select example and sample code */
  select?: boolean
  /** Input has some default padding already, to make changes to it pass padding like `inputPadding='0px 2px'` */
  inputPadding?: string
  /** onMouseOver */
  onMouseOver?: (event: React.MouseEvent) => void
  /** onMouseLeave */
  onMouseLeave?: (event: React.MouseEvent) => void
  /** onBlur */
  onBlur?: (event: React.FocusEvent) => void
}

/**
 * ActiveFormSelect is same component as ActiveFormTextField but ActiveFormSelect is a Select component and ActiveFormTextField is Input.
 *
 * Which is made by overriding some input styles and props from [TextFieldAPI](https://mui.com/material-ui/api/text-field/#textfield-api).
 *
 * It accepts all the TextField props and styles
 *
 * It must be wrapped inside UValidatorForm Component and even if you don't want to use validation.
 *
 */
export default function ActiveFormSelect(props: ActiveFormSelectProps) {
  const {
    select,
    typographyVariant,
    className,
    interactiveMode = false,
    placeholder = 'Select',
    readOnly,
    slotProps,
    onMouseOver,
    onMouseLeave,
    onBlur,
    children,
    ...others
  } = props
  const [hideIcon, setHideIcon] = React.useState(classes.icon)
  const finalPlaceholder = readOnly ? null : placeholder

  function handleMouseOver(event: React.MouseEvent) {
    if (!readOnly) {
      setHideIcon(classes.showIcon)
    }
    return onMouseOver && onMouseOver(event)
  }

  function handleBlur(event: React.FocusEvent) {
    event.preventDefault()
    setHideIcon(classes.icon)
    return onBlur && onBlur(event)
  }

  function handleMouseLeave(event: React.MouseEvent) {
    setHideIcon(classes.icon)
    return onMouseLeave && onMouseLeave(event)
  }

  return (
    <StyledBox typographyVariant={typographyVariant}>
      <UTextField
        placeholder={finalPlaceholder}
        className={`${classes.textField} ${className || ''}`}
        slotProps={{
          ...slotProps,
          inputLabel: {
            shrink: true,
            ...(slotProps?.inputLabel ? slotProps.inputLabel : {}),
          },
          input: {
            ...(slotProps?.input ? slotProps.input : {}),
            classes: {
              root: `${classes.input} ${readOnly ? classes.inputHover : ''}`,
              notchedOutline: `${
                !interactiveMode && !readOnly ? '' : classes.notchedOutline
              }`,
              input: classes.inputPadding,
            },
          },
          htmlInput: {
            ...(slotProps?.htmlInput ? slotProps.htmlInput : {}),
            readOnly: Boolean(readOnly),
            disabled: Boolean(readOnly),
          },
          select: {
            ...(slotProps?.select ? slotProps.select : {}),
            classes: { icon: (interactiveMode || readOnly) && hideIcon },
          },
        }}
        select
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
        onBlur={handleBlur}
        variant="outlined"
        {...others}
      >
        {children}
      </UTextField>
    </StyledBox>
  )
}

