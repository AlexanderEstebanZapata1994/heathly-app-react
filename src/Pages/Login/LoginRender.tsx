import React from 'react';
import { Link } from "react-router-dom";
import { NavBar } from '../../components/NavBar';

//Importamos componentes de material UI 
import { Container, TextField, Button, Typography } from '@material-ui/core';
import { useStyles } from './StyleLoginIndex';
import Grid from '@material-ui/core/Grid';



export const LoginIndexRender = ( props : any) => {
    const classes = useStyles();
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let name = event.target.name;
        let value = event.target.value;

        props.handleOnInputChange({ [name]: value });
    }

    const onSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        props.handleOnFormSubmit();
        props.handleOnInputChange({submitted: true })
    }
    return (
        <React.Fragment>
            <NavBar title={"Login"}></NavBar>
            <Container className={classes.root}>
                <Grid container spacing={1}>
                    <Grid container direction="row-reverse" justify="center" alignItems="center" item xs={12}>
                        <TextField name="userName" id="txtUsername" label="Type your username" onChange={onChange} />
                    </Grid>
                    <Grid container direction="row-reverse" justify="center" alignItems="center" item xs={12}>
                        <TextField name="password" id="txtPassword" type="password" label="Type your password" onChange={onChange}  />
                    </Grid>
                    <Grid container direction="row-reverse" justify="center" alignItems="center" item xs={12}>
                        <Button onClick={onSubmit} variant="contained" color="primary">Login</Button>
                    </Grid>
                    <Grid container direction="row-reverse" justify="center" alignItems="center" item xs={12}>
                        <Typography variant="h6" component="h2">
                            <Link to="/register" >not registered yet? Signup now</Link>
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </React.Fragment>
    );
}