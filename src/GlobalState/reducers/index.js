import { combineReducers } from 'redux';

import { Authentication } from './authentication.reducer';
import { Registration } from './registration.reducer';
import { MessageAlert } from './message.reducer';

const rootReducer = combineReducers({
  Authentication,
  Registration,
  MessageAlert,
});

export default rootReducer;