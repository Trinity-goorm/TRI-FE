import { useState, useEffect } from "react";
import * as style from "./style/Banner.js";
import banner1 from "../../assets/img/banner1.webp";
import banner2 from "../../assets/img/banner2.webp";
import banner3 from "../../assets/img/banner3.webp";
import banner4 from "../../assets/img/banner4.webp";
import banner5 from "../../assets/img/banner5.webp";
import banner6 from "../../assets/img/banner6.webp";
import banner7 from "../../assets/img/banner7.webp";

const banners = [
    banner1,
    banner2,
    banner3,
    banner4,
    banner5,
    banner6,
    banner7
];

const Banner = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [currentIndex]); // ✅ `currentIndex` 변경될 때만 실행

    return (
        <style.SliderContainer>
            {banners.map((image, index) => (
                <style.Slide key={index} active={index === currentIndex}>
                    <img src={image} alt={`Banner ${index + 1}`} />
                </style.Slide>
            ))}
        </style.SliderContainer>
    );
};

export default Banner;