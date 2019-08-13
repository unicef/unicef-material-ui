import React from "react"
import { SpinningButton, CustomSelect } from "unicef-material-ui"
import { Typography } from "@material-ui/core"

export default function LoadingButton() {
  const [loading, setLoading] = React.useState(false)
  const timer = React.useRef()

  React.useEffect(() => {
    return () => {
      clearTimeout(timer.current)
    }
  }, [])

  function handleButton() {
    setLoading(true)
    console.log(loading, "aftersetting")
    timer.current = setTimeout(() => {
      console.log(loading, "time")
      setLoading(false)
    }, 2000)
  }

  return (
    <React.Fragment>
      <Typography variant="h5" style={{ margin: "16px 0px" }}>
        Spinning button
      </Typography>
      <SpinningButton
        loading={loading}
        buttonText="Download"
        onClick={handleButton}
      />
      <CustomSelect />
    </React.Fragment>
  )
}
