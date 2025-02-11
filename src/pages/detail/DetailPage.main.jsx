import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as style from "./style/DetailPage.main.js";
import DetailTopBar from "../../components/DetailTopBar.jsx";
import DetailRestaurant from "../../assets/dummydata/DetailRestaurant.js";
import {GoLocation, GoClock} from "react-icons/go";
import {AiOutlineDollarCircle} from "react-icons/ai";

const DetailPage = () => {
    const {id} = useParams();
    console.log(id, DetailRestaurant.image_urls);
    const [isScrolled, setIsScrolled] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <style.TotalContainer>
            <style.TopBarContainer isScrolled={isScrolled}>
                <DetailTopBar name={DetailRestaurant.name} isScrolled={isScrolled} />
            </style.TopBarContainer>
            <style.InnerContentContainer>
                <style.ImageSliderContainer>
                    {DetailRestaurant.image_urls.map((image, index) => (
                        <style.SlideImage src={image} key={index} />
                    ))}
                    <style.ReservationCountComponent>

                    </style.ReservationCountComponent>
                </style.ImageSliderContainer>
                <style.MainInfoContainer>
                    <style.MainInfoFirstContainer>
                        <style.CategoryContainer>
                            {DetailRestaurant.category}
                        </style.CategoryContainer>
                        <style.NameContainer>
                            {DetailRestaurant.name}
                        </style.NameContainer>
                        <style.StarScoreContainer>
                            <style.StarContainer>
                                ⭐️
                            </style.StarContainer>
                            {DetailRestaurant.star}
                        </style.StarScoreContainer>
                    </style.MainInfoFirstContainer>
                    <style.MainInfoSecondContainer>
                        <style.LocationFirstContainer>
                            <style.LocationIcon>
                                <GoLocation size={17} />
                            </style.LocationIcon>
                            {DetailRestaurant.location}
                        </style.LocationFirstContainer>
                        <style.AveragePriceContainer>
                            <style.PriceIcon>
                                <AiOutlineDollarCircle size={17} />
                            </style.PriceIcon>
                            {DetailRestaurant.average_price}
                        </style.AveragePriceContainer>
                        <style.TimeContainer>
                            <style.PriceIcon>
                                <GoClock size={17} />
                            </style.PriceIcon>
                            {DetailRestaurant.operating_hour}
                        </style.TimeContainer>

                    </style.MainInfoSecondContainer>
                </style.MainInfoContainer>


                <style.MenuContainer>

                </style.MenuContainer>
                <style.LocationContainer>

                </style.LocationContainer>
                <style.DetailInfoContainer>

                </style.DetailInfoContainer>

            </style.InnerContentContainer>
            <style.BottomBarContainer>

            </style.BottomBarContainer>
        </style.TotalContainer>
    )
}
export default DetailPage;