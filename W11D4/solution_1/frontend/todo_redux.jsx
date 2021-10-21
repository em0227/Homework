import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const preloadedState = localStorage.state ?
    JSON.parse(localStorage.state) : {};
  let store = configureStore(preloadedState);

  const root = document.getElementById('content');

  const addLoggingToDispatch = (store) => next => {
    let dispatch = store.dispatch;

    return (action) => {
      
      let state = store.getState();
      console.log(state);
      console.log(action);
      dispatch(action);
      state = store.getState()
      console.log(state)
    }
  }

  const applyMiddleWares = (store, ...middlewares) => {
    let dispatch = store.dispatch;
    middlewares.forEach( middleware => {
      dispatch = middleware(store)(dispatch)
    })

    return Object.assign({}, store, { dispatch })
 
  }

  // store.dispatch = addLoggingToDispatch(store);

  store = applyMiddleWares(store, addLoggingToDispatch)

  ReactDOM.render(<Root store={store} />, root);
});
