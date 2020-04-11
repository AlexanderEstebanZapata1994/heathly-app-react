import React, {useState} from 'react';
import { connect, ConnectedProps } from 'react-redux'
import {userActions} from '../../GlobalState/Actions'
import {ReduxRootState, Parameters, keyValueType, UserData} from '../../Model'

//Importamos el componenete Dumb (Render)
import {UserRegisterFormRender} from './UserRegisterRender'
import { Dispatch } from 'redux';


type  RootState = ReduxRootState

const mapStateToProps = (state : RootState) => {
    console.log(state)
    return ({
    userData : state.authentication.user
})}

const mapDispatchToProps = (dispatch : Dispatch) => {
    return {
        register : (registerUserData : Parameters) => userActions.register(registerUserData)(dispatch)
    }
}
const connector = connect(mapStateToProps, mapDispatchToProps)

type PropsFromRedux = ConnectedProps<typeof connector>
const UserRegisterFormContainer = (props : PropsFromRedux) => {
    const [ user, setUser]  = useState<Parameters>({userName : "", password : "", submitted: false})

    const handleOnInputChange = (parameters : keyValueType ) => {
        setUser({...user, ...parameters})
    }
    const handleOnSubmit  = () => {
        props.register({userName : user.userName, password : user.password, submitted : user.submitted})
    } 
    return (
        <UserRegisterFormRender 
            handleOnInputChange = {handleOnInputChange}
            handleOnSubmit={handleOnSubmit}
        />
    ) 
}
const ComponentConnected = connector(UserRegisterFormContainer)
export {ComponentConnected as UserRegisterFormContainer}