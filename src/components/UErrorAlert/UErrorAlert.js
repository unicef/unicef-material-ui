import { Fragment } from 'react';
import { Box } from'@mui/material'
import Alert from '@mui/material/Alert'
import PropTypes from 'prop-types'
/**
 * UErrorAlert is a component to display error message to the user
 */
export default function UErrorAlert({ error, preformatted, onClose }) {
  return (
    <Fragment>
      {error && (
        <Box marginTop={2} marginBottom={2}>
          <Alert severity="error" onClose={() => onClose && onClose()}>
            {preformatted ? (
              <pre>{error.message}</pre>
            ) : (
              <Fragment>{error.message}</Fragment>
            )}
          </Alert>
        </Box>
      )}
    </Fragment>
  );
}

UErrorAlert.propTypes = {
  /** Error object which holds the error message to display */
  error: PropTypes.object,
  /** Format the error message */
  preformatted: PropTypes.bool,
  /** Triggers close action of error alert */
  onClose: PropTypes.func,
}

UErrorAlert.defaultProps = {
  preformatted: false,
}
