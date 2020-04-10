import React from 'react';
import {Route, Switch, Router, Redirect} from 'react-router-dom';
import {history} from '../../helpers' 

//Importando componentes básicos
import { LoginContainer }   from '../Login'
import { Home } from '../Home'
import { UserRegisterFormContainer } from '../UserRegisterForm/UserRegisterFormContainer'

const App = () => {
  
  return (
    <React.Fragment>
      <Router history = {history}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={LoginContainer} />
          <Route exact path="/register" component={UserRegisterFormContainer} />
          <Redirect from="*" to="/" />
        </Switch>
      </Router>
    </React.Fragment>
  ) 
}

export { App } ;