import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { message } from './message.reducer';

const rootReducer = combineReducers({
  authentication,
  registration,
  message
});

export default rootReducer;