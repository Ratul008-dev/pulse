import React, { useState } from 'react'
import { FaBars, FaXmark } from 'react-icons/fa6'
import './navbar.css'
import { NavLink } from 'react-router-dom'

function Navbar({ theme, setTheme }) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      <nav className={`navbar ${theme}`}>
        
        <div className="logo">
          <img src="image/logo.png" alt="" className='logo-image'/>
         <h2>Pulse</h2>
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          {isOpen ? <FaXmark /> : <FaBars />}
        </div>

        
        <div className={`nav-links ${isOpen ? "open" : ""}`}>
          <NavLink className={({ isActive }) => (isActive ? "active-link" : "")} to="/">
            Home
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? "active-link" : "")} to="/about">
            About
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? "active-link" : "")} to="/blog">
            Blog
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? "active-link" : "")} to="/contact">
            Contact
          </NavLink>
        </div>

        
        <button onClick={toggleTheme} className="theme-toggle">
          {theme === "light" ? "🌙 " : "☀️ "}
        </button>
      </nav>
    </div>
  )
}

export default Navbar
