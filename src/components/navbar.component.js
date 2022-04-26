import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/navbar.css'

export default class Navbar extends Component {
  render() {
    return (
      <nav className="menu-bar">
        <div className='item title'> 
          Benten Tracker
        </div>
        <div className='title'>
            <a className='item'>
            <Link to="/">Activity</Link>
            </a>
            <a className='item'>
            <Link to="/create">Add Activity</Link>
            </a>
            <a className='item'>
            <Link to="/user">User</Link>
            </a>
        </div>
      </nav>
    );
  }
}