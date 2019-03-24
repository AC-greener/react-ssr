import React from 'react'
import { Route } from 'react-router-dom'
import Home from './container/Home'
import Login from './container/Login'
import Header from './components/Header'

export default [
  // {
  //   path: '*',
  //   component: Header,
  //   key: 'header',
  // },
  {
    path: '/',
    component: Home,
    exact: true,
    key: 'home',
    loadData: Home.loadData
  },
  {
    path: '/login',
    component: Login,
    exact: true,
    key: 'login'
  }
]
