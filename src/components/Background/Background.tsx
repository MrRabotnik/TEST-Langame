import React, { useEffect, useState } from "react";
import "./Background.scss";
import IMAGES from "../../utils/images";

const Background = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 60000);

        return () => clearInterval(interval);
    }, []);

    const formattedTime = time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

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
                <p>{formattedTime}</p>
            </div>
        </div>
    );
};

export default Background;
