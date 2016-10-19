// import React from 'react'
import React, { Component } from 'react';
import { Router, Route, Link, browserHistory,  } from 'react-router'

import App from './components/app'
import Home from './components/home'
import Main from './components/main'

export default {
  path: '',
  component: Main,
  childRoutes: [
    { path: '/', component: Home },
    { path: '/app', component: App},
    { path: '/home', component: Home}
  ]
};
