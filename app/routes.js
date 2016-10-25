// import React from 'react'
import React, { Component } from 'react';
import { Router, Route, Link, browserHistory,  } from 'react-router'

import App from './components/app'
import Home from './components/home'


export default [
  { path: '/', component: Home },
  { path: '/app', component: App},
  { path: '/home', component: Home}
]
