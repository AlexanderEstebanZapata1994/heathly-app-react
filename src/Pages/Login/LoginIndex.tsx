import React, {useState, useEffect} from 'react';

import {Link} from "react-router-dom";

//Importamos componentes de material UI 
import * as MUI from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

//Importamos los componenetes necesarios
import { LoginApiService } from '../../API/LoginApi'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    }
  })
);

//Tipeados de variables
type User = {
  UserId : number,
  Username : string,
  Token : string
}

export const Login = (props : any) =>{
  const [username, setUsername] = useState<string | null>(null)
  const [password, setPassword] = useState<string | null>(null)
  const [user, setUser] = useState<User | null> (null)

  
  const handleOnInputChange = (event : React.ChangeEvent<HTMLInputElement>) => {
      console.log(event);
      const { name }= event.target;

      if (name === 'username')
        setUsername(event.target.value);
      
      if (name === 'password')
        setPassword(event.target.value);
  }

  const handleOnFormSubmit =  (event : React.MouseEvent<HTMLButtonElement>) =>{
    LoginApiService(username, password).then((response) =>{
        const data = response.data;
        setUser(data);
    })
    .catch(()=>{
        alert(`the user and password don't match`);
    });
    event.preventDefault();
  } 

  useEffect(() => {
    if(user){
      props.history.push('/Home');
    }
  })
  
  //We define the styles to use on the UI interface
  const classes = useStyles();
  return (
    <React.Fragment>
      <br />
      <MUI.Container className={classes.root}>
        <Grid container spacing={1}>
          <Grid container direction="row-reverse"  justify="center"  alignItems="center" item xs={12}>
            <MUI.Typography variant="h4" component="h2">
                Login
            </MUI.Typography>
          </Grid>
          <Grid container direction="row-reverse"  justify="center"  alignItems="center" item xs={12}>
            <MUI.TextField name="username" id="txtUsername" label="Type your username" onChange={handleOnInputChange} />
          </Grid>
          <Grid container direction="row-reverse"  justify="center"  alignItems="center" item xs={12}>
            <MUI.TextField name="password" id="txtPassword" type="password" label="Type your password" onChange={handleOnInputChange} />
          </Grid>
          <Grid container direction="row-reverse"  justify="center"  alignItems="center" item xs={12}>
              <MUI.Button onClick={handleOnFormSubmit} variant="contained" color="primary">Login</MUI.Button>
          </Grid>
          <hr/>
          <Grid container direction="row-reverse"  justify="center"  alignItems="center" item xs={12}>
            <MUI.Typography variant="h6" component="h2">
              <Link to="/NewUser" >not registered yet? Signup now</Link>
            </MUI.Typography>
          </Grid>
        </Grid>
      </MUI.Container>
    </React.Fragment>
  );
}