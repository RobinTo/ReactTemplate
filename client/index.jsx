import React       from 'react';
import { render }  from 'react-dom';
import RouterApp from '../universal/routes';

import { createStore, combineReducers } from 'redux';
import { Provider }                     from 'react-redux';
import * as reducers                    from '../universal/reducers';
import { fromJS }                       from 'immutable';
import Router from 'react-router/BrowserRouter'

let initialState = window.__INITIAL_STATE__;

// Transform into Immutable.js collections,
// but leave top level keys untouched for Redux
Object
  .keys(initialState)
  .forEach(key => {
    initialState[key] = fromJS(initialState[key]);
   });
const reducer = combineReducers(reducers);
const store   = createStore(reducer, initialState, window.devToolsExtension && window.devToolsExtension());
console.log("Rendering react app");
render(
  <Provider store={store}>
    <Router>
      <RouterApp />
    </Router>
  </Provider>,
  document.getElementById('react-view')
);
