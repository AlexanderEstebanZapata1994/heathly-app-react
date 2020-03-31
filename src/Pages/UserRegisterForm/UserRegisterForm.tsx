import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";


//Importamos componentes de material UI 
import * as MUI from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

//Importamos los componenetes necesarios
import Login from '../../Pages/Login/LoginIndex'

export function UserRegisterForm (){
    return (
      // <Router>
      //   <MUI.Container>
      //     <Grid container spacing={1}>
      //       <Grid container direction="row-reverse"  justify="center"  alignItems="center" item xs={12}>
      //         <MUI.Typography variant="h4" component="h2">
      //           Register User
      //         </MUI.Typography>
      //       </Grid>
      //       <Grid container direction="row-reverse"  justify="center"  alignItems="center" item xs={12}>
      //         <MUI.TextField name="username" id="txtUsername" label="Type your username"  />
      //       </Grid>
      //       <Grid container direction="row-reverse"  justify="center"  alignItems="center" item xs={12}>
      //         <MUI.TextField name="password" id="txtPassword" type="password" label="Type your password"  />
      //       </Grid>
      //       <Grid container direction="row-reverse"  justify="center"  alignItems="center" item xs={12}>
      //           <MUI.Button  variant="contained" color="primary">Register user</MUI.Button>
      //       </Grid>
      //       <hr/>
      //       <Grid container direction="row-reverse"  justify="center"  alignItems="center" item xs={12}>
      //         <MUI.Typography variant="h6" component="h2">
      //           <Link to="/" >Already user? Back to login</Link>
      //         </MUI.Typography>
      //       </Grid>
      //     </Grid>
      //     <Switch>
      //       <Route path="/">
      //         <Login />
      //       </Route>
      //     </Switch>
      //   </MUI.Container>  
      // </Router>

      <h1>Formulario de registro</h1>
    )
}