import React from 'react';

//Import material UI Components
import { useStyles } from './ButtonLogoutStyle'
import { Fab } from '@material-ui/core'
import LogoutIcon from '@material-ui/icons/ExitToApp'
const ButtonLogoutRender = () => {
    const classes = useStyles();
    return (
        <div className= {classes.root} >
            <Fab variant="extended" style= {{marginRight: "5px", marginTop:"5px"}} className = {classes.positionFabButton} color="secondary"><LogoutIcon className = {classes.extendedIcon}/>Logout</Fab>
        </div>
    )
}

export {ButtonLogoutRender}