import React, {Component} from 'react'
import { Route } from 'react-router-dom'

import Layout from './components/layouts'

import Home from './components/pages/home'
import About from './components/pages/about'
import Products from './components/pages/products'

export default class App extends Component {
  render () {
    return (
      <div>
        <main>
          <Layout name='main'>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/products' component={Products} />
          </Layout>
        </main>
      </div>
    )
  }
}
