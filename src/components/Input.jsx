import React from 'react'
import { Textarea } from '@chakra-ui/react'

const Input = ({customInput , setCustomInput}) => {
  
    setValue = (e)=>{
        setCustomInput(e.target.value);
    }

    return (
    <>
    {" "}
    <Textarea
    row='5'
    w='full'
    rounded='md'
    border='2px'    
    borderColor='yellow'
    z-index='5px'
    _hover={{
      shadow:'xl'
    }}
    value={customInput}
    onChange={setvalue}
    placeholder={`custom Input`}/>

    </>
  )
}

export default Input