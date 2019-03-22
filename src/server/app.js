const express = require('express')
const app = express()

import { render } from './utils'
app.use(express.static('public'))

app.get('*', function(req, res) {
  res.send(render(req))
})

app.listen(3000, function() {
  console.log('server started 3000')
})