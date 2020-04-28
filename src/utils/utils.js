import React from 'react'

// Function return particular child component based on props.children and componentName
export function findReactChildren(props, componentName) {
  return React.Children.map(props.children, child => {
    if (child.type === componentName) {
      return child
    }
  })
}

export const debounce = (func, wait, immediate) => {
  let timeout
  function cancel() {
    if (timeout !== undefined) {
      clearTimeout(timeout)
    }
  }
  const debounced = function debounced(...args) {
    const context = this
    const later = function delayed() {
      timeout = null
      if (!immediate) {
        func.apply(context, args)
      }
    }
    const callNow = immediate && !timeout
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    if (callNow) {
      func.apply(context, args)
    }
  }
  debounced.cancel = cancel
  return debounced
}
