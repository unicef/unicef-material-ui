import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'

export default function UInfiniteScroll({ offset = 100, onEndOfScroll }) {
  const divElement = useRef()
  useEffect(() => {
    window.onscroll = () => {
      //window.innerHeight: is the height of the window
      //window.pageYOffset is the current scroll offset position
      // counting from the the top of the screen
      // divElement.offsetTop is the position of the offset from the top
      // of the screen
      if (
        divElement &&
        divElement.current &&
        window.innerHeight + window.pageYOffset >
          divElement.current.offsetTop - offset
      ) {
        onEndOfScroll()
      }
    }
  })

  return <div ref={divElement}></div>
}

UInfiniteScroll.propTypes = {
  /** Id of the delete item */
  offset: PropTypes.number,
  /** trigger when end of scroll reached */
  onEndOfScroll: PropTypes.func,
}
