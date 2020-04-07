import { ActionTypes }  from '../Actions/actionTypes'
import { Dispatch } from 'redux'
import axios from 'axios'
import { InputParams, RegisterUserResponse } from '../../Model/RegisterUserModel'


export type RegisterUserAction = {
    type : ActionTypes.REGISTER_USER,
    payload : RegisterUserResponse
}

// export const RegisterUser = (params : InputParams) => {

// }