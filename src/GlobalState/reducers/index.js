import { combineReducers } from 'redux';

import { Authentication } from './authentication.reducer';
import { Registration } from './registration.reducer';
import { MessageAlert } from './message.reducer';
import { AllPatientsData } from './patients.reducer'

const rootReducer = combineReducers({
  Authentication,
  Registration,
  AllPatientsData,
  MessageAlert,
});

export default rootReducer;