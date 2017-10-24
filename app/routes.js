import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './components/layouts';

import Home from './components/pages/home';
import About from './components/pages/about';
import Products from './components/pages/products';

import Login from './components/pages/login';
import Logout from './components/auth/logout';

import NotFound from './components/pages/not-found';

import RequireAuth from './components/auth/require-auth';
import RequireNotAuth from './components/auth/require-not-auth';

export default class App extends Component {
  render () {
    return (
      <div>
        <main>
          <Layout name='main'>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About} />
              <Route exact path="/login" component={RequireNotAuth(Login)} />
              <Route exact path="/products" component={RequireAuth(Products)} />
              <Route exact path="/logout" component={RequireAuth(Logout)} />

              <Route component={NotFound} />
            </Switch>  
          </Layout>
        </main>
      </div>
    )
  }
}
