import React from 'react';
import {
  ChakraProvider,
  Box,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
// Chakra-ui modules

// import CodeWindow from './components/CodeWindow';
// import Input from './components/Input';
//import Footer from './components/Footer';

import Landing from './components/Landing';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          
          <Landing/>
          
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
