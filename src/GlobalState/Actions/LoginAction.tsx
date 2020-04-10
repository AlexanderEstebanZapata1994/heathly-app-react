import { ActionTypes } from './actionTypes'
import { Dispatch } from 'redux';
import axios from "axios";
import {Credentials, User } from '../../Model/User.model'


export type loginAction = {
    type : ActionTypes.LOGIN,
    payload : User
}

export type loginErrorAction = {
    type : ActionTypes.LOGIN_ERROR,
    payload : string
}

export const Login = (credentials : Credentials) => {
    console.log("hola")
    console.log(credentials.username)
    let result : User;
    return async  (dispatch: Dispatch) => {
            await axios.post("https://localhost:44380/api/users/login", {
                username: credentials.username,
                password: credentials.password
            }).then((res) => {
                result = {
                    username : credentials.username,
                    password: credentials.password,
                    token: res.data.Token,
                    userId: res.data.UserId,
                    isLoggedIn : true,
                    error:{hasError : false, errorMessage : ""}
                }
                dispatch({
                    type: ActionTypes.LOGIN,
                    payload: result
                });
                
            }).catch((error)=>{
                console.log(error)
                dispatch({
                    type: ActionTypes.LOGIN_ERROR,
                    payload: "Ha ocurrido un error."
                })
            });
    }
}