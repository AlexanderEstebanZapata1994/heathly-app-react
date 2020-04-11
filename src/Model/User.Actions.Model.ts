export type UserActionType = {
    type : string,
    user? : UserData
}

// //Creamos los tipos de datos para acciones y tipos de datos
export type Parameters = {
    userName : string,
    password : string,
    submitted : boolean
}

type ErrorType = {
    hasError : boolean,
    errorMessage : string
}
export type UserData = {
    userId : number,
    userName : string,
    token : string,
    isLoggedIn : boolean,
    error : ErrorType
};