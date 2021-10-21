import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config'
import { Helmet } from 'react-helmet'
import serialize from 'serialize-javascript'
import MainRouter from '../../client/MainRouter'
import { JssProvider, SheetsRegistry } from 'react-jss'

export default (req, store, context) => {

  const sheets = new SheetsRegistry();
  // const sheet = jss.createStyleSheet();
  // sheets.add(sheet);
  const content = renderToString(
    // sheets.collect(
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        <JssProvider registry={sheets}>
          <div>{renderRoutes(MainRouter)}</div>
        </JssProvider>
      </StaticRouter>
    </Provider>
    // )
  );

  //Helmet
  const helmet = Helmet.renderStatic();
  // <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
  // <script src="/js/library.js"></script>
  // <link rel="stylesheet" href="/css/library.css" />

  // <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" rel="stylesheet">
  //       <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">


  return (
    `
    <!DOCTYPE html>
    <html>
        <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <!-- Libs CSS -->
        <link rel="stylesheet" href="/css/library.css" />
        
        <!-- Main CSS -->
        <link rel="stylesheet" href="/css/bundle.css" />

            ${helmet.title.toString()}
            ${helmet.meta.toString()} 
            <style type="text/css" id="server-side-styles">
            ${sheets.toString()}
          </style>
        </head>
        <body>
          <div id="root">${content}</div>
          <script>
            window.INITIAL_STATE = ${serialize(store.getState())}
          </script>
          <script async src="//www.instagram.com/embed.js"></script>
          <script src="https://js.stripe.com/v3/"></script>
          <script async src="/js/bundle.js"></script>
        </body>
      </html>
        `
  );
};