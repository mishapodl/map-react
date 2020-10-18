import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { mapReducer } from './mapReducer';

const rootReducer = combineReducers({
  authReducer,
  mapReducer
});

export default rootReducer;
