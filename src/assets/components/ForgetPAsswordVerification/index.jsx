import React from "react";
import "./forgetpasswordverification.css";
import "react-bootstrap";
import "../../vendor/bootstrap-icons/bootstrap-icons.css";
import "../../vendor/bootstrap/css/bootstrap.min.css";
import "../../vendor/bootstrap/css/bootstrap-grid.css";
import "../../vendor/aos/aos.css";
import "../../vendor/glightbox/css/glightbox.min.css";
import "../../vendor/swiper/swiper-bundle.min.css";
import "../../../App.css";
import { LogoUK1 } from "../../img";
import { Link } from "react-router-dom";

const ForgetPasswordVerification = () => {
  return (
    <>

        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Onest:wght@100..900&display=swap" rel="stylesheet"></link>
        
        <div className="verification-container">
            <div className="verification-box">
                <img className="verification-logo" src={LogoUK1} alt="Logo" />

                <p className="verification-greeting">Hai,</p>
                <p className="verification-text">
                Permintaan untuk mengatur ulang kata sandi Anda telah dibuat.
                </p>
                <p className="verification-text">
                Silahkan klik tombol di bawah ini untuk mengatur ulang kata sandi.
                </p>

                <button className="verification-button">Ubah kata sandi</button>

                <p className="verification-text">
                Jika tidak membuat permintaan lupa kata sandi,
                </p>
                <p className="verification-text">Silahkan abaikan email ini.</p>
            </div>
        </div>
            
    </>
  );
};

export default ForgetPasswordVerification;