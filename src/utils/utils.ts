import React from 'react'

// Function return particular child component based on props.children and componentName
export function findReactChildren(
  props: { children?: React.ReactNode },
  componentName: React.ComponentType<any>
): React.ReactElement[] | undefined {
  return React.Children.map(props.children, child => {
    if (React.isValidElement(child) && child.type === componentName) {
      return child
    }
  }) as React.ReactElement[] | undefined
}

export interface DebouncedFunction<T extends (...args: any[]) => any> {
  (...args: Parameters<T>): void
  cancel: () => void
}

export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number,
  immediate?: boolean
): DebouncedFunction<T> => {
  let timeout: NodeJS.Timeout | undefined
  function cancel() {
    if (timeout !== undefined) {
      clearTimeout(timeout)
    }
  }
  const debounced = function debounced(this: any, ...args: Parameters<T>) {
    const context = this
    const later = function delayed() {
      timeout = undefined
      if (!immediate) {
        func.apply(context, args)
      }
    }
    const callNow = immediate && !timeout
    if (timeout) {
      clearTimeout(timeout)
    }
    timeout = setTimeout(later, wait)
    if (callNow) {
      func.apply(context, args)
    }
  } as DebouncedFunction<T>
  debounced.cancel = cancel
  return debounced
}

