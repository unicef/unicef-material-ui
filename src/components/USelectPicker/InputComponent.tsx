import React from 'react'

export interface InputComponentProps extends React.HTMLAttributes<HTMLDivElement> {
  inputRef?: React.Ref<HTMLDivElement>
}

export default function InputComponent({ inputRef, ...props }: InputComponentProps) {
  const { required, 'aria-invalid': ariaInvalid, ...restProps } = props
  return (
    <div
      ref={inputRef}
      {...restProps}
    />
  )
}

