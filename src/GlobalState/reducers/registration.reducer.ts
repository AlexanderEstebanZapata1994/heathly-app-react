import { userConstants } from '../constants';
import { registration } from '../../Model';

export function Registration(state : registration = {isSigningUp : false}, action : any) {
  switch (action.type) {
    case userConstants.REGISTER_REQUEST:
      return { ...state, isSigningUp : action.payload };
    case userConstants.REGISTER_SUCCESS:
      return { ...state, isSigningUp : action.payload };
    case userConstants.REGISTER_FAILURE:
      return { ...state, isSigningUp : action.payload };
    default:
      return state
  }
}