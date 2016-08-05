import express                   from 'express';
import React                     from 'react';
import { renderToString }        from 'react-dom/server'
import { RouterContext, match } from 'react-router';
import routes                    from './universal/routes';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import * as reducers from './universal/reducers';

const app = express();
app.use((req, res) => {

  const reducer = combineReducers(reducers);
  const store = createStore(reducer);

  match({ routes, location: req.url }, (err, redirectLocation, renderProps) => {
    if (err) {
      console.error(err);
      return res.status(500).end('Internal server error');
    } else if (!renderProps){
      return res.status(404).end('Not found.');
    }

    const InitialComponent = (
      <Provider store={store}>
        <RouterContext {...renderProps} />
      </Provider>
    );

    const initialState = store.getState();
    const componentHTML = renderToString(InitialComponent);
    const HTML = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>React Redux with Server Side Rendering Demo</title>

        <script type="application/javascript">
          window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};
        </script>
      </head>
      <body>
        <div id="react-view">${componentHTML}</div>
        <script type="application/javascript" src="/bundle.js"></script>
      </body>
  </html>
`
    res.end(HTML);
  });
});
export default app;
