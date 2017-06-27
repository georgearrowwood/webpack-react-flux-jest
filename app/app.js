import React from 'react';
// using NavLink for the activeClassName, otherwise, for
// a plain link, use Link.
import { Route, NavLink } from 'react-router-dom';

import Home from './home';
// import Complex from '~/routes/Complex';
// import About from '~/routes/About';

// import styles from './App.scss';

// Our Pure and clean App component. In the browser, we'll wrap
// this inside a BrowserRouter component and put it in the DOM,
// otherwise on server render, we'll stick this in a StaticRouter
// component and renderToString it.

const App = () => (
    <div >
        <header>
            <h1> A demo site. </h1>
        </header>
        <nav>
            <NavLink exact to="/" > home </NavLink>
        </nav>
        <main>
            <Route exact path="/" component={ Home }/>
        </main>
    </div>
)

module.exports = App;
