import React, {useState} from 'react';
import {LoginIndexRender} from './LoginIndexRender'
import {Dispatch} from 'redux'

//We import the materials to work with Redux
import { connect } from 'react-redux';
import { userActions } from '../../GlobalState/Actions'
import { Parameters, UserData } from '../../Model/LoginModel'
 

export interface ILoginProps {
  iUser : UserData,
  iLogin: (inputParams: UserData)=> (dispatch: Dispatch) => void
}

//Login Component
const LoginIndexContainer = (props : ILoginProps) : JSX.Element  =>{
  const [loginParams, setLoginParams] = useState<Parameters>({username : "", password : "", submitted : false})

  const handleOnInputChange = (event : React.ChangeEvent<HTMLInputElement>) => {
      let name = event.target.name;
      let value = event.target.value;
  
      setLoginParams({...loginParams, [name]: value});
  }

  const handleOnFormSubmit =  (event : React.MouseEvent<HTMLButtonElement>) =>{
    
    props.iLogin( {...props.iUser, username :loginParams.username, password: loginParams.password} );
    console.log(props)
    setLoginParams({...loginParams, submitted : true})
  
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
const mapStateToProps = (state : UserData) => {
  return { credentials : state}
}

//Relacionamos la acción con las props
const mapDispatchToProps = () =>{
  return {
    iLogin : userActions.login
  }
}

//Utilizamos el HOC connect con el componente Login
const connectedLogin = connect(mapStateToProps, mapDispatchToProps)(LoginIndexContainer)
export {connectedLogin as LoginIndexContainer}