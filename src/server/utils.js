
import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter, Route, matchPath } from 'react-router-dom'
import { Provider } from 'react-redux'

export function render(req, store, Routes) {
      const content = renderToString((
        <Provider store={store}>
          <StaticRouter location={req.path} context={{}}>
            <div>
              { Routes.map(route=> {
                  return <Route {...route} />
                }
              )}
            </div>
          </StaticRouter>
        </Provider>
      ))
    
      return  `
        <html>
            <head>
              </head>
            <body>
              <div id='app'>${content}</div>
              <script>
                window.context = ${JSON.stringify(store.getState())}
              </script>
              <script src='/index.js'></script>
            </body>
          </html>
      `
  // Routes.some(route => {
  //   //匹配不到内层路由
  //   const match = matchPath(req.path, route)
  //   if(match) {
  //     matchRoutes.push(route)
  //   }
  // })
}