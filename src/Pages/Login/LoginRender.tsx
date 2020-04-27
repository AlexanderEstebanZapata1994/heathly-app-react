import React from 'react';
import { Link } from "react-router-dom";
import { NavBarContainer } from '../../components';
import { keyValueType } from '../../Model/GenericTypes'

//Importamos componentes de material UI 
import { Container, TextField, Button, Typography, Grid } from '@material-ui/core';
import { Alert, AlertTitle} from '@material-ui/lab'
import { useStyles } from './StyleLoginIndex';

interface IProps {
    handleOnInputChange : (param : keyValueType) => void 
    handleOnFormSubmit : () => void,
    isError : boolean, 
    message? : string | undefined
}

export const LoginIndexRender = ( props : IProps) => {
    const classes = useStyles();
    const {handleOnInputChange, handleOnFormSubmit, isError, message} = props
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let name = event.target.name;
        let value = event.target.value;

        handleOnInputChange({ [name]: value });
    }

    const onSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        handleOnFormSubmit();
    }
    return (
        <React.Fragment>
            <NavBarContainer title={"Login"}/>
            <Container className={classes.root}>
            {isError ? <Alert severity="error">
                <AlertTitle>Error</AlertTitle>
                — <strong>{message}</strong>
            </Alert> : null}
                <Grid container spacing={1}>
                    <Grid container direction="row-reverse" justify="center" alignItems="center" item xs={12}>
                        <TextField name="UserName" id="txtUsername" label="Type your username" onChange={onChange} />
                    </Grid>
                    <Grid container direction="row-reverse" justify="center" alignItems="center" item xs={12}>
                        <TextField name="Password" id="txtPassword" type="password" label="Type your password" onChange={onChange}  />
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