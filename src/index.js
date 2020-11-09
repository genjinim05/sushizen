import React from 'react';
import ReactDOM from 'react-dom';
import ListOfProducts from './components/MainComponent';
import { Provider } from 'react-redux'
import configureStore from './store';

import { Router } from 'react-router-dom';
import history from './components/history';

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={configureStore()}> 
    <Router history={history}> 
      <ListOfProducts />
    </Router>  
  </Provider>, rootElement);