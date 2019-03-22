const express = require('express')
const app = express()
import Home from '../container/Home/index'
import React from 'react'
import ReactDOM from 'react-dom/server'
import {StaticRouter} from 'react-router-dom'
import Routes from '../Routes'

app.use(express.static('public'))

app.get('/', function(req, res) {

  const content = ReactDOM.renderToString((
    <StaticRouter location={req.path} context={{}}>
      {Routes}
    </StaticRouter>
  ))
  
  res.send(`
    <html>
      <head>
        </head>
      <body>
        <div id='app'>${content}</div>
        <script src='/index.js'></script>
      </body>
    </html>
  `)
})

app.listen(3000, function() {
  console.log('server started 3000')
})