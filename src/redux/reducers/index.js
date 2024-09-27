import { combineReducers } from 'redux';
import tabReducer from './tabReducer';
// Import other reducers here

const rootReducer = combineReducers({
  tab: tabReducer,
  // Add other reducers here
});

export default rootReducer;
