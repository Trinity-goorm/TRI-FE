// Banner.jsx
import { useState, useEffect, memo } from "react";
import * as style from "./style/Banner"; // 스타일 컴포넌트

const CDN_BASE = "https://d332q83ui14xyg.cloudfront.net/banner"; // ✅ 본인 CDN 주소
const MAX_BANNERS = 15; // ✅ 배너 개수 (필요에 따라 조정)

const bannerUrls = Array.from({ length: MAX_BANNERS }, (_, i) =>
    `${CDN_BASE}/banner${i + 1}.webp`
);

const Banner = memo(() => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [loadedBanners, setLoadedBanners] = useState([bannerUrls[0]]); // 첫 배너만 먼저 로드

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % loadedBanners.length);
    };

    const goToPrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? loadedBanners.length - 1 : prevIndex - 1
        );
    };

    // ✅ 이미지 사전 로딩 함수 (선택)
    const preloadImage = (src) => {
        const img = new Image();
        img.src = src;
    };

    // ✅ 자동 슬라이드 + lazy load
    useEffect(() => {
        const loadNextImage = () => {
            if (loadedBanners.length < bannerUrls.length) {
                const nextImageUrl = bannerUrls[loadedBanners.length];
                preloadImage(nextImageUrl); // 선택 사항
                setLoadedBanners((prev) => [...prev, nextImageUrl]);
            }
        };

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % loadedBanners.length);
            loadNextImage();
        }, 4000);

        return () => clearInterval(interval);
    }, [currentIndex, loadedBanners]);

    return (
        <style.SliderContainer>
            {loadedBanners.map((image, index) => (
                <style.Slide key={index} active={index === currentIndex}>
                    <img src={image} alt={`Banner ${index + 1}`} />
                </style.Slide>
            ))}
            <style.PrevButton onClick={goToPrev}>❮</style.PrevButton>
            <style.NextButton onClick={goToNext}>❯</style.NextButton>
        </style.SliderContainer>
    );
});

export default Banner;