import React from 'react'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'
import { green } from '@material-ui/core/colors'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  wrapper: {
    margin: theme.spacing(1),
    position: 'relative',
  },
  buttonProgress: {
    color: green[500],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
}));

export default function SpinningButton(props) {

  const { loading, loadingFunc, buttonText} = props
  const classes = useStyles();
  
  function handleButtonClick() {
    loadingFunc && loadingFunc(true)
  }

  SpinningButton.propTypes = {
    /**
     * loading is to handle the spinning in button.
     */
    loading: PropTypes.bool.isRequired,
    /**
     * Function to handle the spinning in button.
     */
    loadingFunc: PropTypes.func.isRequired,
    /**
     * Text to dispaly on button.
     */
    buttonText: PropTypes.string.isRequired,
  };

  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <Button
          variant="contained"
          color="primary"
          disabled={loading}
          onClick={handleButtonClick}
        >
          {buttonText}
        </Button>
        {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
      </div>
    </div>
  );
}