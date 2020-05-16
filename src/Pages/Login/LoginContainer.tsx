import React, {useState} from 'react';
import {LoginIndexRender} from './LoginRender'


//We import the materials to work with Redux
import { connect, ConnectedProps} from 'react-redux'
import { userActions } from '../../GlobalState/actions'
import { UserRequest, ReduxRootState, keyValueType} from '../../Model'
import { Dispatch } from 'redux'

const mapStateToProps = (state : ReduxRootState) => (
  {
    Error : state.Authentication.User.Error
  }
)

//Relacionamos la acción con las props
const mapDispatchToProps = (dispatch : Dispatch) =>{
  return {
    iLogin: (params : UserRequest) => userActions.logIn(params)(dispatch)
  }
}

const connector = connect(mapStateToProps, mapDispatchToProps)

type PropsFromRedux = ConnectedProps<typeof connector>

//Login Smart Component
const LoginContainer = (props : PropsFromRedux)  => {
  const [loginParams, setLoginParams] = useState<UserRequest>({UserName : "", Password : ""})

  const handleOnInputChange = ( param : keyValueType) => {  
      setLoginParams({...loginParams, ...param});
  }

  const handleOnFormSubmit =  () =>{
    props.iLogin( {UserName :loginParams.UserName, Password: loginParams.Password} );
  } 
  return (
    <React.Fragment>
      <LoginIndexRender
      handleOnInputChange = {handleOnInputChange}
      handleOnFormSubmit = {handleOnFormSubmit}
      isError = {props.Error.HasError}
      message = {props.Error.ErrorMessage}
      />
    </React.Fragment>
  );
}

const ComponentConnected = connector(LoginContainer)
export {ComponentConnected as LoginContainer}