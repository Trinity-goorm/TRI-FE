import * as style from "./style/MyDiningPage.main.js";
import BottomBar from "../../components/bar/BottomBar.jsx";
import {useEffect, useState} from "react";
import DiningComponent from "../../components/dining/DiningComponent.jsx";
import sampleImage from "../../assets/img/realJapanese.jpg"
import MyDiningReservation from "../../pages/mydining/MyDiningPage.reservation.jsx";
import MyDiningVacancy from "./MyDiningPage.vacancy.jsx";
import GetVacancySeats from "../../api/vacancy/get/GetVacancySeats.js";
import myReservation from "../../assets/dummydata/MyReservation.js";
import getVacancySeats from "../../api/vacancy/get/GetVacancySeats.js";

const MyDiningPage = () => {
    const [isReservationClick, setIsReservationClick] = useState(true);
    const [isVacancyClick, setIsVacancyClick] = useState(false);
    const [vacancySeats, setVacancySeats] = useState([]);
    const userId = localStorage.getItem("userId");

    const onClickTopBar = (type) => {
        if (type === "left") {
            setIsReservationClick(true);
            setIsVacancyClick(false);
        } else {
            setIsReservationClick(false);
            setIsVacancyClick(true);
        }
    }

    useEffect(() => {

        const fetchVacancySeats = async () => {
            try{
                const response = await getVacancySeats(userId);
                setVacancySeats(response);
                console.log("빈자리 불러오기 성공", response);

            }catch(e){
                console.log("👻빈자리 불러오기 실패", e);
            }
        }

        fetchVacancySeats();
    },[]);

    return (
        <style.TotalContainer>
            <style.TopBarContainer>
                <style.TopTitleBarContainer>
                    <style.TopTitle >
                        마이다이닝
                    </style.TopTitle>
                </style.TopTitleBarContainer>
                <style.TopMoveBarContainer>
                    <style.TopMoveEach isTopBarClick={isReservationClick} onClick={() => onClickTopBar("left")}>
                        나의 예약
                    </style.TopMoveEach>
                    <style.TopMoveEach isTopBarClick={isVacancyClick} onClick={() => onClickTopBar("right")}>
                        빈자리 알림
                    </style.TopMoveEach>
                </style.TopMoveBarContainer>
            </style.TopBarContainer>
            <style.InnerContainer>
                {isReservationClick ? (
                    <MyDiningReservation myReservation={myReservation} />
                ): (
                    <MyDiningVacancy myVacancy={vacancySeats} />
                )}

            </style.InnerContainer>
            <style.BottomBarContainer>
                <BottomBar />
            </style.BottomBarContainer>
        </style.TotalContainer>
    )
}
export default MyDiningPage;