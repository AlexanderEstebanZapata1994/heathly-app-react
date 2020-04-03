import React, {useState} from 'react';
import {Link} from "react-router-dom";
import { NavBar } from '../../components/NavBar';


//Importamos componentes de material UI 
import * as MUI from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

//We import the materials to work with Redux
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { loginAction, myLogin} from '../../GlobalState/Actions'
import { params, RootState } from '../../Model/Models'
 

// ------------------------------------------------------------------
// ------------------------------------------------------------------
// ------------------------------------------------------------------
// ------------------------------------------------------------------
const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flexGrow: 1,
    }
  })
);

export interface ILoginProps {
  login: (credentials: params) => void,
  loginState : RootState
}

//Login Component
const Login = (props : ILoginProps) =>{
  const [username, setUsername] = useState<string>("")
  const [password, setPassword] = useState<string>("")
    
  const handleOnInputChange = (event : React.ChangeEvent<HTMLInputElement>) => {
      const { name }= event.target;

      if (name === 'username')
        setUsername(event.target.value);
      
      if (name === 'password')
        setPassword(event.target.value);
  }

  const handleOnFormSubmit =  (event : React.MouseEvent<HTMLButtonElement>) =>{
    props.login( {username, password} );
    console.log("volví")
    console.log(props)
    // const {hasError, errorMessage } = props.loginState.loginReducer.error
    // console.log("error")
    // console.log(hasError)
    // if(hasError)
    //   alert(errorMessage)

    event.preventDefault();
  } 
  
  //We define the styles to use on the UI interface
  const classes = useStyles();
  return (
    <React.Fragment>
      <NavBar title={"Login"}></NavBar>
      <MUI.Container className={classes.root}>
        <Grid container spacing={1}>
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
              <Link to="/newUser" >not registered yet? Signup now</Link>
            </MUI.Typography>
          </Grid>
        </Grid>
      </MUI.Container>
    </React.Fragment>
  );
}
//Esto es para obtener la porción del state que el compoenente necesita
const mapStateToProps = (loginState : RootState) => {
  return { loginData : loginState.credentialsType}
}

//Relacionamos la acción con las props
const mapDispatchToProps = (dispatch : Dispatch) =>{
  return {
    login : (credentials : params) => dispatch<loginAction>(myLogin(credentials) as any)
  }
}

//Utilizamos el HOC connect con el componente Login
export default connect(mapStateToProps, mapDispatchToProps)(Login)