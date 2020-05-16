import { userConstants } from '../constants'
import { userService } from '../../Services'
import { messagesActions } from './messages.actions'
import { history } from '../../helpers'
import { UserRequest, UserResponse } from '../../Model'
import { Dispatch } from 'redux';

export const userActions = {
  logIn,
  register,
  //logout,
};

function logIn(inputParams: UserRequest) {
  return (dispatch: Dispatch) => {
    dispatch(request(true));
    userService.login(inputParams).then(
      (user : UserResponse) => {
        if(user.Error.HasError){
          dispatch(messagesActions.error(user.Error.ErrorMessage));
          dispatch(failure(user));
        }else{
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('user', JSON.stringify(user));
          dispatch(messagesActions.success("Login success"));
          dispatch(success(user));
          history.push("/");
        }
      },
      error => {
        dispatch(failure(error));
        dispatch(messagesActions.error(error));
      }
    );
  };

  function request(payload: boolean) {
    return { type: userConstants.LOGIN_REQUEST, payload };
  }
  function success(payload: UserResponse) {
    return { type: userConstants.LOGIN_SUCCESS, payload };
  }
  function failure(payload : UserResponse) {
    return { type: userConstants.LOGIN_FAILURE, payload };
  }
}


function register(user: UserRequest) {
  return (dispatch: Dispatch) => {
    dispatch(request(true));

    userService.register(user).then(
      (user )  => {
        dispatch(success(false));
        history.push("/login");
        dispatch(messagesActions.success("Registration successful"));
      },
      error => {
        dispatch(failure(false));
        dispatch(messagesActions.error(error));
      }
    );
  };

  function request(payload : boolean) {
    return { type: userConstants.REGISTER_REQUEST, payload };
  }
  function success(payload : boolean) {
    return { type: userConstants.REGISTER_SUCCESS, payload  };
  }
  function failure(payload: boolean) {
    return { type: userConstants.REGISTER_FAILURE, payload };
  }
}