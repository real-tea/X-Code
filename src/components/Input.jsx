import React from 'react'
import { Textarea } from '@chakra-ui/react'

const Input = ({customInput , setCustomInput}) => {
  
    

    return (
    <>
    {" "}
    <textarea
        rows="5"
        value={customInput}
        onChange={(e) => setCustomInput(e.target.value)}
        placeholder={`Custom input`}
        className="focus:outline-none w-full border-2 border-black z-10 rounded-md shadow-[5px_5px_0px_0px_rgba(35,0,100)] px-4 py-2 hover:shadow transition duration-200 bg-white mt-2"
        
      ></textarea>
    </>
  )
}

export default Input