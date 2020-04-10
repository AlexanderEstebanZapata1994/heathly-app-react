import React, {useState} from 'react';
import {LoginIndexRender} from './LoginIndexRender'

//We import the materials to work with Redux
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { LoginAction, Login} from '../../GlobalState/Actions'
import { Credentials, User } from '../../Model/User.model'
 

export interface ILoginProps {
  user : User,
  login: any//(credentials: params) => (dispatch: Dispatch<LoginAction>) => Promise<void>
}

//Login Component
const LoginContainer  = (props : ILoginProps) : any =>{
  const [loginParams, setLoginParams] = useState<Credentials>({username : "", password : "", submitted : false, isLoggingin : false})

  const handleOnInputChange = (event : React.ChangeEvent<HTMLInputElement>) => {
      let name = event.target.name;
      let value = event.target.value;
      
      setLoginParams({...loginParams, [name]: [value]});
  }

  const handleOnFormSubmit =  (event : React.MouseEvent<HTMLButtonElement>) =>{
    
    props.login( {username :loginParams.username, password: loginParams.password} );
    console.log(props)
    debugger;

    event.preventDefault();
  } 
  return (
    <LoginIndexRender
      handleOnInputChange = {handleOnInputChange}
      handleOnFormSubmit = {handleOnFormSubmit}
    />
  );
}
//Esto es para obtener la porción del state que el compoenente necesita
const mapStateToProps = (state : User) => {
  return { user : state}
}

//Relacionamos la acción con las props
const mapDispatchToProps = (dispatch : Dispatch) =>{
  return {
    login : (inputParams : Credentials) => dispatch<LoginAction>(Login(inputParams) as any)
  }
}

//Utilizamos el HOC connect con el componente Login
const connectedLogin = connect(mapStateToProps, mapDispatchToProps)(LoginContainer)
export { connectedLogin as LoginContainer}