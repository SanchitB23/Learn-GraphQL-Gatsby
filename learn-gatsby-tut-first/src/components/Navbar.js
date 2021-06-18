import React, { useState } from "react"
import { Link } from "gatsby"
import { FiAlignJustify } from "react-icons/fi"
import logo from "../assets/images/logo.svg"

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false)

  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
          <button className="nav-btn" onClick={event => setShowLinks(!showLinks)}>
            <FiAlignJustify />
          </button>
        </div>
        <div className={`nav-links ${showLinks ? "show-links" : ""}`}>
          <Link
            to="/"
            className="nav-link" activeClassName="active-link" onClick={event => setShowLinks(!showLinks)}>
            Home
          </Link>
          <Link
            to="/recipes"
            className="nav-link" activeClassName="active-link"
            onClick={event => setShowLinks(!showLinks)}>
            Recipes
          </Link>
          <Link
            to="/tags"
            className="nav-link" activeClassName="active-link"
            onClick={event => setShowLinks(!showLinks)}>
            Tags
          </Link>
          <Link
            to="/about"
            className="nav-link" activeClassName="active-link"
            onClick={event => setShowLinks(!showLinks)}>
            About
          </Link>
          <div className="nav-link contact-link">
            <Link
              to="/contact"
              className="btn">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
