import React from 'react'
import Select from 'react-select';
import language from '../constants/Language';
function DropDown({onSelectChange}) {

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      // borderBottom: '1px dotted yellow',
      color: state.isSelected ? 'green' : 'blue',
      padding: 20,
    }),
    
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = 'opacity 500ms';
  
      return { ...provided, opacity, transition };
    }
  }

  return (
    <Select
    styles={customStyles}
    menuColor='red'
    placeholder='Select a Language ✨'
    options={language}
    defaultValue={language[0]}
    onChange={(selected)=> onSelectChange(selected)}
    //style
    />
  );
};

export default DropDown