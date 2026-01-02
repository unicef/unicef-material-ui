import React, { forwardRef, useEffect } from 'react'
import { ValidatorForm, ValidatorFormProps } from 'react-form-validator-core'
import {
  isAlphanumericText,
  isPhoneNumberText,
  isRegexCaseInSensitive,
  isSafeText,
  isUrlText,
} from '../../utils'

export interface UValidatorFormProps extends Omit<ValidatorFormProps, 'onSubmit'> {
  /** Callback for form that fires when all validations are passed */
  onSubmit?: (event: React.FormEvent) => void
  /** If true, form will be validated after each field change.If false, form will be validated only after clicking submit button. */
  instantValidate?: boolean
  /** Callback for form that fires when some of validations are not passed.It will return array of elements which not valid. */
  onError?: (errors: any[]) => void
  /** Debounce time for validation i.e.your validation will run after debounceTime ms when you stop changing your input. */
  debounceTime?: number
  /** To prevent the browser's default validation or not */
  noValidate?: boolean
  children?: React.ReactNode
}

/**
 * * UValidatorForm is a component as similar to Form, it also has some set of validations for form that contains textfield, checkboxes, select, choice buttons.
 * * UValidatorForm has some features and functions like instantValidate, onSubmit, onError, debounceTime.
 * * Wherever we require form validation, UValidatorForm should be parent component , rest of the compoents should be wrapped under it.
 * * UValidatorForm is a [ValidatorForm Component](https://www.npmjs.com/package/react-form-validator-core) from `react-form-validator-core`.
 *  Check it if you need more details, we accept all the functions and props from ValidatorForm Component
 */

function ForwardRefForm(
  props: UValidatorFormProps,
  ref: React.ForwardedRef<ValidatorForm>
) {
  const {
    instantValidate = true,
    noValidate = true,
    debounceTime = 0,
    onSubmit = () => {},
    ...rest
  } = props
  useEffect(() => {
    ValidatorForm.addValidationRule('isUrl', (value: string) => {
      return isUrlText(value)
    })

    ValidatorForm.addValidationRule('isLatitude', (value: number) => {
      if (value > 90 || value < -90) {
        return false
      }
      return true
    })

    ValidatorForm.addValidationRule('isLongitude', (value: number) => {
      if (value > 180 || value < -180) {
        return false
      }
      return true
    })

    ValidatorForm.addValidationRule('isPhone', (value: string) => {
      return isPhoneNumberText(value)
    })

    ValidatorForm.addValidationRule('isSafeText', (value: string) => {
      return isSafeText(value)
    })

    ValidatorForm.addValidationRule('isAlphanumeric', (value: string) => {
      return isAlphanumericText(value)
    })

    ValidatorForm.addValidationRule(
      'matchRegexpCaseInSensitive',
      (value: string, regexStr: string) => {
        return isRegexCaseInSensitive(value, regexStr)
      }
    )

    // Cleanup function to remove validation rules when unmounted
    return () => {
      ValidatorForm.removeValidationRule('isUrl')
      ValidatorForm.removeValidationRule('isLatitude')
      ValidatorForm.removeValidationRule('isLongitude')
      ValidatorForm.removeValidationRule('isPhone')
      ValidatorForm.removeValidationRule('isSafeText')
      ValidatorForm.removeValidationRule('isAlphanumeric')
      ValidatorForm.removeValidationRule('matchRegexpCaseInSensitive')
    }
  }, [])

  return (
    <ValidatorForm
      instantValidate={instantValidate}
      noValidate={noValidate}
      debounceTime={debounceTime}
      onSubmit={onSubmit}
      {...rest}
      ref={ref}
    />
  )
}

/* Forward the ref */
const UValidatorForm = forwardRef<ValidatorForm, UValidatorFormProps>(ForwardRefForm) as typeof ValidatorForm & {
  addValidationRule: (name: string, callback: (value: any, ...args: any[]) => boolean) => void
  removeValidationRule: (name: string) => void
}

UValidatorForm.addValidationRule = (name: string, callback: (value: any, ...args: any[]) => boolean) => {
  ValidatorForm.addValidationRule(name, callback)
}

UValidatorForm.removeValidationRule = (name: string) => {
  ValidatorForm.removeValidationRule(name)
}

export default UValidatorForm

