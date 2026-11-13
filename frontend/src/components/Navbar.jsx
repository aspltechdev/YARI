
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import {
  HiOutlineMenuAlt3,
  HiOutlineX,
} from "react-icons/hi";

import {
  HiArrowUpRight,
} from "react-icons/hi2";

import "./Navbar.css";
import logo from "../assets/logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Industries", path: "/industries" },
    { name: "Products", path: "/products" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="yari-header">
      <nav className="yari-navbar">

        {/* BRAND LOGO */}
        <NavLink
          to="/"
          className="yari-logo"
          onClick={closeMenu}
          aria-label="YARI Home"
        >
          <img src={logo} alt="YARI Logo" />
        </NavLink>

        {/* NAVIGATION MENU */}
        <div
          id="yari-navigation"
          className={`yari-nav-menu ${
            menuOpen ? "is-open" : ""
          }`}
        >
          <div className="yari-nav-links">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `yari-nav-link ${
                    isActive ? "active" : ""
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* CTA BUTTON */}
          <NavLink
            to="/contact"
            className="yari-nav-cta"
            onClick={closeMenu}
          >
            <span>Let's Talk</span>
            <HiArrowUpRight size={19} />
          </NavLink>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button
          type="button"
          className="yari-mobile-toggle"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={
            menuOpen ? "Close navigation" : "Open navigation"
          }
          aria-expanded={menuOpen}
          aria-controls="yari-navigation"
        >
          {menuOpen ? (
            <HiOutlineX size={25} />
          ) : (
            <HiOutlineMenuAlt3 size={25} />
          )}
        </button>

      </nav>
    </header>
  );
}

export default Navbar;
