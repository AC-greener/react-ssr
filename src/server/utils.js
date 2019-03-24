
import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter, Route, matchPath } from 'react-router-dom'
import Routes from '../Routes'
import { Provider } from 'react-redux'
import getStore from '../store/index'

export function render(req) {
  const store = getStore()
  //在这里获取异步服务器端数据
  //要根据用户请求的路由和地址做处理
  //如果访问 / 路径，就拿home异步数据
  //如果访问 /login ，就拿login数据
  const matchRoutes = []
  Routes.some(route => {
    const match = matchPath(req.path, route)
    if(match) {
      matchRoutes.push(route)
    }
  })
  //让matchRoutes里面所有的组件执行loadData方法
  console.log(matchRoutes)
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

