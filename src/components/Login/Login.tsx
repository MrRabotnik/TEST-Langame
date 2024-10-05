import React from "react";
import "./Login.scss";
import IMAGES from "../../utils/images";

const Login = () => {
    return (
        <div className="login-form">
            <div>
                <div className="logo-container">
                    <img
                        src={IMAGES.logo}
                        alt="Logo"
                    />
                </div>

                <form className="inputs">
                    <div className="input-container">
                        <img
                            src={IMAGES.phoneNumber}
                            alt=""
                        />
                        <input
                            type="text"
                            className="input"
                            placeholder="phone number"
                        />
                    </div>
                    <div className="input-container">
                        <img
                            src={IMAGES.lock}
                            alt=""
                        />
                        <input
                            type="password"
                            className="input"
                            placeholder="password"
                        />
                    </div>
                    <div className="forgot-password-container">
                        <a href="#">Forget?</a>
                    </div>
                    <button
                        className="submit-button"
                        type="submit"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
