const express = require('express')
const app = express()
const Home = require('./src/container/Home/index')
const React = require('react')
const ReactDOM = require('react-dom/server')
const App = ReactDOM.renderToString(<Home />)

app.use(express.static('public'))

app.get('/', function(req, res) {
  res.send(`
    <html>
      <head>
      </head>
      <body>
        ${App}
      <script src='/index.js'></script>
      </body>
    </html>
  `)
})

app.listen(3000, function() {
  console.log('server started 3000')
})