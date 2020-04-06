// //Creamos los tipos de datos para acciones y tipos de datos
export type params = {
    username : string,
    password : string
}
export type RootState = {
    credentialsType : credentialsType
}
type errorType = {
    hasError : boolean,
    errorMessage : string
}
export type credentialsType = {
    username : string,
    password : string,
    token : string,
    userId : number,
    isLoggedIn : boolean,
    error : errorType
};