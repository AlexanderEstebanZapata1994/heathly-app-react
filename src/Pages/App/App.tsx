import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';

//Importando componentes básicos
import { history } from '../../helpers'
import { PrivateRoute } from '../../components/PrivateRoute'
import { Home } from '../Home/Home'
import { LoginContainer }   from '../Login'
import { UserRegisterFormContainer } from '../RegisterUser'


const App = () => {

  return (
    <React.Fragment>
      <Router history = {history}>
        <Switch>
          <PrivateRoute exact path="/" component={Home} />
          <Route exact path="/login" component={LoginContainer} /> 
          <Route exact path="/register" component={UserRegisterFormContainer} />
          <Redirect from ="*" to="/" />
        </Switch>
      </Router>
    </React.Fragment>
  )
}
export { App } ;