import { userConstants } from '../constants'
import { userService } from '../../Services'
import { messagesActions } from '.'
import { history } from '../../helpers'
import { Parameters, UserData } from '../../Model'
import { Dispatch } from 'redux';

export const userActions = {
  login,
  //logout,
  register,
  //getAll,
};

function login(inputParams: Parameters) {
  
  console.log(inputParams)
  return (dispatch: Dispatch) => {

    dispatch(request(inputParams));
    userService.login(inputParams).then(
      user => {
        if(user.error.hasError){
          dispatch(failure(user.error.errorMessage));
          dispatch(messagesActions.error(user.error.errorMessage));
        }else{
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

  function request(credentials: Parameters) {
    return { type: userConstants.LOGIN_REQUEST, credentials };
  }
  function success(user: UserData) {
    return { type: userConstants.LOGIN_SUCCESS, user };
  }
  function failure(error: string) {
    return { type: userConstants.LOGIN_FAILURE, error };
  }
}


function register(user: Parameters) {
  return (dispatch: Dispatch) => {
    dispatch(request(user));

    // userService.register(user).then(
    //   user => {
    //     dispatch(success(user));
    //     history.push("/login");
    //     dispatch(messagesActions.success("Registration successful"));
    //   },
    //   error => {
    //     dispatch(failure(error));
    //     dispatch(messagesActions.error(error));
    //   }
    // );
  };

  function request(user: Parameters) {
    return { type: userConstants.REGISTER_REQUEST, user };
  }
  function success(user: Parameters) {
    return { type: userConstants.REGISTER_SUCCESS, user };
  }
  function failure(error: string) {
    return { type: userConstants.REGISTER_FAILURE, error };
  }
}