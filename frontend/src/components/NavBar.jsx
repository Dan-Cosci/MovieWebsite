import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Navbar.css'

const NavBar = () => {
  return (
    <div className='navbar'>
      <div className="navbar-brand">
        <Link to="/" >Movie App</Link>
      </div>
      <div className="navbar-links">
        <Link to="/" className='navbar-link'>Home</Link>
        <Link to="/favourites" className='navbar-link'>Favourites</Link>
      </div>      
    </div>
  )
}

export default NavBar
