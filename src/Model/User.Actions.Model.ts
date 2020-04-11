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
    HasError : boolean,
    ErrorMessage : string
}
export type UserData = {
    UserId : number,
    UserName : string,
    Token : string,
    IsLoggedIn : boolean,
    Error : ErrorType
};