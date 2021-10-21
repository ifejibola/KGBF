import 'babel-polyfill'
import React from 'react'
import ReactDOM, { hydrate } from 'react-dom'
// import { BrowserRouter as Router } from 'react-router-dom'

import { renderRoutes } from 'react-router-config'
import { Provider } from 'react-redux'
import store from './store';

import { createBrowserHistory } from 'history'
//Routes
import MainRouter from './MainRouter';
import { Router } from 'react-router'

const customHistory = createBrowserHistory();
console.log('history: ', customHistory)
ReactDOM.hydrate(
    // ReactDOM.render(
    <Provider store={store}>
        {/* <Router forceRefresh={true}> */}
        <Router history={customHistory}>
            <div>
                {renderRoutes(MainRouter)}
            </div>
        </Router>
    </Provider>,
    document.getElementById('root')
    // document.querySelector('#root')
    , () => {
        const ssStyles = document.getElementById('server-side-styles')
        console.log('ssStyles', ssStyles)
        ssStyles.parentNode.removeChild(ssStyles)
    });