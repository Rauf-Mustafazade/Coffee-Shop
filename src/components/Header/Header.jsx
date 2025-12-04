import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

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
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/about">ABOUT</Link></li>
            <li><Link to="/blogs">BLOGS</Link></li>
            <li><Link to="/shop">SHOP</Link></li>
            <li><Link to="/contact">CONTACT</Link></li>
            <li><Link className="login" to="/login">LOGIN</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
