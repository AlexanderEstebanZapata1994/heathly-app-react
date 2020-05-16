import { userConstants } from '../constants';
import {authentication, UserReducerType, UserResponse} from '../../Model';

let user2 : UserResponse = {UserId : 0, UserName : "", Name: "", Surname:"",Token :"", Error: {ErrorMessage:"", HasError : false}};

let user : string | null = localStorage.getItem('user');
if (user != null) {
  user2 = JSON.parse(user);
}
const initialState : authentication = user2 
  ? {
      isLoggedIn : true,
      isLoggingIn : false,
      User : user2,
    } 
  : {
      isLoggedIn : false,
      isLoggingIn : false,
      User : user2,
    } ;

export function Authentication(state : authentication = initialState, action : UserReducerType) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        ...state, 
        isLoggingIn : action.payload
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn : true,
        isLoggingIn : false,
        User : action.payload
      };
    case userConstants.LOGIN_FAILURE:
      return {
        ...state,
        isLoggedIn : false,
        isLoggingIn : false,
        User : action.payload
      };
    case userConstants.LOGOUT:
      return {};
    default:
      return state
  }
}