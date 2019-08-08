import React from "react"

// Function return particular child component based on props.children and componentName
export function FindReactChildren(props, componentName) {
  return React.Children.map(props.children, child => {
    if (child.type.name === componentName) {
      return child
    }
  })
}
