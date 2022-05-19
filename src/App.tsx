import React from 'react';
import LoginScreen from 'features/login/components/LoginScreen';
import { ChakraProvider } from '@chakra-ui/react';
import Newsfeed from 'features/newsfeed/components/Newsfeed';
import { appTheme } from 'utils/styles/themes';

const App = () => {
  return <ChakraProvider theme={appTheme}>
    <div>
      <LoginScreen />
      {/* <Newsfeed /> */}
    </div>
  </ChakraProvider>
}

export default App;
