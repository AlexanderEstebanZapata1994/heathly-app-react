import  { Parameters } from './User.Actions.Model';

export type RegisterUserResponse = {
    Status : boolean,
    Message : string
}

export type InputParams = Parameters;

export type keyValueType = {
    [key : string] : string
}