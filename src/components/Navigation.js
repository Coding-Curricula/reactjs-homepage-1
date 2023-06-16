import React from 'react'
import { Link } from 'react-router-dom';

import './Navigation.css'

export default function Navigation() {
  return (
    <>
      <nav>
        <div className="logo-container">
          <p className='logo'><Link to="/">Home</Link></p>
        </div>
        <ul>
          <li><Link to="about">About</Link></li>
          <li><Link to="contact">Contact</Link></li>
          <li><Link to="blogs">Blogs</Link></li>
        </ul>
      </nav>
    </>
  )
}
