import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
    <nav className='navbar'>
      <div className='navbar-content'>
        <h1>Movies App</h1>
        <h3>Favourites</h3>
      </div>
    </nav>
    )
  }
}
