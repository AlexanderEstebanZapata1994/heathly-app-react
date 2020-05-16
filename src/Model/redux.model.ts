import {UserResponse} from './User.Model'
import { PatientResponse } from './Patient.Model'
import { messageAlert } from './MessageAlert.Model'

export type ReduxRootState = {
    Authentication : authentication,
    Registration : registration,
    AllPatientsData : PatientModule,
    MessagesAlert : messageAlert
}

export type authentication = {
    isLoggedIn : boolean,
    isLoggingIn : boolean,
    User : UserResponse,
}

export type registration = {
    isSigningUp : boolean,
}


export type PatientModule = {
    isSelectingPatients : boolean,
    PatientsList : PatientResponse[]
}

// Reducers types
export type UserReducerType = {
    type : string,
    payload : authentication | registration
}

export type PatientReducerType = {
    type : string, 
    payload : PatientModule
}