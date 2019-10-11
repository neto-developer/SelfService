import React from "react";
import Favicon from 'react-favicon';
import { ToastContainer } from 'react-toastify';
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom';

import ico from './assets/cloud.ico';

import './config/ReactotronConfig';

import Routes from '../src/routes';
import history from './services/history'

import { store, persistor } from './store';

import GlobalStyle from './styles/global'

function App() {


  return (

    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <Favicon url={ico} />
          <Routes />
          <GlobalStyle />
          <ToastContainer autoClose={5000} />
        </Router>
      </PersistGate>
    </Provider>
  )
}

export default App;
