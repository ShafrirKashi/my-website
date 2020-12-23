import React, { useState, createContext } from 'react'
import Select from 'react-select';
import Container1 from '../src/Components/Container1/Container1'

const SelectContext = createContext();


 const options = [
    { value: 'ENG', label: '🇺🇸 USA' },
    { value: 'FRA', label: '🇫🇷 FRA' },
    { value: 'GER', label: '🇩🇪 GER' },
    { value: 'SPA', label: '🇪🇸 SPA' },
    { value: 'ITA', label: '🇮🇹 ITA' },
  ]
   
  
  
  export class Selector extends React.Component {
        constructor(props) {
        super(props);

    this.state = {
      selectedOption: { value: "ENG", label: "🇺🇸 USA" },
    };

    this.handleChange = selectedOption => {
      this.setState({ selectedOption });  
    };
  
        }
    render() {
      const { selectedOption } = this.state;
   
      return (

            <SelectContext.Provider value={"hello"} >

            {this.props.children}
                
           
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
         </SelectContext.Provider>
      );
    }
  }
  
  export default SelectContext;