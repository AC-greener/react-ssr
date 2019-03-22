
import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import Routes from '../Routes'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

const reducer = (state = {name: 'zhu'}, action) => {
  return state
}

const store = createStore(reducer, applyMiddleware(thunk))
export function render(req) {
  const content = renderToString((
    <Provider store={store}>
      <StaticRouter location={req.path} context={{}}>
        {Routes}
      </StaticRouter>
    </Provider>
  ))

  return `
    <html>
        <head>
          </head>
        <body>
          <div id='app'>${content}</div>
          <script src='/index.js'></script>
        </body>
      </html>
  `
}

