import React, {useState} from 'react';
import {UserRegisterFormRender} from './UserRegisterFormRender'
import {IData} from './UserRegisterTypes'


export const UserRegisterFormContainer = () => {
    const [ userForm, setUser]  = useState<IData>({username : "", password : ""})

    const handleOnSubmit  = (event: React.MouseEvent) => {
        console.log('Guardando');
        console.log(userForm.username)
        console.log(userForm.password)
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
    
 