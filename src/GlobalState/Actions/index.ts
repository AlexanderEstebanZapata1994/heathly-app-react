import { ActionTypes } from './actionTypes'
import axios from "axios";
import { Dispatch } from 'redux';


// //Creamos los tipos de datos para acciones y tipos de datos
export type params = {
    username : string,
    password : string
}

export type credentialsType = {
    username : string,
    password : string,
    token : string,
    userId : number,
    isLoggedIn : boolean
};

export type loginAction = {
    type : ActionTypes.LOGIN,
    payload : credentialsType
}

export type logoutAction = {
    type : ActionTypes.LOGOUT
}

export const myLogin = (credentials : params) => {
    let result : credentialsType;
    return async (dispatch: Dispatch) =>{
        axios.post("https://localhost:44380/api/users", {
                username: credentials.username,
                password: credentials.password
            }).then((res) => {
                result = {
                    username: credentials.username,
                    password: credentials.password,
                    token: res.data.token,
                    userId: res.data.userId,
                    isLoggedIn : true
                }
            });
            dispatch({
                type: ActionTypes.LOGIN,
                payload: result
            })
    }
}