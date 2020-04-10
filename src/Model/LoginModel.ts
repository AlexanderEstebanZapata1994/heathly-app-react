// //Creamos los tipos de datos para acciones y tipos de datos
export type Parameters = {
    username : string,
    password : string,
    submitted : boolean
}
export type RootState = {
    User : UserData
}
type ErrorType = {
    hasError : boolean,
    errorMessage : string
}
export type UserData = {
    username : string,
    password : string,
    token : string,
    userId : number,
    isLoggedIn : boolean,
    error : ErrorType
};
