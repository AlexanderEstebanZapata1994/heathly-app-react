import React, {useState} from 'react';
import { connect, ConnectedProps } from 'react-redux'
import {userActions} from '../../GlobalState/actions'
import {ReduxRootState, UserRequest, keyValueType} from '../../Model'

//Importamos el componenete Dumb (Render)
import {UserRegisterFormRender} from './UserRegisterRender'
import { Dispatch } from 'redux';


const mapStateToProps = (state : ReduxRootState) => ({
    userData : state.Authentication.User
})

const mapDispatchToProps = (dispatch : Dispatch) => {
    return {
        register : (registerUserData : UserRequest) => userActions.register(registerUserData)(dispatch)
    }
}
const connector = connect(mapStateToProps, mapDispatchToProps)

type PropsFromRedux = ConnectedProps<typeof connector>

const UserRegisterFormContainer = (props : PropsFromRedux) => {
    const [ user, setUser]  = useState<UserRequest>({UserName : "", Password : ""})

    const handleOnInputChange = (parameters : keyValueType ) => {
        setUser({...user, ...parameters})
    }
    const handleOnSubmit  = () => {
        props.register({UserName : user.UserName, Password : user.Password})
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