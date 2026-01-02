import React, { useRef, useEffect } from 'react'
import { Box } from '@mui/material'

export interface UInfiniteScrollProps {
  /** Id of the delete item */
  offset?: number
  /** trigger when end of scroll reached */
  onEndOfScroll?: () => void
}

/**
 * UInfiniteScroll component is for implementing infinite scrolling in a page. It monitors the user's scrolling position and triggers a specified function when the user scrolls to a certain point on the page:
 */
export default function UInfiniteScroll({ offset = 100, onEndOfScroll }: UInfiniteScrollProps) {
  const divElement = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const handleScroll = () => {
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
        onEndOfScroll && onEndOfScroll()
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [offset, onEndOfScroll])

  return <Box ref={divElement}></Box>
}

