import React, {useState} from 'react';
import {LoginIndexRender} from './LoginIndexRender'

//We import the materials to work with Redux
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { LoginAction, myLogin} from '../../GlobalState/Actions'
import { params, RootState } from '../../Model/LoginModel'
 

export interface ILoginProps {
  credentials : RootState,
  login: (credentials: params) => void
}

//Login Component
const Login: React.FC<ILoginProps> = (props : ILoginProps) =>{
  const [loginParams, setLoginParams] = useState<params>({username : "", password : ""})

  const handleOnInputChange = (event : React.ChangeEvent<HTMLInputElement>) => {
      let name = event.target.name;
      let value = event.target.value;
      
      setLoginParams({...loginParams, [name]: value});
  }

  const handleOnFormSubmit =  (event : React.MouseEvent<HTMLButtonElement>) =>{
    
    props.login( {username :loginParams.username, password: loginParams.password} );
    console.log(props)
    debugger;
    // const {hasError, errorMessage } = props.loginState.credentialsType.error

    // if(hasError)
    //   alert(errorMessage)
    // else
    //   alert("redireciconar")

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
const mapStateToProps = (state : RootState) => {
  return { credentials : state.credentials}
}

//Relacionamos la acción con las props
const mapDispatchToProps = (dispatch : Dispatch) =>{
  return {
    login : (inputParams : params) => dispatch<LoginAction>(myLogin(inputParams) as any)
  }
}

//Utilizamos el HOC connect con el componente Login
export default connect(mapStateToProps, mapDispatchToProps)(Login)