import React from 'react';
import LoginScreen from 'features/login/components/LoginScreen';
import { ChakraProvider } from '@chakra-ui/react';
import Newsfeed from 'features/newsfeed/components/Newsfeed';
import { theme } from 'configurations'

const App = () => {
  return <ChakraProvider theme={theme}>
    <div>
      <LoginScreen />
      {/* <Newsfeed /> */}
    </div>
  </ChakraProvider>
}

export default App;
