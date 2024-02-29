import PropTypes from "prop-types"
import { makeStyles } from '@mui/styles'
import { Button, CircularProgress } from "@mui/material"

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    alignItems: "center",
  },
  wrapper: {
    position: "relative",
  },
  buttonProgress: {
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12,
  },
}))

/**
 * Custom advanced button with unicef colors and also it has spinning effect in the button
 *
 * */
export default function UButton(props) {
  const { spinButton, loading, variant, color, ...others } = props
  const classes = useStyles()

  function getVariant(variant) {
    switch (variant) {
      case "uDefault":
        return "outlined"
      case "uPrimary":
        return "contained"
      case "contained":
        return "contained"
      case "outlined":
        return "outlined"
      case "text":
        return "text"
      default:
        return "contained"
    }
  }

  const CustomButton = <Button
    variant={getVariant(variant)}
    color={color}
    disableRipple
    {...others}
  >
    {props.children}
  </Button>

  return (
    !spinButton
      ? CustomButton
      : <div className={classes.root}>
        <div className={classes.wrapper}>
          {CustomButton}
          {loading && (
            <CircularProgress size={24} className={classes.buttonProgress} />
          )}
        </div>
      </div>
  )
}

UButton.propTypes = {
  /**
   * loading is to handle the spinning in button.
   */
  loading: PropTypes.bool,
  /**
   * spinButton will enable the spinning button.
   */
  spinButton: PropTypes.bool,
  /**
   * variant is type of button: uDefault | uPrimary | contained | outlined | text.
   */
  variant: PropTypes.string,
  /**  color of the button */
  color: PropTypes.string,
};

UButton.defaultProps = {
  color: "primary",
  variant: "contained",
  spinButton: false,
  loading: false,
}