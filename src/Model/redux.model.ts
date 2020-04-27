import {UserResponse} from './User.Model'
import { messageAlert } from './MessageAlert.Model'

export type ReduxRootState = {
    Authentication : authentication,
    Registration : registration,
    MessagesAlert : messageAlert
}

export type UserReducerType = {
    type : string,
    payload : authentication | registration
}

export type authentication = {
    isLoggedIn : boolean,
    isLoggingIn : boolean,
    User : UserResponse,
}

export type registration = {
    isSigningUp : boolean,
}