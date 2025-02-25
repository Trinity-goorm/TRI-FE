import { useEffect, useState } from "react";
import { useLocation, useParams} from "react-router-dom";
import * as style from "./style/DetailPage.main.js";
import DetailTopBar from "../../components/bar/DetailTopBar.jsx";
import MenuComponent from "../../components/menu/MenuComponent.jsx";
import DetailInfo from "../detail/DetailPage.DetailInfo.jsx";
import DetailBottomBar from "../../components/bar/DetailBottomBar.jsx";
import DetailLocation from "../../pages/detail/DetailPage.Location.jsx";
import ReservationModal from "../../pages/reservation/Reservation.modal.jsx"
import DetailRestaurant from "../../assets/dummydata/DetailRestaurant.js";
//icon
import {FaStar} from "react-icons/fa";
import {GoLocation, GoClock} from "react-icons/go";
import {AiOutlineDollarCircle} from "react-icons/ai";
//API
import getRestaurantDetail from "../../api/detail/get/GetRestaurantDetail.js";
import DeleteLike from "../../api/save/delete/DeleteLike.js";
import PostLike from "../../api/save/post/PostLike.js";


const DetailPage = () => {
    const {id} = useParams();
    const location = useLocation();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [restaurantDetail, setRestaurantDetail] = useState(null);
    const [menus, setMenus] = useState([]);
    const [images, setImages] = useState([]);
    const [averagePrice, setAveragePrice] = useState(0);
    const likeList = JSON.parse(localStorage.getItem("likeList") || []);
    const likeSet = new Set(likeList);
    const [isSaved, setIsSaved] = useState( likeSet.has(Number(id)));
    const userId = localStorage.getItem("userId");
    const [remoteSelectDate, setRemoteSelectDate] = useState(null);



    const onClickSave = () => {
        setIsSaved(!isSaved);
        console.log(id, isSaved);
    };

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const makeImageUrls = (imageUrls) =>{
        return imageUrls.map((url, index) => (
                `https://${url}`
        ));
    };


    const fetchRestaurantDetail = async (id) => {
        try{
            console.log("restaurantId",id);
            const response = await getRestaurantDetail(id);
            console.log("🖐️가져온 레스토랑 디테일 데이터", response);
            setRestaurantDetail(response);
            setMenus(response.menus);
            setImages(makeImageUrls(response.imageUrls));
            setAveragePrice(response.averagePrice.toLocaleString());
        } catch (error) {
            console.log("💀데이터 로드 실패",error);
        }
    };
    const handleLike = async () => {
        try{
            let updatedWishCount = restaurantDetail.wishCount;
            if(!isSaved){
                await PostLike(userId, restaurantDetail.restaurantId);
                updatedWishCount += 1;
                console.log("상세페이지에서 좋아요 성공!")
            }else {
                await DeleteLike(userId, restaurantDetail.restaurantId);
                updatedWishCount -= 1;
                console.log("상세페이지에서 좋아요 해제!")
            }
            setRestaurantDetail({
                ...restaurantDetail,
                wishCount: updatedWishCount,
            });
            setIsSaved(!isSaved);
        }catch(e){
            console.log("👎좋아요 실패",e);
        }
    }

    //useEffect 모음
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

    useEffect(() => {
        fetchRestaurantDetail(id);

    },[id]);

    useEffect(() => {

        if(location.state?.openModal){
            setIsModalOpen(true);
        }
        if(location.state?.date){
            setRemoteSelectDate(location.state.date);
        }
    },[location.state]);


    if (!restaurantDetail) {
        return <div>Loading...</div>;
    }


    return (
        <style.TotalContainer>
            <style.TopBarContainer isScrolled={isScrolled} >
                <DetailTopBar name={restaurantDetail.name} isScrolled={isScrolled} isSaved={isSaved} onClickSave={handleLike} />
            </style.TopBarContainer>
            <style.InnerContentContainer>
                <style.ImageSliderContainer>
                    {images.map((image, index) =>
                    {
                        return <style.ImgDiv  key={index} $imgUrl={image} />;
                    })}

                </style.ImageSliderContainer>
                <style.MainInfoContainer>
                    <style.MainInfoFirstContainer>
                        <style.CategoryContainer>
                            {restaurantDetail.category}
                        </style.CategoryContainer>
                        <style.NameContainer>
                            {restaurantDetail.name}
                        </style.NameContainer>
                        <style.StarScoreContainer>
                            <style.StarContainer>
                                <FaStar size={17} color={"#FFBD2D"} />
                            </style.StarContainer>
                            {restaurantDetail.rating}
                        </style.StarScoreContainer>
                    </style.MainInfoFirstContainer>
                    <style.MainInfoSecondContainer>
                        <style.LocationFirstContainer>
                            <style.LocationIcon>
                                <GoLocation size={15} />
                            </style.LocationIcon>
                            {restaurantDetail.location}
                        </style.LocationFirstContainer>
                        <style.AveragePriceContainer>
                            <style.PriceIcon>
                                <AiOutlineDollarCircle size={15} />
                            </style.PriceIcon>
                            평균 가격 : {averagePrice} 원
                        </style.AveragePriceContainer>
                        <style.TimeContainer>
                            <style.PriceIcon>
                                <GoClock size={15} />
                            </style.PriceIcon>
                            {restaurantDetail.expandedDays === "null" ? "운영일 제공 x" : restaurantDetail.expandedDays }{'\u00A0\u00A0\u00A0'}
                            {restaurantDetail.timeRange === "null" ? "운영시간 제공 x" : restaurantDetail.timeRange}
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
                    {menus.map((item, index) => (
                        <MenuComponent key={item.id} name={item.name} price={item.price}/>
                    ))}
                </style.MenuContainer>
                <style.LocationContainer>
                    <DetailLocation address={restaurantDetail.location} />

                </style.LocationContainer>
                <style.DetailInfoContainer>
                    <DetailInfo cautions={restaurantDetail.cautions} convenience={restaurantDetail.facilities} number={restaurantDetail.phone_number}/>
                </style.DetailInfoContainer>

            </style.InnerContentContainer>
            <style.BottomBarContainer >
                <DetailBottomBar  isSaved={isSaved} onClickSave={handleLike} restaurantId={restaurantDetail.restaurantId} openModal={openModal} closeModal={closeModal} wishCount={restaurantDetail.wishCount} />
            </style.BottomBarContainer>

            <ReservationModal isOpen={isModalOpen} closeModal={closeModal} restaurantId={restaurantDetail.restaurantId} remoteSelectDate={remoteSelectDate}/>

        </style.TotalContainer>
    )
}
export default DetailPage;