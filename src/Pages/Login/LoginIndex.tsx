import React, {useState} from 'react';
import {Link} from "react-router-dom";


//Importamos componentes de material UI 
import * as MUI from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';



//We import the materials to work with Redux
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { loginAction, myLogin, credentialsType, params} from '../../GlobalState/Actions'




// ------------------------------------------------------------------
// ------------------------------------------------------------------
// ------------------------------------------------------------------
// ------------------------------------------------------------------
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    }
  })
);

//Login Component
const Login = () =>{
  const [username, setUsername] = useState<string>("")
  const [password, setPassword] = useState<string>("")
    
  const handleOnInputChange = (event : React.ChangeEvent<HTMLInputElement>) => {
      console.log(event);
      const { name }= event.target;

      if (name === 'username')
        setUsername(event.target.value);
      
      if (name === 'password')
        setPassword(event.target.value);
  }

  const handleOnFormSubmit =  (event : React.MouseEvent<HTMLButtonElement>) =>{
    console.log("entre")
    myLogin( {username, password} );
    event.preventDefault();
  } 
  
  //We define the styles to use on the UI interface
  const classes = useStyles();
  return (
    <React.Fragment>
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

const mapStateToProps = (state : credentialsType) => {
  return {credentials : state}
}

const mapDispatchToProps = (dispatch : Dispatch) =>{
  return {
    login : (credentials : params) => dispatch<loginAction>(myLogin(credentials) as any)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)