// import React from 'react'
import React, { Component } from 'react';
import { Router, Route, Link, browserHistory,  } from 'react-router';

import Layout from './components/layouts/layoutContainer';

import Home from './components/pages/home';
import Products from './components/pages/products';
import About from './components/pages/about';

export default {
  component: Layout,
  layout: 'main',
  childRoutes: [
    {path: '/', component: Home },
    {path: '/products', component: Products},
    {path: '/about', component: About}
  ]
};
