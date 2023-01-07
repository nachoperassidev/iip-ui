import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';

import { initialState, mainReducer } from './state';
import { StateProvider } from './providers';
import App from './App';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <StateProvider initialState={initialState} reducer={mainReducer}>
        <App />
      </StateProvider>
    </ChakraProvider>
  </React.StrictMode>,
);
