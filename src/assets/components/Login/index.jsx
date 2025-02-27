import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import { LogoUK } from "../../img";

const Login = () => {
  const [userType, setUserType] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (userType === "admin") {
      navigate("/admin-dashboard");
    } else if (userType === "bidang-kemahasiswaan") {
      navigate("/bidang-dashboard");
    } else if (userType === "mahasiswa") {
      navigate("/home");
    } else {
      alert("Please select a user type");
    }
  };

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
        </div>
        <div className="login-box">
            <h2 className="login-title">Login</h2>
            <div className="login-form">
            <div className="dropdown-container-user">
                <select
                className="dropdown-user"
                onChange={(e) => setUserType(e.target.value)}
                value={userType}
                >
                <option value="">Select User</option>
                <option value="admin">Admin</option>
                <option value="bidang-kemahasiswaan">Bidang Kemahasiswaan</option>
                <option value="mahasiswa">Mahasiswa</option>
                </select>
            </div>

            <input type="text" placeholder="Username" className="input-field" />
            <input type="password" placeholder="Password" className="input-field" />
            <Link to="/forget-password" className="forgot-password">Forget Password?</Link>

            <button onClick={handleLogin} className="login-button">Login</button>

            <div className="login-footer">
                <p>
                    Don’t have an account? <a href="/signup" className="sign-in-text">Sign in</a>
                </p>
            </div>
            </div>
        </div>
        </div>
    </>
  );
};

export default Login;
