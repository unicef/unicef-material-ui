import React from 'react'

export interface UNavbarCenterProps {
  children?: React.ReactNode
}

/**
 * UNavbarCenter is a component to display the content in header after the app title
 */
export default function UNavbarCenter({ children }: UNavbarCenterProps) {
  return <>{children}</>
}

