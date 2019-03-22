import React from 'react'
import ReactDom from 'react-dom'
import Home from '../container/Home/index'

ReactDom.hydrate(<Home />, document.getElementById('app'))