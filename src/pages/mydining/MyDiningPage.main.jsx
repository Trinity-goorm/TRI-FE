import * as style from "./style/MyDiningPage.main.js";
import BottomBar from "../../components/bar/BottomBar.jsx";
import {useEffect, useState} from "react";
import MyDiningReservation from "../../pages/mydining/MyDiningPage.reservation.jsx";
import MyDiningVacancy from "./MyDiningPage.vacancy.jsx";
import myReservation from "../../assets/dummydata/MyReservation.js";


const MyDiningPage = () => {
    const [isReservationClick, setIsReservationClick] = useState(true);
    const [isVacancyClick, setIsVacancyClick] = useState(false);
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
                    <MyDiningReservation />
                ): (
                    <MyDiningVacancy />
                )}

            </style.InnerContainer>
            <style.BottomBarContainer>
                <BottomBar />
            </style.BottomBarContainer>
        </style.TotalContainer>
    )
}
export default MyDiningPage;