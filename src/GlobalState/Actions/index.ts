import { ActionTypes } from './actionTypes'

// //Creamos los tipos de datos para acciones y tipos de datos
type params = {
    username : string | null,
    password : string | null
}

export const LoginAction = (credentials : params) => {
    return {
        type: ActionTypes.LOGIN,
        payload: {
            username : credentials.username,
            password : credentials.password
        }
    }
}

export const LogoutAction = () => {
    return {
        type: ActionTypes.LOGOUT
    }
}