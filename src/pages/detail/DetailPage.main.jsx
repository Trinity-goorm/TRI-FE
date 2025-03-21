import {useEffect, useRef, useState} from "react";
import {useRecoilState, useRecoilValue} from "recoil";
import { useLocation, useParams} from "react-router-dom";
import * as style from "./style/DetailPage.main.js";
import DetailTopBar from "../../components/bar/DetailTopBar.jsx";
import MenuComponent from "../../components/menu/MenuComponent.jsx";
import DetailInfo from "../detail/DetailPage.DetailInfo.jsx";
import DetailBottomBar from "../../components/bar/DetailBottomBar.jsx";
import DetailLocation from "../../pages/detail/DetailPage.Location.jsx";
import ReservationModal from "../../pages/reservation/Reservation.modal.jsx"
//API
import getRestaurantDetail from "../../api/detail/get/GetRestaurantDetail.js";
import { ScrollProvider } from "../../context/ScrollContext.jsx";
import ProfilerTableLogWrapper from "../../components/search/ProfilerTableLogWrapper.jsx";


const DetailPage = () => {
    const {id} = useParams();
    const location = useLocation();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [restaurantDetail, setRestaurantDetail] = useState(null);
    const [menus, setMenus] = useState([]);
    const [images, setImages] = useState([]);
    const [averagePrice, setAveragePrice] = useState(0);

    const [remoteSelectDate, setRemoteSelectDate] = useState(null);

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
            setIsScrolled(false);
        } catch (error) {
            console.log("💀데이터 로드 실패",error);
        }
    };



    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY > 200;
            if (isScrolledRef.current !== scrolled) {
                isScrolledRef.current = scrolled;
                setIsScrolled(scrolled); // ✅ 상태 변경으로 하위 컴포넌트 리렌더링 유도
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);




    useEffect(() => {
        fetchRestaurantDetail(id);
    },[id ]);


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
        <ProfilerTableLogWrapper id="DetailPage">
            <ScrollProvider>
                <style.TotalContainer>
                    <style.TopBarContainer>
                        {restaurantDetail && (
                            <DetailTopBar
                                data-testid="detail-topbar"
                                name={restaurantDetail.name}
                                id={id}
                                wishCount={restaurantDetail.wishCount}
                            />
                        )}
                    </style.TopBarContainer>
                    <style.InnerContentContainer>
                        <style.ImageSliderContainer>
                            {images.map((image, index) => {
                                return <style.ImgDiv key={`${image.id}-${index}`} $imgUrl={image} data-testid="imgEach"/>;
                            })}

                        </style.ImageSliderContainer>
                        <style.MainInfoContainer>
                            <style.MainInfoFirstContainer>
                                <style.CategoryContainer data-testid="restaurantCategory">
                                    {restaurantDetail.category}
                                </style.CategoryContainer>
                                <style.NameContainer data-testid="restaurantName">
                                    {restaurantDetail.name}
                                </style.NameContainer>
                                <style.StarScoreContainer>
                                    <style.StarContainer>
                                    <span className="material-icons"
                                          style={{fontSize: "18px", color: "gold"}}>star</span>
                                    </style.StarContainer>
                                    {restaurantDetail.rating}
                                </style.StarScoreContainer>
                            </style.MainInfoFirstContainer>
                            <style.MainInfoSecondContainer>
                                <style.LocationFirstContainer data-testid="restaurantLocation">
                                    <style.LocationIcon>
                                    <span className="material-icons-outlined"
                                          style={{fontSize: "19px"}}>location_on</span>
                                    </style.LocationIcon>
                                    {restaurantDetail.location}
                                </style.LocationFirstContainer>
                                <style.AveragePriceContainer>
                                    <style.PriceIcon>
                                        <span className="material-icons-outlined" style={{fontSize: "17px"}}>paid</span>
                                    </style.PriceIcon>
                                    평균 가격 : {averagePrice} 원
                                </style.AveragePriceContainer>
                                <style.TimeContainer>
                                    <style.PriceIcon>
                                        <span className="material-icons" style={{fontSize: "17px"}}>schedule</span>
                                    </style.PriceIcon>
                                    {restaurantDetail.expandedDays === "null" ? "운영일 제공 x" : restaurantDetail.expandedDays}{'\u00A0\u00A0\u00A0'}
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
                                <MenuComponent key={`${item.id}+${item.name}`} name={item.name} price={item.price}
                                               data-testid="restaurantMenu"/>
                            ))}
                        </style.MenuContainer>
                        <style.LocationContainer>
                            <DetailLocation address={restaurantDetail.location}/>

                        </style.LocationContainer>
                        <style.DetailInfoContainer>
                            <DetailInfo cautions={restaurantDetail.cautions} convenience={restaurantDetail.facilities}
                                        number={restaurantDetail.phone_number}/>
                        </style.DetailInfoContainer>

                    </style.InnerContentContainer>
                    <style.BottomBarContainer>
                        <DetailBottomBar
                            id={id}
                            wishCount={restaurantDetail.wishCount}
                            openModal={openModal} closeModal={closeModal}
                            data-testid="bottomBar"/>
                    </style.BottomBarContainer>

                    <ReservationModal isOpen={isModalOpen} closeModal={closeModal}
                                      restaurantId={restaurantDetail.restaurantId} remoteSelectDate={remoteSelectDate}
                                      data-testid="reservationModal"/>

                </style.TotalContainer>
            </ScrollProvider>
        </ProfilerTableLogWrapper>

    )
};
export default DetailPage;