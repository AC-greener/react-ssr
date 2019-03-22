
import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import Routes from '../Routes'
import { Provider } from 'react-redux'
import getStore from '../store/index'

export function render(req) {
  const content = renderToString((
    <Provider store={getStore()}>
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

