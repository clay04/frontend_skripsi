import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./assets/components/Home"; // Tambahkan halaman utama jika ada
import Blog from "./assets/components/Blog";
import Header from "./assets/components/Header"
import BlogDeatails from "./assets/components/BlogDetails";
import "react-bootstrap"
import "./assets/vendor/bootstrap-icons/bootstrap-icons.css"
import "./assets/vendor/bootstrap/css/bootstrap.min.css"
import  "./assets/vendor/bootstrap/css/bootstrap-grid.css"

import "./assets/vendor/aos/aos.css"
import "./assets/vendor/glightbox/css/glightbox.min.css"
import "./assets/vendor/swiper/swiper-bundle.min.css"
import "./App.css"

import { useEffect } from "react";
import AOS from "aos";
import "./assets/vendor/aos/aos.css";
import Login from "./assets/components/Login";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); 
  }, []);
  
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog-details" element={<BlogDeatails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
