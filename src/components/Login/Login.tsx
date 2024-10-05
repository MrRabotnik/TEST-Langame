import React, { useState } from "react";
import "./Login.scss";
import IMAGES from "../../utils/images";

const Login = () => {
    return (
        <div className="login-form">
            <div className="logo-container">
                <img
                    src={IMAGES.logo}
                    alt="Logo"
                />
            </div>

            <form
                className="inputs"
                action="/"
            >
                <div className="input-container">
                    <img
                        src={IMAGES.phoneNumber}
                        alt=""
                    />
                    <input
                        type="text"
                        className="input"
                        placeholder="Введите номер телефона"
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
                        placeholder="Введите пароль"
                    />
                </div>
                <div className="forgot-password-container">
                    <a href="/forgot-password">Забыли пароль? </a>
                </div>
                <button
                    className="submit-button"
                    type="submit"
                >
                    Войти
                </button>

                <div className="no-account-yet">
                    <p>Если у вас еще нет аккаунта?</p>
                    <a href="/register">Зарегистрируйтесь</a>
                </div>

                <div className="install-the-app">
                    <p>Установите приложение.</p>
                    <div className="apps-container">
                        <img
                            src={IMAGES.playMarket}
                            alt="play market"
                        />
                        <img
                            src={IMAGES.appStore}
                            alt="app store"
                        />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;
