import { ActionTypes } from './actionTypes'
import { Dispatch } from 'redux';
import axios from "axios";
import {params, RootState } from '../../Model/LoginModel'


export type loginAction = {
    type : ActionTypes.LOGIN,
    payload : RootState
}

export type loginErrorAction = {
    type : ActionTypes.LOGIN_ERROR,
    payload : string
}

export const myLogin = (credentials : params) => {
    let result : RootState;
    return async  (dispatch: Dispatch) =>{
            await axios.post("https://localhost:44380/api/users", {
                username: credentials.username,
                password: credentials.password
            }).then((res) => {
                result = {
                    credentialsType :{
                        username: credentials.username,
                        password: credentials.password,
                        token: res.data.Token,
                        userId: res.data.UserId,
                        isLoggedIn : true,
                        error:{hasError : false, errorMessage : ""}
                    }
                }
                console.log(result)
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