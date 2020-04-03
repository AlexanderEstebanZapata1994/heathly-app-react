import React from 'react';
import { BrowserRouter, Route, Switch, Router } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory' 

//Importando componentes básicos
import  Login   from './Pages/Login/LoginIndex'
import { Home } from './Pages/Home/Home'
import { UserRegisterFormContainer } from './Pages/UserRegisterForm/UserRegisterFormContainer'
import { NotFound } from './Pages/sharedPages/NotFound/404NotFound'

//REDUX
import { Provider } from 'react-redux'
import store  from './GlobalState/store/store'
// import { useSelector } from 'react-redux'

export const history = createHistory()

const App = () => {
  // const LoggedUser = useSelector(state => state.loginReducer :any)
  return (
    <React.Fragment>
      
      <Provider store = {store}>
        <Router history = {history}>
          <BrowserRouter>
              <Switch>
                <Route exact path="/login" component={Login} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/newUser" component={UserRegisterFormContainer} />
                <Route component={NotFound} />
              </Switch>
          </BrowserRouter>
        </Router>
      </Provider>
    </React.Fragment>
  ) 
}
//export withAuth(App) ver HOC
export { App } ;