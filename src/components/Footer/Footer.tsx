import React from "react";
import IMAGES from "../../utils/images";
import "./Footer.scss";

const Footer = () => {
    return (
        <footer>
            <nav>
                <a href="/information">Информация</a>
                <a href="/information">Вакансии</a>
                <a href="/information">Помощь</a>
                <a href="/information">Конфиденциальность</a>
                <a href="/information">Правила</a>
                <a href="/information">FAQ</a>
                <a href="/information">Прайс-лист</a>
            </nav>
            <div className="copyright">
                Powered by{" "}
                <img
                    src={IMAGES.logoName}
                    alt="logo name"
                />
                <span>Software</span>
            </div>
        </footer>
    );
};

export default Footer;
