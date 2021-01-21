import { combineReducers } from 'redux';
import bibleReducer from 'views/Bible/state/reducer';
import { connectRouter } from 'connected-react-router';

const rootReducer = (history) => combineReducers({
  router: connectRouter(history),
  bibleReducer,
});

export default rootReducer;