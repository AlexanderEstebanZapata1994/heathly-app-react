import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { alert } from './message.reducer';

const rootReducer = combineReducers({
  authentication,
  registration,
  alert
});

export default rootReducer;