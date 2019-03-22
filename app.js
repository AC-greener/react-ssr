const express = require('express')
const app = express()
const Home = require('./src/container/Home/index')
const React = require('react')
const ReactDOM = require('react-dom/server')
const reactTostring = ReactDOM.renderToString
app.get('/', function(req, res) {
  res.send(reactTostring(<Home />))
})

app.listen(3000, function() {
  console.log('server started 3000')
})