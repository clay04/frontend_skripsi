import React, { useState, useEffect } from "react";
import "../../../App.css"; // Import CSS untuk styling
import { Link } from "react-router-dom"; 
import { logo } from "../../img";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header id="header" className={`header d-flex align-items-center fixed-top ${scrolled ? "scrolled" : ""}`}>
      <div className="container-fluid container-xl position-relative d-flex align-items-center">
        {/* Logo */}
        <Link to="/home" className="logo d-flex align-items-center me-auto">
          <img src={logo} alt="Logo" />
          <h1 className="sitename">SMS</h1>
        </Link>

        {/* Navigasi */}
        <nav id="navmenu" className={`navmenu ${mobileMenuOpen ? "open" : ""}`}>
          <ul>
          <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/team">Team</Link></li>
            <li><Link to="/blog">Blog</Link></li>

            {/* Dropdown */}
            <li className="dropdown">
              <a href="#">
                <span>Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown" />
              </a>
              <ul>
                <li><a href="#">Dropdown 1</a></li>
                <li className="dropdown">
                  <a href="#">
                    <span>Deep Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown" />
                  </a>
                  <ul>
                    <li><a href="#">Deep Dropdown 1</a></li>
                    <li><a href="#">Deep Dropdown 2</a></li>
                    <li><a href="#">Deep Dropdown 3</a></li>
                    <li><a href="#">Deep Dropdown 4</a></li>
                    <li><a href="#">Deep Dropdown 5</a></li>
                  </ul>
                </li>
                <li><a href="#">Dropdown 2</a></li>
                <li><a href="#">Dropdown 3</a></li>
                <li><a href="#">Dropdown 4</a></li>
              </ul>
            </li>

            {/* Listing Dropdown */}
            <li className="listing-dropdown">
              <a href="#">
                <span>Listing Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown" />
              </a>
              <ul>
                <li><a href="#">Column 1 link 1</a><a href="#">Column 1 link 2</a><a href="#">Column 1 link 3</a></li>
                <li><a href="#">Column 2 link 1</a><a href="#">Column 2 link 2</a><a href="#">Column 3 link 3</a></li>
                <li><a href="#">Column 3 link 1</a><a href="#">Column 3 link 2</a><a href="#">Column 3 link 3</a></li>
                <li><a href="#">Column 4 link 1</a><a href="#">Column 4 link 2</a><a href="#">Column 4 link 3</a></li>
                <li><a href="#">Column 5 link 1</a><a href="#">Column 5 link 2</a><a href="#">Column 5 link 3</a></li>
              </ul>
            </li>

            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>

        {/* Tombol Get Started */}
        <a className="btn-getstarted flex-md-shrink-0" href="#about">Get Started</a>

        {/* Toggle Menu untuk Mobile */}
        <i
          className={`mobile-nav-toggle d-xl-none bi ${mobileMenuOpen ? "bi-x" : "bi-list"}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        />
      </div>
    </header>
  );
};

export default Header;
