import React from "react";
import "./login.css"
import "react-bootstrap"
import "../../vendor/bootstrap-icons/bootstrap-icons.css";
import "../../vendor/bootstrap/css/bootstrap.min.css"
import "../../vendor/bootstrap/css/bootstrap-grid.css"

import "../../vendor/aos/aos.css";
import "../../vendor/glightbox/css/glightbox.min.css";
import "../../vendor/swiper/swiper-bundle.min.css"
import "../../../App.css"
import { heroImg, LogoUK } from "../../img";

const Login = () => {
    return(
        <>
            <div className="container">

                <div className="box">
                    <div>
                        <img
                            src={LogoUK}
                            className="logouk img-fluid animated"
                            alt=""
                        />
                    </div>
                    <div>
                        <h1>Welcome</h1>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Login;