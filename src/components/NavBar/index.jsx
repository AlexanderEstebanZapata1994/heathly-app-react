import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const NavBar = ({title}) =>{
    return(
        <React.Fragment>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" color="inherit">
                        {title}
                    </Typography>
                </Toolbar>
            </AppBar>
            <br />
        </React.Fragment>
    )
}

export {NavBar}