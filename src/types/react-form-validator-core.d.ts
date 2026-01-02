declare module 'react-form-validator-core' {
  import React from 'react'

  export interface ValidatorComponentState {
    isValid?: boolean
    validators?: string[] | string
    invalid?: number[]
  }

  export interface ValidatorComponentProps {
    validators?: string[]
    customErrorMessages?: Record<string, string> | string
    value?: any
    validatorListener?: (isValid: boolean) => void
    withRequiredValidator?: boolean
    containerProps?: Record<string, any>
    children?: React.ReactNode
  }

  export class ValidatorComponent<
    P extends ValidatorComponentProps = ValidatorComponentProps,
    S extends ValidatorComponentState = ValidatorComponentState
  > extends React.Component<P, S> {
    invalid?: number[]
    getErrorMessage?(): string
    renderValidatorComponent(): React.ReactNode
  }

  export interface ValidatorFormProps extends React.FormHTMLAttributes<HTMLFormElement> {
    instantValidate?: boolean
    noValidate?: boolean
    debounceTime?: number
    onSubmit?: (event: React.FormEvent) => void
    onError?: (errors: any[]) => void
    children?: React.ReactNode
  }

  export class ValidatorForm extends React.Component<ValidatorFormProps> {
    static addValidationRule(name: string, callback: (value: any, ...args: any[]) => boolean): void
    static removeValidationRule(name: string): void
  }
}

