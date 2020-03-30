import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
const NavBar = () =>{
    return(
        <React.Fragment>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" color="inherit">
                        Healthy App
                    </Typography>
                </Toolbar>
            </AppBar>
            <br />
        </React.Fragment>
    )
}

export {NavBar}