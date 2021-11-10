import React from 'react'
import Menu from '@material-ui/core/Menu'

/**
 * UMenu encapsulates Menu component from material ui
 * Original component was written using class which throws a warning :
 * *****
 * Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?
 * Check the render method of `ForwardRef(Menu)`.
 * *****
 * For these scenarios, using React.forwardRef is recommended.(e.g .https://github.com/mui-org/material-ui/issues/15903)
 * Another solution is wrapping the children withing a container(div). This one seems to be
 * working for the current version
 */
const UMenu = React.forwardRef((props, ref) => {
  return (
    <Menu ref={ref} {...props}>
      <div>{props.children}</div>
    </Menu>
  )
})

export default UMenu
