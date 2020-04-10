import React from 'react';
import { render as Render} from 'react-dom';
import { Provider } from 'react-redux'

import { store } from './GlobalState/store'
import {App} from './Pages/App';

Render(
    <Provider store = {store}>
        <App />
    </Provider>
    , document.getElementById('root')
);