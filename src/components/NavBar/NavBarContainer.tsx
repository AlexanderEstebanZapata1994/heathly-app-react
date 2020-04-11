import React from 'react';
import { useSelector } from 'react-redux'
import {NavBarRender} from './NavBarRender'
import { ReduxRootState } from '../../Model';


interface IProps {
    title : string
}
const NavBarContainer = (props : IProps) => {
    const IsLoggedIn = useSelector((state : ReduxRootState) => state.authentication.loggedIn)
    return (
        <NavBarRender 
            title={props.title}
            isLoggedIn = {IsLoggedIn}
        />
    )
}

export {NavBarContainer}