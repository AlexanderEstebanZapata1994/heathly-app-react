import React from 'react'
import { NavBarContainer } from '../../components';

//Import material UI
import { useStyles } from './HomeStyle'

export const HomeRender = (props : any) =>{
    const classes = useStyles();
    return(
        <React.Fragment>
            <NavBarContainer title ={`Bienvenido Dr ${props.title}`} />
            <h1>Formulario</h1>
            
        </React.Fragment>
    )
}