import React from 'react';
import {UserRegisterFormRender} from './UserRegisterFormRender'


export const UserRegisterFormContainer = () => (
        <UserRegisterFormRender 
        {...{handleOnSubmit}} />
    ) 

const handleOnSubmit = () =>{
    alert('Guardando');
  }