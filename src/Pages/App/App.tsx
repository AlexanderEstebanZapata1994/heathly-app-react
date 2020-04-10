import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';

//Importando componentes básicos
import { history } from '../../helpers'
import { PrivateRoute } from '../../components/PrivateRoute'
import { Home } from '../Home/Home'
import { LoginIndexContainer }   from '../Login'
import { UserRegisterFormContainer } from '../RegisterUser'


const App = () => {

  return (
    <React.Fragment>
      <Router history = {history}>
        <Switch>
          <PrivateRoute exact path="/" component={Home} />
          <Route exact path="/login" component={LoginIndexContainer} /> {/* chambonada Tipado error */}
          <Route exact path="/register" component={UserRegisterFormContainer} /> {/* chambonada Tipado error */}
          <Redirect from ="*" to="/" />
        </Switch>
      </Router>
    </React.Fragment>
  )
}
export { App } ;