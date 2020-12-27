
import { green } from '@material-ui/core/colors';
import React, { useState } from 'react';
import Select from 'react-select';
import './Select.css'
 
const options = [
  { value: 'ENG', label: '🇺🇸 USA' },
  { value: 'FRA', label: '🇫🇷 FRA' },
  { value: 'GER', label: '🇩🇪 GER' },
  { value: 'SPA', label: '🇪🇸 SPA' },
  { value: 'ITA', label: '🇮🇹 ITA' },
]
 


const Selector = props =>{
  const [Lang, setLang] = useState ({
    selectedOption: { value: "ENG", label: "🇺🇸 USA" },
  });

  const handleChange = selectedOption => {
    setLang({ selectedOption });

  
  };

  
  // render() {
  //   const { selectedOption } = this.state;
 
    return (
      <Select className='react-select-container' classNamePrefix="react-select"
        value={Lang.selectedOption}
        onChange={handleChange}
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
  // }
}

export default Selector;