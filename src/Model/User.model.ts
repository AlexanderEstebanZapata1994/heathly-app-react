// //Creamos los tipos de datos para acciones y tipos de datos
export type Credentials = {
    username : string,
    password : string,
    submitted : boolean,
    isLoggingin : boolean
}

type errorType = {
    hasError : boolean,
    errorMessage : string
}
export type User = {
    username : string,
    password : string,
    token : string,
    userId : number,
    isLoggedIn : boolean,
    error : errorType
};