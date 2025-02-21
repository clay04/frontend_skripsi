import React from "react";
import "./forgetpassword.css";
import "react-bootstrap";
import "../../vendor/bootstrap-icons/bootstrap-icons.css";
import "../../vendor/bootstrap/css/bootstrap.min.css";
import "../../vendor/bootstrap/css/bootstrap-grid.css";
import "../../vendor/aos/aos.css";
import "../../vendor/glightbox/css/glightbox.min.css";
import "../../vendor/swiper/swiper-bundle.min.css";
import "../../../App.css";
import { LogoUK, LogoUK1 } from "../../img";
import { Link } from "react-router-dom";

const ForgetPassword = () => {
  return (
    <>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Onest:wght@100..900&display=swap" rel="stylesheet"></link>
        
        <div className="reset-container">
            <img className="reset-logo" src={LogoUK1} alt="Logo" />
            <div className="reset-title">Atur ulang Password</div>

            <div className="reset-box">
                <p className="reset-description">
                    Masukan Email dari akun anda, dan kami akan mengirimkan <br />
                    link untuk mengatur ulang kata sandi
                </p>

                <input type="email" className="reset-input" placeholder="Email" />

                <Link to="/forget-password/verification" className="reset-button">Kirim Email pembaruan kata sandi</Link>
            </div>
        </div>
    </>
  );
};

export default ForgetPassword;