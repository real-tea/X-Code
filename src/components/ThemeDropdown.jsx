import React from 'react'
import Select from 'react-select';
import customStyles from '../constants/Styles';

import monacoThemes from "monaco-themes/themes/themelist";

function ThemeDropdown({handleThemeChange , theme}) {

  // const customStyles = {
  //   option: (provided, state) => ({
  //     ...provided,
  //     // borderBottom: '1px dotted yellow',
  //     color: state.isSelected ? 'green' : 'blue',
  //     padding: 20,
  //   }),
    
  //   singleValue: (provided, state) => {
  //     const opacity = state.isDisabled ? 0.5 : 1;
  //     const transition = 'opacity 500ms';
  
  //     return { ...provided, opacity, transition };
  //   }
  // }


  return (
    <Select
    styles={customStyles}
    menuColor='red'
    placeholder={`Select Theme`}
    // options={languageOptions}
    options={Object.entries(monacoThemes).map(([themeId, themeName]) => ({
      label: themeName,
      value: themeId,
      key: themeId,
    }))}
    value={theme}
    onChange={handleThemeChange}
    //style
    />
  )
}

export default ThemeDropdown