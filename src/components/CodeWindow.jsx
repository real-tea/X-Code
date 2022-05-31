import {useState} from 'react'
import Editor from '@monaco-editor/react'
import { Box } from '@chakra-ui/react';


const CodeWindow = ({onChange , language , code ,theme}) => {

    const [value , setValue] = useState(code || "");

    const handleEditorChange = (value) => {
        setValue(value)
        onChange("code" , value);
    }

  return (
    <Box overflow='hidden' w="full" h="full" shadow='4xl' rounded='md'>
        <Editor
        // theme={theme}
        language={language || "javascript"}
        defaultValue="//get Started"
        height="85vh"
        width={`100%`}
        onChange={handleEditorChange}
        />
    </Box>
  )
}

export default CodeWindow