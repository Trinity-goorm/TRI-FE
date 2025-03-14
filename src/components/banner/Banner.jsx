import { useState, useEffect, memo, Suspense } from "react";
import * as style from "./style/Banner.js";
import banner1 from "../../assets/img/banner1.webp"; // 기본 이미지

const bannerImports = [

    () => import("../../assets/img/banner2.webp"),
    () => import("../../assets/img/banner3.webp"),
    () => import("../../assets/img/banner4.webp"),
    () => import("../../assets/img/banner5.webp"),
    () => import("../../assets/img/banner6.webp"),
    () => import("../../assets/img/banner7.webp"),
    () => import("../../assets/img/banner8.webp"),

];

const Banner = memo(() => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [loadedBanners, setLoadedBanners] = useState([banner1]);

    // ✅ 이미지 동적 로딩
    useEffect(() => {
        Promise.all(bannerImports.map((load) => load().then((mod) => mod.default)))
            .then((images) => setLoadedBanners([banner1,  ...images]))
            .catch((error) => console.error("Failed to load images", error));
    }, []);

    // ✅ 자동 슬라이드 기능
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % loadedBanners.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [loadedBanners]); // 이미지가 로드된 후에만 실행되도록 변경

    return (
        <style.SliderContainer>
            <Suspense fallback={<div>Loading Banner...</div>}>
                {loadedBanners.map((image, index) => (
                    <style.Slide key={index} active={index === currentIndex}>
                        <img key={index} src={image} alt={`Banner ${index + 1}`} />
                    </style.Slide>
                ))}
            </Suspense>
        </style.SliderContainer>
    );
});

export default Banner;