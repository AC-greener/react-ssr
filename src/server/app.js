const express = require('express')
const app = express()
import { getStore } from '../store/index'
import { matchRoutes } from 'react-router-config'
import Routes from '../Routes'

import { render } from './utils'
app.use(express.static('public'))

app.get('*', function(req, res) {
  
  const store = getStore()
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
    res.send(render(req, store, Routes))
  })

})

app.listen(3000, function() {
  console.log('server started 3000')
})