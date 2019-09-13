```jsx
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';

// export default function CheckboxesGroup() {
  const [state, setState] = React.useState({
    react: false,
    materialui: false,
    angular: false,
    azure: false,
    trigError: false,
  });

   const { react, materialui, angular, azure, trigError } = state;

  const handleChange = name => event => {
    let changedValues = trigError 
      ? { ...state, [name]: event.target.checked } 
      : { ...state, [name]: event.target.checked, trigError : true }
    setState(changedValues);
  };

  const error = trigError && [react, materialui, angular, azure].filter(v => v).length <= 2;

  // return (
      <FormControl required error={error} component="fieldset" >
        <FormLabel >Pick more than two</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={react} onChange={handleChange('react')} value="react" />}
            label="React Facebook"
          />
          <FormControlLabel
            control={<Checkbox checked={materialui} onChange={handleChange('materialui')} value="materialui" />}
            label="Material Ui"
          />
          <FormControlLabel
            control={
              <Checkbox checked={angular} onChange={handleChange('angular')} value="angular" />
            }
            label="Angular Google"
          />
          <FormControlLabel
            control={
              <Checkbox checked={azure} onChange={handleChange('azure')} value="azure" />
            }
            label="Azure Microsoft"
          />
        </FormGroup>
        {error && <FormHelperText>please check more than two boxes</FormHelperText>}
      </FormControl>
  // );
// }
```