import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'; 
import {Provider} from 'react-redux';
import store from './store';

// store.subscribe(()=>{

    
//     console.log("changes")})
import '../sass/common.scss';
import MainLayout from './containers/MainLayout.js'

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <MainLayout />
        </BrowserRouter>
    </Provider>
, document.getElementById('app'));