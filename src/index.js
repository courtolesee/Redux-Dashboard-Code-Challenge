import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider } from 'react-redux';
import logger from 'redux-logger';

// reducers
const passengers = ( state=['Courtney'], action ) => {
  if ( action.type === 'ADD_PASSENGER' ){
      return [ ...state, action.payload ]        
  }
  return state; 
}

const speed = ( state=0, action ) => {
  if ( action.type === 'ADD_SPEED' ){
      return action.payload    
  }
  return state; 
}

const storeInstance = createStore(
  // combining reducers
  combineReducers({
    passengers,
    speed
}),
  applyMiddleware(logger)
)

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
