import {userConstants} from '../constants'
import {userService } from '../../Services'
import { messagesActions } from '.'
import {history} from '../../helpers'
import { UserData } from '../../Model/LoginModel'
import { Dispatch } from 'redux';

export const userActions = {
    login,
    //logout,
    register,
    //getAll,
  };

function login(inputParams : UserData ) {
    console.log("Entré")
    console.log(inputParams)
    return (dispatch : Dispatch)  => {
      console.log("antes de llamar este dispatch el state")
        dispatch(request(inputParams));
        console.log("antes de llamar al servicio")
        userService.login(inputParams).then(
        user => {
            console.log(user)
            dispatch(success(user));
            history.push("/");
        },
        error => {
            dispatch(failure(error));
            dispatch(messagesActions.error(error));
        }
        );
    };

    function request(user : UserData  ) {
        return { type: userConstants.LOGIN_REQUEST, user };
    }
    function success(user : UserData ) {
        return { type: userConstants.LOGIN_SUCCESS, user };
    }
    function failure(error : string ) {
        return { type: userConstants.LOGIN_FAILURE, error};
    }
}


function register(user : UserData ) {
    return (dispatch : Dispatch ) => {
      dispatch(request(user));
  
      userService.register(user).then(
        user => {
          dispatch(success(user));
          history.push("/login");
          dispatch(messagesActions.success("Registration successful"));
        },
        error => {
          dispatch(failure(error));
          dispatch(messagesActions.error(error));
        }
      );
    };
  
    function request(user : UserData) {
      return { type: userConstants.REGISTER_REQUEST, user };
    }
    function success(user : UserData ) {
      return { type: userConstants.REGISTER_SUCCESS, user };
    }
    function failure(error : string ) {
      return { type: userConstants.REGISTER_FAILURE, error };
    }
  }