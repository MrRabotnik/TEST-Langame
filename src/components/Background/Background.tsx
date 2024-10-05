import React from "react";
import "./Background.scss";
import IMAGES from "../../utils/images";

const Background = () => {
    return (
        <div className="background-container">
            <div className="top-left-container">
                <p className="number">23</p>
                <p className="text">Стандарт</p>
            </div>
            <div className="top-right-container">
                <img
                    src={IMAGES.vectorRightTop}
                    alt="Vector"
                />
            </div>
            <div className="bottom-left-container">
                <img
                    src={IMAGES.vectorLeftBottom}
                    alt="Vector"
                />
            </div>
            <div className="bottom-right-container">
                <div>EN</div>
                <p>16 : 40</p>
            </div>
        </div>
    );
};

export default Background;
