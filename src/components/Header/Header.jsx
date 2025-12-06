import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { NavLink } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState('EN');

  return (
    <header>
      <div className="header-all">
        {/* Logo */}
        <h1 className="logo"><Link to="/">COFFEE</Link></h1>

        {/* Right buttons */}
        <div className="header-user">
          <button className="icon-btn" title="Favorites">⭐</button>
          <select
            className="language-select"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="EN">EN</option>
            <option value="RU">RU</option>
            <option value="AZ">AZ</option>
            <option value="TR">TR</option>
          </select>
          {/* Hamburger menu button (mobile only) */}
          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>

        {/* Navigation links */}
        <nav>
          <ul className={menuOpen ? 'active' : ''}>
            <li><NavLink to="/" className={({ isActive }) => (isActive ? "link active" : "link")}>HOME</NavLink></li>
            <li><NavLink to="/about" className={({ isActive }) => (isActive ? "link active" : "link")}>ABOUT</NavLink></li>
            <li><NavLink to="/blogs" className={({ isActive }) => (isActive ? "link active" : "link")}>BLOGS</NavLink></li>
            <li><NavLink to="/shop" className={({ isActive }) => (isActive ? "link active" : "link")}>SHOP</NavLink></li>
            <li><NavLink to="/contact" className={({ isActive }) => (isActive ? "link active" : "link")}>CONTACT</NavLink></li>
            <li><NavLink className="login" to="/login">LOGIN</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
