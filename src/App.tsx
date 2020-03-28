import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


//Importando componentes básicos
import {Login}  from './components/Login/LoginIndex'
import { NavBar } from './components/NavBar/NavBar';
import { Home } from './components/Home/Home'
import { UserRegisterForm } from './components/UserRegisterForm/UserRegisterForm'
import { NotFound } from './Pages/404NotFound'

const App = () => {
  return (
    <React.Fragment>
      <NavBar></NavBar>
      <BrowserRouter>
          <Switch>
            <Route path="/Login" component={Login} />
            <Route path="/Home" component={Home} />
            <Route exact path="/NewUser" component={UserRegisterForm} />
            <Route component={NotFound} />
          </Switch>
      </BrowserRouter>
    </React.Fragment>
  ) 
}

export { App } ;