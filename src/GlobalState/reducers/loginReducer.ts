import { ActionTypes } from '../Actions/actionTypes';
import axios from "axios";

export type credentialsType = {
    username : string,
    password : string,
    token : string,
    userId : number,
    isLoggedIn : boolean
};

const initialState:credentialsType = {
    username : "",
    password : "",
    token : "",
    userId : 0,
    isLoggedIn : false,
}

export type loginAction = {
    type : string,
    payload : credentialsType
}

const loginReducer = (state: credentialsType = initialState, action : loginAction)  =>{
    switch (action.type) {
        case ActionTypes.LOGIN:
        {   
            let result : credentialsType;
            
            console.log(action)
            axios.post("https://localhost:44380/api/users", {
                username: action.payload.username,
                password: action.payload.password
            }).then((res) => {
                console.log(res);
                return result = {
                    username: action.payload.username,
                    password: action.payload.password,
                    token: res.data.token,
                    userId: res.data.userId,
                    isLoggedIn : true
                }
                // return Object.assign(state, {
                //     username: action.payload.username,
                //     password: action.payload.password,
                //     token: res.data.token,
                //     userId: res.data.userId,
                //     isLoggedIn : true
                // })
            });
            break;
        }
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