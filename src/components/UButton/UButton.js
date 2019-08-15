import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import Button from "@material-ui/core/Button";

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
}));

/**
 * Custom advanced button with unicef colors and also it has spinning effect in the button
 *
 * */
export default function UButton(props) {
  const { spinButton, loading, variant, color, ...others } = props;
  const classes = useStyles();

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
  };

  function getVariant(variant) {
    switch (variant) {
      case "uDefault":
        return "outlined";
      case "uPrimary":
        return "contained";
      case "contained":
        return "contained";
      case "outlined":
        return "outlined";
      case "text":
        return "text";
      default:
        return "contained";
    }
  }

  return spinButton ? (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <Button
          variant={getVariant(variant)}
          color={color || "primary"}
          disableRipple
          classes={classes.color}
          {...others}
        >
          {props.children}
        </Button>
        {loading && (
          <CircularProgress
            colorSecondary
            size={24}
            className={classes.buttonProgress}
          />
        )}
      </div>
    </div>
  ) : (
    <Button
      variant={getVariant(variant)}
      color={color || "primary"}
      disableRipple
      {...others}
    >
      {props.children}
    </Button>
  );
}
