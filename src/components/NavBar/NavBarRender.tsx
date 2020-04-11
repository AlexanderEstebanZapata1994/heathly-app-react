import React from 'react';
import { ButtonLogoutContainer }  from '..'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

const NavBarRender = (props : any) =>{
    return(
        <React.Fragment>
            <AppBar position="static">
                <Grid container spacing={1}>
                    <Grid container direction ="row" item md={10}>
                        <Toolbar>
                            <Typography variant="h6" color="inherit">
                                {props.title}
                            </Typography>
                        </Toolbar>
                    </Grid>
                    <Grid container direction = "row" item md={2}>
                        {props.isLoggedIn && <ButtonLogoutContainer/>}
                    </Grid>
                </Grid>
            </AppBar>
            <br />
        </React.Fragment>
    )
}

export {NavBarRender}