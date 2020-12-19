import { combineReducers } from 'redux';

const defaultReducer = (state = 0, action) => state;

const rootReducer = combineReducers({
  defaultReducer,
});

export default rootReducer;