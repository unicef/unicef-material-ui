import React, { useRef, useState, useEffect } from 'react'
import { UPageLoadingProgress } from '@unicef/material-ui'

export default function Buttons() {
  const [loading, setLoading] = useState(true)
  const timer = useRef()

  useEffect(() => {
    timer.current = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => {
      clearTimeout(timer.current)
    }
  }, [])

  return loading && <UPageLoadingProgress />
}
