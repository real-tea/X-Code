import { useState } from 'react'
import {ToastContainer} from 'react-toastify';
import DropDown from './DropDown';
import ThemeDropdown from './ThemeDropdown';
import CodeWindow from './CodeWindow';

import language from '../constants/Language';

const Default=`
console.log("🚀Looks Nice!")
`

function Landing() {

  const [ lang , setLang ] = useState(language[0]);
  const [ code , setCode ] = useState(Default);

  const onSelectChange=(lang)=>{
      console.log(lang);
      setLang(lang);
  }

  const onChange = (action , data)=>{
    if(action==="code"){
      setCode(data);
    }
    else 
    console.log("error onChange in landing.jsx");
  }


  return (
    <>
        <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        />

        {/* <a>
          
        </a> */}


{/*-> DropDowns */} 
        <div className = "h-5 w-full bg-gradient-to-r from-red-300 via-pink-300 to-blue-600"></div>
        <div className = 'flex flex-row'>
          <div className = 'px-4 py-2'>
                  <DropDown onSelectChange={onSelectChange}/>    
          </div> 
          <div className = 'px-4 py-2'>
                  <ThemeDropdown/>
          </div>   
        </div>
{/*-> Code editor */}

        <div className = "flex flex-row space-x-4 items-start px-4 py-4">
          <div className = "flex flex-col w-full h-full justify-start items-end">
            <CodeWindow
            code={code}
            onChange = {onChange}
            language={language.value}
            // theme={theme.value}
            />
          </div>
        </div>




    
    </>
  )
}

export default Landing