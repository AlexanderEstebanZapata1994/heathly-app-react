import  React from 'react'; 
import {Link} from "react-router-dom";
import { NavBar } from '../../components/NavBar';

//Importamos componentes de material UI 
import {Container, TextField, Button, Typography } from '@material-ui/core';
import {useStyles} from './StyleLoginIndex';
import Grid from '@material-ui/core/Grid';

interface IProps {
    handleOnInputChange : (event : React.ChangeEvent<HTMLInputElement>) => void,
    handleOnFormSubmit: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

export const LoginIndexRender = ({handleOnInputChange, handleOnFormSubmit} : IProps) =>{
    const classes = useStyles();
    return (
        <React.Fragment>
            <NavBar title={"Login"}></NavBar>
            <Container className={classes.root}>
                <Grid container spacing={1}>
                    <Grid container direction="row-reverse"  justify="center"  alignItems="center" item xs={12}>
                        <TextField name="username" id="txtUsername" label="Type your username" onChange={handleOnInputChange} />
                    </Grid>
                    <Grid container direction="row-reverse"  justify="center"  alignItems="center" item xs={12}>
                        <TextField name="password" id="txtPassword" type="password" label="Type your password" onChange={handleOnInputChange} />
                    </Grid>
                    <Grid container direction="row-reverse"  justify="center"  alignItems="center" item xs={12}>
                        <Button onClick={handleOnFormSubmit} variant="contained" color="primary">Login</Button>
                    </Grid>
                    <Grid container direction="row-reverse"  justify="center"  alignItems="center" item xs={12}>
                        <Typography variant="h6" component="h2">
                            <Link to="/newUser" >not registered yet? Signup now</Link>
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </React.Fragment>
    );
}