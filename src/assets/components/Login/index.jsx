import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import { LogoUK } from "../../img";

import "react-bootstrap"
import "../../vendor/bootstrap-icons/bootstrap-icons.css";
import "../../vendor/bootstrap/css/bootstrap.min.css"
import "../../vendor/bootstrap/css/bootstrap-grid.css"

import "../../vendor/aos/aos.css";
import "../../vendor/glightbox/css/glightbox.min.css";
import "../../vendor/swiper/swiper-bundle.min.css"

const Login = () => {
  const [userType, setUserType] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    document.getElementById("username").focus();
  }, []);

  const handleLogin = async () => {
    if (!userType || !username || !password) {
      setError("All fields are required");
      return;
    }

    setLoading(true);
    setError("");

    try {
      // Simulasi respons API
      const response = await fakeApiLogin(userType, username, password);

      if (response.success) {
        localStorage.setItem("user", JSON.stringify(response.user));
        navigate(response.redirect);
      } else {
        setError(response.message);
      }
    } catch (err) {
      setError("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const fakeApiLogin = (userType, username, password) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (username === "admin" && password === "1234" && userType === "admin") {
          resolve({ success: true, user: { username, userType }, redirect: "/admin-dashboard" });
        } else if (username === "bidang" && password === "1234" && userType === "bidang-kemahasiswaan") {
          resolve({ success: true, user: { username, userType }, redirect: "/bidang-dashboard" });
        } else if (username === "mahasiswa"&& password === "12345" && userType === "mahasiswa"){
          resolve({ success: true, user: { username, userType }, redirect: "/home" });
        } else {
          resolve({ success: false, message: "Invalid username or password" });
        }
      }, 1000);
    });
  };

  return (
    <>
      <div className="login-container">
        <img className="logologin" src={LogoUK} alt="Logo" />
        <div className="welcome-box">
          <h1>Welcome,</h1>
          <h2>Scholarship Management System</h2>
        </div>
        <div className="login-box">
          <h2 className="login-title">Login</h2>
          {error && <div className="error-message">{error}</div>}
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

            
            <input
              id="username"
              type="text"
              placeholder="Username"
              className="input-field"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <div className="password-container">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="input-field"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                className="btn show-password-btn bg-transparent btn-outline-primary btn-transparent"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <i class="bi bi-eye"></i> : <i class="bi bi-eye-slash"></i>}
              </button>
            </div>

            <Link to="/forget-password" className="forgot-password">Forget Password?</Link>

            <button onClick={handleLogin} className="login-button" disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </button>

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
