import { useEffect, useState } from "react";
import { useParams} from "react-router-dom";
import * as style from "./style/DetailPage.main.js";
import DetailTopBar from "../../components/bar/DetailTopBar.jsx";
import MenuComponent from "../../components/menu/MenuComponent.jsx";
import DetailInfo from "../detail/DetailPage.DetailInfo.jsx";
import DetailBottomBar from "../../components/bar/DetailBottomBar.jsx";
import DetailLocation from "../../pages/detail/DetailPage.Location.jsx";
import ReservationModal from "../../pages/reservation/Reservation.modal.jsx"
import DetailRestaurant from "../../assets/dummydata/DetailRestaurant.js";
import {FaStar} from "react-icons/fa";
import {GoLocation, GoClock} from "react-icons/go";
import {AiOutlineDollarCircle} from "react-icons/ai";

const DetailPage = () => {
    const {id} = useParams();
    const [isScrolled, setIsScrolled] = useState(true);
    const [isSaved, setIsSaved] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);


    const onClickSave = () => {
        setIsSaved(!isSaved);
        console.log(id, isSaved);
    };

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

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
            <style.TopBarContainer isScrolled={isScrolled} onClick={ onClickSave }>
                <DetailTopBar name={DetailRestaurant.name} isScrolled={isScrolled} isSaved={isSaved} />
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
                                <FaStar size={17} color={"#FFBD2D"} />
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
                    <style.MenuTitle>
                        메뉴
                        <style.MenuButton>
                            메뉴판
                        </style.MenuButton>
                    </style.MenuTitle>
                    {DetailRestaurant.menuList.map((item, index) => (
                        <MenuComponent key={item.id} name={item.menu_name} price={item.price}/>
                    ))}
                </style.MenuContainer>
                <style.LocationContainer>
                    <DetailLocation address={DetailRestaurant.address} latitude={DetailRestaurant.latitude} longitude={ DetailRestaurant.longitude} />

                </style.LocationContainer>
                <style.DetailInfoContainer>
                    <DetailInfo caution={DetailRestaurant.caution} convenience={DetailRestaurant.convenience} number={DetailRestaurant.phone_number}/>
                </style.DetailInfoContainer>

            </style.InnerContentContainer>
            <style.BottomBarContainer >
                <DetailBottomBar  isClick={isSaved} onClickSave={onClickSave} restaurantId={DetailRestaurant.id} openModal={openModal} closeModal={closeModal} />
            </style.BottomBarContainer>

            <ReservationModal isOpen={isModalOpen} closeModal={closeModal} restaurantId={DetailRestaurant.id} />

        </style.TotalContainer>
    )
}
export default DetailPage;