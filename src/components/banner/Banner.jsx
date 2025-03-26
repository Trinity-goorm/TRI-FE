import { useState, useEffect, memo, Suspense } from "react";
import * as style from "./style/Banner.js";
import banner1 from "../../assets/img/banner1.webp"
const bannerImports = [
   "https://cdn.catch-ping.com/banner/banner2.webp",
    "https://cdn.catch-ping.com/banner/banner3.webp",
    "https://cdn.catch-ping.com/banner/banner4.webp",
    "https://cdn.catch-ping.com/banner/banner5.webp",
    "https://cdn.catch-ping.com/banner/banner6.webp",
    "https://cdn.catch-ping.com/banner/banner7.webp",
    "https://cdn.catch-ping.com/banner/banner8.webp",
];

const Banner = memo(() => {
    const bannerCDN1 = "https://d332q83ui14xyg.cloudfront.net/banner/banner1.webp";
    const [currentIndex, setCurrentIndex] = useState(0);
    const [loadedBanners, setLoadedBanners] = useState([bannerCDN1]);

    // ✅ Lazy Loading 적용
    useEffect(() => {
        const loadNextImage =  () => {
            if (loadedBanners.length < bannerImports.length + 1) {
                try {
                    const nextImage = bannerImports[loadedBanners.length - 1];
                    setLoadedBanners((prevBanners) => [...prevBanners, nextImage]);
                } catch (error) {
                    console.error("Failed to load image", error);
                }
            }
        };

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % (loadedBanners.length));
            loadNextImage(); // ✅ 다음 배너 이미지를 필요할 때만 로드
        }, 4000);

        return () => clearInterval(interval);
    }, [currentIndex, loadedBanners]);

    return (
        <style.SliderContainer>
            <Suspense fallback={<div>Loading Banner...</div>}>
                {loadedBanners.map((image, index) => {
                    return (
                        <style.Slide key={index} active={index === currentIndex}>
                            <img src={image} alt={`Banner ${index + 1}`}/>
                        </style.Slide>

                    )}
                )}
            </Suspense>
        </style.SliderContainer>
    );
});

export default Banner;