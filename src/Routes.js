import React from 'react'
import { Route } from 'react-router-dom'
import Home from './container/Home'
import Login from './container/Login'
import Header from './components/Header'
export default (
  <div>
    <Header/>
    <Route path='/' exact  component={Home}></Route>
    <Route path='/login' exact component={Login}></Route>
  </div>
)