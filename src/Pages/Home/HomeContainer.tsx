import React from 'react';
import { HomeRender } from './HomeRender'
import { useSelector } from 'react-redux'
import {ReduxRootState} from '../../Model'

const HomeContainer = () =>{

    const userName = useSelector((state : ReduxRootState) => state.Authentication.User.Name + " " + state.Authentication.User.Surname)
    return (
        <HomeRender title = {userName} />
    )
}

export { HomeContainer }