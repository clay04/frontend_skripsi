import React from "react";
import "./signup.css";

import "react-bootstrap";
import "../../vendor/bootstrap-icons/bootstrap-icons.css";
import "../../vendor/bootstrap/css/bootstrap.min.css";
import "../../vendor/bootstrap/css/bootstrap-grid.css";
import "../../vendor/aos/aos.css";
import "../../vendor/glightbox/css/glightbox.min.css";
import "../../vendor/swiper/swiper-bundle.min.css";
import "../../../App.css";
import { Link } from "react-router-dom";

const SignUp = () => {
    return (
        <>
            <link rel="preconnect" href="https://fonts.googleapis.com"></link>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
            <link href="https://fonts.googleapis.com/css2?family=Onest:wght@100..900&display=swap" rel="stylesheet"></link>
        

            <div className="signup-container">
                <div className="signup-left">
                    <div className="signup-title">Silahkan buat akun anda</div>
                    <div className="signup-subtitle">Scholarship<br />Management<br />System</div>
                </div>
                <div className="signup-right">
                    <div className="signup-form">
                        <div className="signup-header">Daftar</div>

                        <div className="signup-label">Email*</div>
                        <input type="text" placeholder="Email" className="signup-input" />
                        <div className="signup-hint">Silahkan masukan email akun unklab anda</div>

                        <div className="signup-label">Password*</div>
                        <input type="password" placeholder="Password" className="signup-input" />
                        <div className="signup-hint">
                            Password minimal harus 8 karakter sudah termasuk huruf besar, huruf kecil, dan angka
                        </div>

                        <Link to="/" className="signup-button">Melanjutkan</Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;