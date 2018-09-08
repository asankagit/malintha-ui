import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import indexRoutes from "routes/index.jsx";

import "assets/scss/material-kit-react.css?v=1.2.0";

import {applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger';

var hist = createBrowserHistory();

/**for bug fixing */

const Provider = require('react-redux').Provider;
const createStore = require('redux').createStore;
const reducers = require('./reducers').default;

let store = createStore(reducers);
/**for bug fixing */


/**apply reducx thnk middle ware */


const createStoreWithMiddleware = applyMiddleware(ReduxThunk, logger)(createStore);
/**apply reducx thnk middle ware */



ReactDOM.render(
  
  <Provider store={createStoreWithMiddleware(reducers)}> 
  {/* //store={store} beore adding redux thunk middleware */}
  <Router history={hist}>
    <Switch>
      {indexRoutes.map((prop, key) => {
        return <Route path={prop.path} key={key} component={prop.component} />;
      })}
    </Switch>
  </Router>
   </Provider>,
  document.getElementById("root")
);
