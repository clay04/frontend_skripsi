import React, { useState, useEffect } from "react";
import "../../../App.css"; // Import CSS untuk styling
import { LogoUK, LogoUK1 } from "../../img";
import { Link, useLocation } from "react-router-dom";
import { ToggleButton } from "react-bootstrap";

const Header = () => {

  const location = useLocation();
  //const navigate = useNavigate();

  const isActive = (path) => location.pathname === path ? "active-link" : "";


  const [isHeaderOpen, setIsHeaderOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State untuk cek login
  const [isProfileOpen, setIsProfileOpen] = useState(false); // State untuk toggle dropdown profile
  const [user, setUser] = useState(null);

  const toggleHeader = () => {
    setIsHeaderOpen(!isHeaderOpen);
  };

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    setUser(null);
  };

  useEffect(() => {
    // Cek status login dari localStorage atau state global
    const user = localStorage.getItem("user");
    if (user) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <>
      <header id="header" className={`header d-flex align-items-center fixed-top ${isHeaderOpen ? "open" : ""}`}>
        <div className="container-fluid container-xl position-relative d-flex align-items-center">
          <a href="#" className="logo d-flex align-items-center me-auto">
            {/* Uncomment the line below if you also wish to use an image logo */}
            <img src={LogoUK1}alt="" />
            <h1 className="sitename">Scholarship Management System</h1>
          </a>
          <nav id="navmenu" className="navmenu">
            <ul>
              <li><Link to="/home" className={isActive("/home"), "active"}>Home</Link></li>
              <li><a href="#services" className={isActive("#services")}>About</a></li>
              <li><Link to="/mahasiswa/dashboard" className={isActive("/dashboard/mahasiswa")}>Dashboard</Link></li>   
              {user && <li><p>{user.username}</p></li>}
            </ul>
            <i className="mobile-nav-toggle d-xl-none bi bi-list" onClick={ToggleButton}/>
          </nav>
          {isLoggedIn ? (
            <div className="profile-menu position-relative">
              <button className="btn flex-md-shrink-0 profile-button" onClick={toggleProfile}>
                <i className="bi bi-person-circle" style={{ fontSize: "2rem", marginRight: "8px" }}></i>
              </button>
              {isProfileOpen && (
                <div className="profile-dropdown position-absolute bg-white shadow rounded p-2" style={{ top: '100%', right: 0, zIndex: 1000., width: "200px" }}>
                  <p className="profile-name">{user.username}</p>
                  <Link to="/login" onClick={handleLogout} className="d-block">Logout</Link>
                  <Link to="/mahasiswa/profile" className="d-block">Profile</Link>
                </div>
              )}
            </div>
          ) : (
            <Link to="/login" className="btn-getstarted flex-md-shrink-0">
              Log In
            </Link>
          )}
        </div>
      </header>

    </>
  );
};

export default Header;
