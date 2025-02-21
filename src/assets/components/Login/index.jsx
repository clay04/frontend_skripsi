import React from "react";
import "./login.css";
import "react-bootstrap";
import "../../vendor/bootstrap-icons/bootstrap-icons.css";
import "../../vendor/bootstrap/css/bootstrap.min.css";
import "../../vendor/bootstrap/css/bootstrap-grid.css";
import "../../vendor/aos/aos.css";
import "../../vendor/glightbox/css/glightbox.min.css";
import "../../vendor/swiper/swiper-bundle.min.css";
import "../../../App.css";
import { LogoUK } from "../../img";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>

        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Onest:wght@100..900&display=swap" rel="stylesheet"></link>
        
        <div className="login-container">
            <img className="logologin" src={LogoUK} alt="Logo" />
        <div className="welcome-box">
            <h1>Welcome,</h1>
            <h2>Scholarship Management System</h2>
            <div className="container-login-prompt">
                <p className="login-prompt">Please Login</p>
                <div data-svg-wrapper className="svg-wrapper">
                    <svg width="70" height="30" viewBox="0 0 96 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M95.4142 16.4142C96.1953 15.6332 96.1953 14.3668 95.4142 13.5858L82.6863 0.857864C81.9052 0.0768156 80.6389 0.0768156 79.8579 0.857864C79.0768 1.63891 79.0768 2.90524 79.8579 3.68629L91.1716 15L79.8579 26.3137C79.0768 27.0948 79.0768 28.3611 79.8579 29.1421C80.6389 29.9232 81.9052 29.9232 82.6863 29.1421L95.4142 16.4142ZM0 17H94V13H0V17Z" fill="black"/>
                    </svg>
                </div>
            </div>
            
        </div>
        <div className="login-box">
            <h2 className="login-title">Login</h2>
            
            <div className="login-form">
            <div className="dropdown-container-user">
                <select className="dropdown-user">
                <option>Select User</option>
                <option>Admin</option>
                <option>Bidang Kemahasiswaan</option>
                <option>User</option>
                </select>
            </div>


            <input type="text" placeholder="Username" className="input-field" />
            <input type="password" placeholder="Password" className="input-field" />
            <Link to="/forget-password" className="forgot-password">Forget Password?</Link>

            <Link to="/home" className="login-button">Login</Link>

            <div className="login-footer">
            <p>Don’t have an account? <Link to="/signup" className="sign-in-text">Sign in</Link></p>
            </div>
            
            </div>
        </div>
        
        </div>
    
    </>
  );
};

export default Login;