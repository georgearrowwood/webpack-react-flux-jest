import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router'

export default ({ children, location: { pathname } }) => {
    return (
      <div>
        <div className="nav">
          <Link to="/">Home</Link>
          <Link to="/app">App</Link>
          <Link to="/home">Home</Link>
          Home13234
        </div>

        {React.cloneElement(children || <div/>, { key: pathname })}
      </div>
    )
}
