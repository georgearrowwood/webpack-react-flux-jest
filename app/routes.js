// import React from 'react'
import React, { Component } from 'react';
import { Router, Route, Link, browserHistory,  } from 'react-router'

import Home from './components/home'
import Products from './components/products/list'

import Layout from './components/layout'


export default {
  component: Layout,
  childRoutes: [
    {path: '/', component: Home },
    {path: '/products', component: Products},
    {path: '/home', component: Home}
  ]
};
