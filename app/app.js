import React, {Component} from 'react';
// using NavLink for the activeClassName, otherwise, for
// a plain link, use Link.
import { Route, NavLink } from 'react-router-dom';

import Layout from './components/layouts/LayoutContainer';

import Home from './components/pages/home';
import About from './components/pages/about';

export default class App extends Component {
  render() {
    return(
      <div >
        <main>
          <Layout type="main">
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
          </Layout>
        </main>
      </div>
    );
  }

}
