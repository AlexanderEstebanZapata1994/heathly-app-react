import {UserData} from './User.Actions.Model'
export type ReduxRootState = {
    authentication :{
        loggedIn : boolean,
        user : UserData
    },
    registration : {

    },
    message : {}
}