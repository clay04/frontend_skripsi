import React, { useState, useEffect } from "react";
import "../../../App.css"; // Import CSS untuk styling
import { LogoUK, LogoUK1 } from "../../img";
import { Link, useLocation } from "react-router-dom";

const Header = () => {

  const location = useLocation();

  const isActive = (path) => location.pathname === path ? "active-link" : "";

  return (
    <>
      <header id="header" className="header d-flex align-items-center fixed-top">
        <div className="container-fluid container-xl position-relative d-flex align-items-center">
          <Link to="/home" className="logo d-flex align-items-center me-auto">
            {/* Uncomment the line below if you also wish to use an image logo */}
            <img src={LogoUK1}alt="" />
            <h1 className="sitename">SMS</h1>
          </Link>
          <nav id="navmenu" className="navmenu">
            <ul>
              <li><Link to="/home" className={isActive("/home"), "active"}>Home</Link></li>
              <li><Link to="/about" className={isActive("/about")}>About</Link></li>
              <li><Link to="/services" className={isActive("/services")}>Services</Link></li>
              <li><Link to="/portfolio" className={isActive("/portfolio")}>Portfolio</Link></li>
              <li><Link to="/team" className={isActive("/team")}>Team</Link></li>
              <li><Link to="/blog" className={isActive("/blog")}>Blog</Link></li>
              <li className="dropdown">
                <a href="#"><span>Dropdown</span>{" "}<i className="bi bi-chevron-down toggle-dropdown" /></a>
                <ul>
                  <li><a href="#">Dropdown 1</a></li>
                  <li className="dropdown"><a href="#">
                    <span>Deep Dropdown</span>{" "}
                      <i className="bi bi-chevron-down toggle-dropdown" />
                    </a>
                    <ul>
                      <li>
                        <a href="#">Deep Dropdown 1</a>
                      </li>
                      <li>
                        <a href="#">Deep Dropdown 2</a>
                      </li>
                      <li>
                        <a href="#">Deep Dropdown 3</a>
                      </li>
                      <li>
                        <a href="#">Deep Dropdown 4</a>
                      </li>
                      <li>
                        <a href="#">Deep Dropdown 5</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Dropdown 2</a>
                  </li>
                  <li>
                    <a href="#">Dropdown 3</a>
                  </li>
                  <li>
                    <a href="#">Dropdown 4</a>
                  </li>
                </ul>
              </li>
              <li className="listing-dropdown">
                <a href="#">
                  <span>Listing Dropdown</span>{" "}
                  <i className="bi bi-chevron-down toggle-dropdown" />
                </a>
                <ul>
                  <li>
                    <a href="#">Column 1 link 1</a>
                    <a href="#">Column 1 link 2</a>
                    <a href="#">Column 1 link 3</a>
                  </li>
                  <li>
                    <a href="#">Column 2 link 1</a>
                    <a href="#">Column 2 link 2</a>
                    <a href="#">Column 3 link 3</a>
                  </li>
                  <li>
                    <a href="#">Column 3 link 1</a>
                    <a href="#">Column 3 link 2</a>
                    <a href="#">Column 3 link 3</a>
                  </li>
                  <li>
                    <a href="#">Column 4 link 1</a>
                    <a href="#">Column 4 link 2</a>
                    <a href="#">Column 4 link 3</a>
                  </li>
                  <li>
                    <a href="#">Column 5 link 1</a>
                    <a href="#">Column 5 link 2</a>
                    <a href="#">Column 5 link 3</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
            <i className="mobile-nav-toggle d-xl-none bi bi-list" />
          </nav>
          <a className="btn-getstarted flex-md-shrink-0" href="index.html#about">
            Get Started
          </a>
        </div>
      </header>

    </>
  );
};

export default Header;
