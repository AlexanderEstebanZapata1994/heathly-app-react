import { ActionTypes } from '../Actions/actionTypes';
import { loginAction, logoutAction } from '../Actions'


export type credentialsType = {
    username : string,
    password : string,
    token : string,
    userId : number,
    isLoggedIn : boolean
};

const initialState : credentialsType = {
    username : "",
    password : "",
    token : "",
    userId : 0,
    isLoggedIn : false,
}

const loginReducer = (state: credentialsType = initialState, action : loginAction | logoutAction)  =>{
    switch (action.type) {
        case ActionTypes.LOGIN:
            return Object.assign(state, action.payload)
        case ActionTypes.LOGOUT:
        {
            return Object.assign(state, {
                    username: "",
                    password: "",
                    token: "",
                    userId: 0,
                    isLoggedIn : false
            });
        }
        default:
            return state;
    }
}

export default loginReducer;