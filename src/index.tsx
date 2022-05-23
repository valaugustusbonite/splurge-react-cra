import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { store } from 'store';
import { Provider } from 'react-redux';
import { UserProvider } from 'contexts';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from 'configurations'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        {/* <UserProvider> */}
        <ChakraProvider theme={theme}>
          <App />
        </ChakraProvider>
        {/* </UserProvider> */}
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
