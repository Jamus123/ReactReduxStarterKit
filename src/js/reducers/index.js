import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  state: (state = {}) => state, //dummy state
  routing: routerReducer
});

export default rootReducer;
