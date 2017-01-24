import React                     from 'react';
import { renderToString }        from 'react-dom/server'
import { ServerRouter, createServerRenderContext } from 'react-router';
import routes                    from './universal/routes';

import { createServer } from 'http'
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import * as reducers from './universal/reducers';
import RouterApp from './universal/routes';

export default function run() {
  createServer((req, res) => {

    // first create a context for <ServerRouter>, it's where we keep the
    // results of rendering for the second pass if necessary
    const context = createServerRenderContext()
    const reducer = combineReducers(reducers);
    const store = createStore(reducer);

    // render the first time
    let markup = renderToString(
      <ServerRouter
        location={req.url}
        context={context}
        >
        <Provider store={store}>
          <RouterApp/>
        </Provider>
      </ServerRouter>
    )

    // get the result
    const result = context.getResult()

    // the result will tell you if it redirected, if so, we ignore
    // the markup and send a proper redirect.
    if (result.redirect) {
      res.writeHead(301, {
        Location: result.redirect.pathname
      })
      res.end()
    } else {

      // the result will tell you if there were any misses, if so
      // we can send a 404 and then do a second render pass with
      // the context to clue the <Miss> components into rendering
      // this time (on the client they know from componentDidMount)
      if (result.missed) {
        res.writeHead(404)
        markup = renderToString(
          <ServerRouter
            location={req.url}
            context={context}
            >
            <Provider store={store}>
              <RouterApp/>
            </Provider>
          </ServerRouter>
        )
      }

      var initialState = store.getState();
      const HTML = `
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="utf-8">
              <title>React Redux with Server Side Rendering Demo</title>
              <script type="application/javascript">
                window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};
              </script>
              <link rel="stylesheet" href="./styles.css" />
            </head>
            <body>
              <div id="react-view">${markup}</div>
              <script type="application/javascript" src="/bundle.js"></script>
            </body>
        </html>
      `

      res.write(HTML)
      console.log("Server side rendering performed.");
      res.end()
    }
  }).listen(3000)
};
