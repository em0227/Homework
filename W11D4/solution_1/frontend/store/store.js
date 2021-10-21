import { createStore } from 'redux';
import { applyMiddleware } from 'redux';
import rootReducer from '../reducers/root_reducer';

const addLoggingToDispatch = (store) => {
  
  return (next => {
    return (action) => {
      let dispatch = store.dispatch;
      let state = store.getState();
      console.log(state);
      console.log(action);
      dispatch(action);
      state = store.getState()
      console.log(state)
    }
  })
}

const configureStore = (preloadedState = {}) => {
  const store = createStore(rootReducer, preloadedState);
  store.subscribe(() => {
    localStorage.state = JSON.stringify(store.getState());
  });
  return store;
}

export default configureStore;
