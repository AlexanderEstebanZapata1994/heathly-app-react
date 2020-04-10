import React, {useState} from 'react';
import { connect } from 'react-redux'


import {UserRegisterFormRender} from './UserRegisterFormRender'
import {IData} from './UserRegisterTypes'

interface IProps {
    
}

export const UserRegisterFormContainer = () => {
    const [ userForm, setUser]  = useState<IData>({user :{username : "", password : ""}, wasSubmitted: false})

    const handleOnSubmit  = (event: React.MouseEvent) => {
        console.log('Guardando');
        console.log(userForm.user.username)
        console.log(userForm.user.password)
        console.log('Guardando');
        event.preventDefault();
    } 
    return (
        <UserRegisterFormRender 
            userForm = {userForm}
            setUser={setUser}
            handleOnSubmit={handleOnSubmit}
        />
    ) 
}
    
 