
import { green } from '@material-ui/core/colors';
import React from 'react';
import Select from 'react-select';
import './Select.css'
 
const options = [
  { value: 'ENG', label: '🇺🇸 USA' },
  { value: 'FRA', label: '🇫🇷 FRA' },
  { value: 'GER', label: '🇩🇪 GER' },
  { value: 'SPA', label: '🇪🇸 SPA' },
  { value: 'ITA', label: '🇮🇹 ITA' },
]
 


class Selector extends React.Component {
  state = {
    selectedOption: { value: "ENG", label: "🇺🇸 USA" },
  };
  handleChange = selectedOption => {
    this.setState({ selectedOption });
    this.props.parentCallback("Data from child");
  
  };

  
  render() {
    const { selectedOption } = this.state;
 
    return (
      <Select className='react-select-container' classNamePrefix="react-select"
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
        closeMenuOnSelect={true}
        theme={theme => ({
          ...theme,
          borderRadius: 0,
          colors: {
            ...theme.colors,
            primary25: "gray",
          },
        })}
      />
    );
  }
}

export default Selector;