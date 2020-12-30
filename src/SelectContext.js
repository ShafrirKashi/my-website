import React, {useState, createContext} from 'react';
import Select from 'react-select';


export const SelectContext = createContext();

 
const options = [
    { value: 'ENG', label: '🇺🇸 USA' },
    { value: 'FRA', label: '🇫🇷 FRA' },
    { value: 'GER', label: '🇩🇪 GER' },
    { value: 'SPA', label: '🇪🇸 SPA' },
    { value: 'ITA', label: '🇮🇹 ITA' },
  ]
   

export const SelectProvider = (props) => {
const [Lang, setLang] = useState(
    { 
       value: "ENG",
       label: "🇺🇸 USA" 
    }
);




function handleChange (){
    setLang(selectedOption)

}


return (
    <SelectContext.Provider value={"s"}>
        {props.children}
        </SelectContext.Provider>

);
   
}



import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SelectContext extends Component {
    render() {
        return (
            <div>
                
            </div>
        );
    }
}


export default SelectContext;