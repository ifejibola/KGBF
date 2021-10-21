import 'babel-polyfill'
import express from 'express'
import proxy from 'express-http-proxy'
import cors from 'cors'
import responseTime from 'response-time'
import path from 'path'
import createStore from './helpers/createStore'
import renderer from './helpers/renderer'

import { matchRoutes } from 'react-router-config'
import MainRouter from '../client/MainRouter'
import { sql } from '../Model/db';

import './stripe'
import shopRoute from './routes/shop.route';
//Express
const server = express();
server.set('port', process.env.PORT || 8181);
const port = server.get('port');

server.use(
    '/api',
    // proxy('http://blog-deployer.herokuapp.com', {
    proxy(`http://localhost:${process.env.PORT}`, {
        // proxyReqOptDecorator
        proxyReqOptDecorator(options) {
            // options.headers['x-forwarded-host'] = 'localhost:35';
            return options
        }
    })
);

server.use(responseTime());
server.use(express.json());
server.use(cors())
//enable public folder
// server.use('/api/product', express.static('./'));
// server.use('/product', express.static('./')); // static path prefix 
// server.use('/shop', express.static('./'));
// server.use(express.static('./'));
server.use(express.static(path.join(__dirname, "../public")));
server.use(express.static('public'));
server.use(express.static('Uploads'))

const logger = (req, res, next) => {
    console.log(`${req.method} request for '${req.url}' `);
    next();
};
server.use(logger);

// server.use('/');
server.use('/', shopRoute);
// server.use('/shop', shopRoute);
// server.use('/api', shopRoute);

server.get('*', (req, res) => {

    //Redux
    const store = createStore(req)

    const promises = matchRoutes(MainRouter, req.url).map(({ route }) => {
        console.log(route)
        // console.log(store)
        return route.loadData ? route.loadData(store) : null;
    })
        .map(promise => {
            if (promise) {
                return new Promise((resolve, reject) => {
                    promise.then(resolve).catch(resolve)
                });
            }
        });
    // console.log('promises[matchRoutes]: ', promises)
    // console.log(req.articles)

    Promise.all(promises).then(() => {
        const context = {};
        const content = renderer(req, store, context);
        if (context.url) {
            console.log('context url:', context.url)
            return res.redirect(301, context.url)
        }
        if (context.notFound) {
            res.status(404);
        }
        res.status(200).send(content);

    });
});

server.listen(port, () => {
    console.log(`Server Live @: 'http://localhost:${port}'`);
});