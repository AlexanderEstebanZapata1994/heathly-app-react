import React from 'react';
import { HomeRender } from './HomeRender'
import { useSelector } from 'react-redux'
import {ReduxRootState} from '../../Model'

const HomeContainer = () =>{

    const userName = useSelector((state : ReduxRootState) => state.authentication.user.UserName)
    return (
        <HomeRender title = {userName} >
            
        </HomeRender>
    )
}

export { HomeContainer }