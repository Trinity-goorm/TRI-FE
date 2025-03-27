import { useState, useEffect, memo, Suspense } from "react";
import * as style from "./style/Banner.js";
import banner1 from "../../assets/img/banner1.webp"; // 기본 이미지

/*
const bannerImports = [
    () => import((`../../assets/img/banner2.webp`)),
    () => import("../../assets/img/banner3.webp"),
    () => import("../../assets/img/banner4.webp"),
    () => import("../../assets/img/banner5.webp"),
    () => import("../../assets/img/banner6.webp"),
    () => import("../../assets/img/banner7.webp"),
    () => import("../../assets/img/banner8.webp"),
];
*/

const bannerModules = import.meta.glob('../../assets/img/banners/*.webp');
const bannerImports = Object.entries(bannerModules)
    .sort(([a], [b]) => {
        const getNumber = (filename) => {
            const match = filename.match(/banner(\d+)\.webp$/);
            return match ? parseInt(match[1], 10) : 0;
        };

        return getNumber(a) - getNumber(b);
    })
    .map(([_, fn]) => fn);
console.log(bannerImports);

const Banner = memo(() => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [loadedBanners, setLoadedBanners] = useState([banner1]);

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % loadedBanners.length);
    };

    const goToPrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? loadedBanners.length - 1 : prevIndex - 1
        );
    };

    // ✅ Lazy Loading 적용
    useEffect(() => {
        const loadNextImage = async () => {
            if (loadedBanners.length < bannerImports.length + 1) {
                try {
                    const nextImage = await bannerImports[loadedBanners.length - 1]();
                    setLoadedBanners((prevBanners) => [...prevBanners, nextImage.default]);
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
                    console.log(image);
                    return (
                        <style.Slide key={index} active={index === currentIndex}>
                            <img src={image} alt={`Banner ${index + 1}`}/>
                        </style.Slide>
                    )
                    }
                )}
                <style.PrevButton onClick={goToPrev}>❮</style.PrevButton>
                <style.NextButton onClick={goToNext}>❯</style.NextButton>
            </Suspense>
        </style.SliderContainer>
    );
});

export default Banner;