import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'

import store from './GlobalState/store/store'
import {App} from './Pages/App/App';

render(
    <Provider store = {store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);