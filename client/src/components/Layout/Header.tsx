import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
  <header>
    <nav className="dt w-100">
      <div className="dtc w2 v-mid pa3">
        Logo
      </div>
      <div className="dtc v-mid tr pa3">
        <Link className="f6 fw4 no-underline black-70 dib ml2 pv2 ph3" to="/login">
          Login
        </Link>
        <Link className="f6 fw4 no-underline black-70 dib ml2 pv2 ph3 ba" to="/signup">
          Sign up
        </Link>
      </div>
    </nav>
  </header>
)

export default Header
