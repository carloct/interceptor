import React from 'react'
import { Link } from 'react-router-dom'

const spacerStyle = {
  margin: 'auto'
}

const Header = () => (
  <div className="main-header">
    <div className="logo">
      <img src="/images/logo.png" />
    </div>
    <div style={spacerStyle}></div>
    <div className="header-part-right">
      <Link to="/login" className="mr-3">Log in</Link>
      <Link to="/signup" className="btn btn-outline-primary m-1 mr-3">Sign up</Link>
    </div>
  </div>
)

export default Header
