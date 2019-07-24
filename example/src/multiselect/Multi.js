import React from 'react';
import Select from 'react-select';
import {
	Typography,
} from '@material-ui/core'
const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];
 
export default class MultiSelect extends React.Component {
  state = {
    selectedOption: null,
  };
  handleChange = selectedOption => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  };
  render() {
    const { selectedOption } = this.state;
 
    return (
        <div>
        <Typography variant="h5"> Select </Typography>
        <Select
            value={selectedOption}
            onChange={this.handleChange}
            options={options}
            
        />
      </div>
    );
  }
}