import { ActionTypes } from '../Actions/actionTypes';
import { LoginAction, LoginErrorAction } from '../Actions'
import { User } from '../../Model/User.model'

//Initialize the object
const initialState : User  = {
    username : "",
    password : "",
    token : "",
    userId : 0,
    isLoggedIn : false,
    error : {hasError : false, errorMessage : ""}
}

const loginReducer = (state: User = initialState, action : LoginAction | LoginErrorAction)  => {
    switch (action.type) {

        case ActionTypes.LOGIN:
            return Object.assign(state, action.payload)

        case ActionTypes.LOGIN_ERROR:
            return Object.assign(state, {
                    error : {hasError : true, errorMessage : action.payload}
            });
        default:
            return state;
    }
}

export default loginReducer;