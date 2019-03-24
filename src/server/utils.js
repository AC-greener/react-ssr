
import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter, Route, matchPath } from 'react-router-dom'
import { matchRoutes } from 'react-router-config'
import Routes from '../Routes'
import { Provider } from 'react-redux'
import { getStore } from '../store/index'

export function render(req, res) {
  const store = getStore()
  console.log(req.path)
  //根据路由的路径，向store里面加数据
  //让matchRoutes里面所有的组件执行loadData方法
  const matchedRoutes = matchRoutes(Routes, req.path)
  const promise = []
  matchedRoutes.forEach(item => {
    if(item.route.loadData) {
      promise.push(item.route.loadData(store))
    }
  })
  Promise.all(promise)
    .then(() => {
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
    
      res.send( `
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
      `)
    }).catch(err => {
      console.log(err)
    })
  // Routes.some(route => {
  //   //匹配不到内层路由
  //   const match = matchPath(req.path, route)
  //   if(match) {
  //     matchRoutes.push(route)
  //   }
  // })

  
}