import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


//Importando componentes básicos
import  Login   from './Pages/Login/LoginIndex'
import { NavBar } from './components/NavBar/NavBar';
import { Home } from './Pages/Home/Home'
import { UserRegisterForm } from './Pages/UserRegisterForm/UserRegisterForm'
import { NotFound } from './Pages/sharedPages/NotFound/404NotFound'

//REDUX
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import combinedReducers  from './GlobalState/reducers/index'

let store = createStore(combinedReducers, (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__());

const App = () => {
  return (
    <React.Fragment>
      <NavBar></NavBar>
      <Provider store = {store}>
        <BrowserRouter>
            <Switch>
              <Route exact path="/Login" component={Login} />
              <Route exact path="/Home" component={Home} />
              <Route exact path="/NewUser" component={UserRegisterForm} />
              <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
      </Provider>
    </React.Fragment>
  ) 
}

export { App } ;