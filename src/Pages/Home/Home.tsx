import React from 'react'
import { NavBar } from '../../components/NavBar';

export const Home = () =>{

    return(
        <React.Fragment>
            <NavBar title={"Home"}></NavBar>
            <h1>Home</h1>
        </React.Fragment>
    )
}