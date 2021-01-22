import { combineReducers } from 'redux';
import bible from 'views/Bible/state/reducer';
import { connectRouter } from 'connected-react-router';

const rootReducer = (history) => combineReducers({
  router: connectRouter(history),
  bible,
});

export default rootReducer;