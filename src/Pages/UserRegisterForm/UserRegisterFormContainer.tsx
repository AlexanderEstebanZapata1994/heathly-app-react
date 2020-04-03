import React from 'react';
import {UserRegisterFormRender} from './UserRegisterFormRender'

export const UserRegisterFormContainer = () => 
   // const myFunction = {handleOnSubmit}
    (
        <UserRegisterFormRender 
        {...{handleOnSubmit}} />
    ) 


const handleOnSubmit = () =>{
    alert('Guardando');
  }