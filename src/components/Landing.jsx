import { useState } from 'react'
import { ToastContainer , toast } from 'react-toastify';
import axios from 'axios';

import DropDown from './DropDown';
import ThemeDropdown from './ThemeDropdown';
import CodeWindow from './CodeWindow';
import OutputDetail from './OutputDetail';
import OutputWindow from './OutputWindow';
import Input from './Input';
import Footer from './Footer';

import language from '../constants/Language';

const Default=`
console.log("🚀Looks Nice!")
`

function Landing() {

  const [ lang , setLang ] = useState(language[0]);
  const [ code , setCode ] = useState(Default);
  const [ outputDetails , setOutputDetails] = useState(null);
  const [ customInput , setCustomInput ] = useState(" ");
  const [ processing , setProcessing ] = useState(null);

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

  const Compile = () =>{
    setProcessing(true);

    const Data={
      language_id:language.id,
      source_code:btoa(code),
      stdin:btoa(customInput)
    };
    const options = {
      method : "POST",
      url : "https://judge0-ce.p.rapidapi.com/submissions",
      params: {base64_encoded: 'true', fields: '*'},
      headers: {
        'content-type': 'application/json',
        'Content-Type': 'application/json',
        'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com',
        'X-RapidAPI-Key': 'fb819ad812msh3df7b34d06e1333p119fe4jsn4431c171c5ce'
      },
      data : Data
    };


    axios.request(options).then(function (response) {
      console.log(response.data);
      checkStatus(response.data.token)
    }).catch(function (error) {
      const status = error.response.status;

      if(status === 429)
      {
        // console.log("Limit of 100 submissions per day exceeded");
        showErrorToast("Limit of 100 free responses/day exceeded!");
      }// too many requests

      setProcessing(false);
      
    });


  }

  const checkStatus=async(token) => {
    const options={
      method:"GET",
      url:"https://judge0-ce.p.rapidapi.com/submissions/"+token,
      params: { base64_encoded: "true", fields: "*" },
      headers: {
        'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com',
        'X-RapidAPI-Key': 'fb819ad812msh3df7b34d06e1333p119fe4jsn4431c171c5ce'
      },
    };

    try {
      let response = await axios.request(options);
      let statusId = response.data.status?.id;

      // Processed - we have a result
      if (statusId === 1 || statusId === 2) {
        // still processing
        setTimeout(() => {
          checkStatus(token);
        }, 2000);
        return;
      } else {
        setProcessing(false);
        setOutputDetails(response.data);
        showToast(`Compiled Successfully!`);
        console.log("response.data", response.data);
        return;
      }
    } catch (err) {
      console.log("err", err);
      setProcessing(false);
      showErrorToast();
    }
  }


  const showToast=(message)=>{
    toast.success(message || '🦄 Compiled Successfully!', {
    position: "top-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });}

  const showErrorToast = (msg, timer) => {
      toast.error(msg || `Something went wrong! Please try again.`, {
        position: "top-right",
        autoClose: timer ? timer : 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    };

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
          
        
{/*-> Output Details */}
        <div className = "right-container flex flex-shrink-0 w-[30%] flex-col">
          <OutputWindow outputDetails={outputDetails}/>
          <div className = "flex flex-col items-end">
            <Input 
            customInput={customInput}
            setCustomInput={setCustomInput}
            />
          

          <button
            className = "mt-4 border-2 border-black z-10 rounded-md shadow-[5px_5px_0px_0px_rgba(0,0,0)] px-4 py-2 hover:shadow transition duration-200 bg-white flex-shrink-0"
            onClick={Compile}
            disabled={!code}
            >
              {processing? "Processing...":"Compile & Execute"}


          </button>
          </div>
          
            {outputDetails && <OutputDetail output={outputDetails}/>}
          </div>
       
        </div>
        <Footer/>


    
    </>
  )
}

export default Landing