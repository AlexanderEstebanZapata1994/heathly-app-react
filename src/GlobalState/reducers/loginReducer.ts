import { ActionTypes } from '../Actions/actionTypes';
import { loginAction, logoutAction, loginErrorAction } from '../Actions'
import { RootState } from '../../Model/Models'

//Initialize the object
const initialState : RootState  = {
    credentialsType : {
        username : "",
        password : "",
        token : "",
        userId : 0,
        isLoggedIn : false,
        error : {hasError : false, errorMessage : ""}
    }
}

const loginReducer = (state: RootState = initialState, action : loginAction | logoutAction | loginErrorAction)  => {
    switch (action.type) {

        case ActionTypes.LOGIN:
            return Object.assign(state, action.payload)

        case ActionTypes.LOGIN_ERROR:
            return Object.assign(state, {
                    error : {hasError : true, errorMessage : action.payload}
            });

        case ActionTypes.LOGOUT:
            return Object.assign(state, {
                username: "",
                password: "",
                token: "",
                userId: 0,
                isLoggedIn : false
            });

        default:
            return state;
    }
}

export default loginReducer;