import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./assets/components/Home";
import Blog from "./assets/components/Blog";
import Header from "./assets/components/Header";
import BlogDetails from "./assets/components/BlogDetails";
import Login from "./assets/components/Login";
import AOS from "aos";

// CSS
import "aos/dist/aos.css";
import "react-bootstrap";
import "./assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "./assets/vendor/bootstrap/css/bootstrap.min.css";
import "./assets/vendor/bootstrap/css/bootstrap-grid.css";
import "./assets/vendor/glightbox/css/glightbox.min.css";
import "./assets/vendor/swiper/swiper-bundle.min.css";
import "./App.css";
import SignUp from "./assets/components/SignUp";
import ForgetPassword from "./assets/components/ForgetPassword";
import ForgetPasswordVerification from "./assets/components/ForgetPAsswordVerification";

// Komponen Layout Wrapper
function Layout() {
  const location = useLocation();
  const hideHeaderPaths = ["/", "/signup", "/forget-password", "/forget-password/verification"]; // Tambahkan path di mana Header disembunyikan

  return (
    <>
      {!hideHeaderPaths.includes(location.pathname) && <Header />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/forget-password/verification" element={<ForgetPasswordVerification/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog-details" element={<BlogDetails />} />
      </Routes>
    </>
  );
}

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;