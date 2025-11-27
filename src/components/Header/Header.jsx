// import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

import React, { useState } from 'react';

const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header>
        <div className="header-all">
          <h1 className="logo"><Link to={"/"}>СOFFEE</Link></h1>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </button>
          <nav>
            <ul className={menuOpen ? "active" : ""}>
              <li><Link to={"/"}>HOME</Link></li>
              <li><Link to={"/about"}>ABOUT</Link></li>
              <li><Link to={"/blogs"}>BLOGS</Link></li>
              <li><Link to={"/shop"}>SHOP</Link></li>
              <li><Link to={"/contact"}>CONTACT</Link></li>
            </ul>
          </nav>
          <button className='login'> <Link to={"/login"}>LOGIN</Link></button>
        </div>

      </header>


    </>
  )
}

export default Header