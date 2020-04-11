import React, {useState} from 'react';
import {LoginIndexRender} from './LoginRender'
import {Dispatch} from 'redux'

//We import the materials to work with Redux
import { connect } from 'react-redux';
import { userActions } from '../../GlobalState/Actions'
import { Parameters } from '../../Model'
 

export interface ILoginProps {
  iLogin: any//(inputParams: Parameters) => (dispatch: Dispatch) => void
}

type keyValueType = {
  [key : string] : string
}

//Login Smart Component
const LoginContainer = (props : ILoginProps)   =>{
  const [loginParams, setLoginParams] = useState<Parameters>({userName : "", password : "", submitted : false})

  const handleOnInputChange = ( param : keyValueType) => {  
      setLoginParams({...loginParams, ...param});
  }

  const handleOnFormSubmit =  () =>{
    props.iLogin( {userName :loginParams.userName, password: loginParams.password, submitted : loginParams.submitted} );
  } 
  return (
    <LoginIndexRender
      handleOnInputChange = {handleOnInputChange}
      handleOnFormSubmit = {handleOnFormSubmit}
    />
  );
}

//Relacionamos la acción con las props
const mapDispatchToProps = (dispatch : Dispatch) =>{
  return {
    iLogin: (params : Parameters) => userActions.login(params)(dispatch)
  }
}

//Utilizamos el HOC connect con el componente Login
const connectedLogin = connect(null, mapDispatchToProps)(LoginContainer)
export {connectedLogin as LoginContainer}