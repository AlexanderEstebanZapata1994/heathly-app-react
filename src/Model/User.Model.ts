// //Creamos los tipos de datos para acciones y tipos de datos
export type UserRequest = {
    UserName : string,
    Password : string
}

export type UserResponse = {
    UserId : number,
    UserName : string,
    Name : string,
    Surname : string,
    Token : string,
    Error : ErrorType
};

type ErrorType = {
    HasError : boolean,
    ErrorMessage : string
}