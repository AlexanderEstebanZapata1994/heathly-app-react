import { userConstants } from '../constants';
import { UserActionType } from '../../Model/User.Actions.Model';

let user : string | null = localStorage.getItem('user');
if (user != null) {
  user = JSON.parse(user);
}
const initialState = user ? { loggedIn: true, user } : {};

export function authentication(state = initialState, action : UserActionType) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.User
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.User
      };
    case userConstants.LOGIN_FAILURE:
      return {};
    case userConstants.LOGOUT:
      return {};
    default:
      return state
  }
}