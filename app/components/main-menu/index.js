// require('./menu_style.css');
import { NavLink } from 'react-router-dom'
import React, { Component } from 'react'

export default class Menu extends Component {
  render () {
    return (
      <nav>
        <NavLink exact to='/' > home </NavLink>
        <NavLink to='/about' > about </NavLink>
        <NavLink to='/products' > products </NavLink>
      </nav>
    )
  }
}
