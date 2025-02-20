import * as style from "./style/MyDiningPage.main.js";
import BottomBar from "../../components/bar/BottomBar.jsx";
import {useState} from "react";
import DiningComponent from "../../components/dining/DiningComponent.jsx";
import sampleImage from "../../assets/img/realJapanese.jpg"

const MyDiningPage = () => {
    const [isReservationClick, setIsReservationClick] = useState(true);
    const [isVacancyClick, setIsVacancyClick] = useState(false);
    const reservationInfo = {
        title: "펑즈",
        category: "중식",
        date: "2018-05-01",
        time: "09:00",
        seatType: null,
        seatMinCapacity: 1,
        seatMaxCapacity: 2,
        imageUrl: sampleImage,

    }

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
                <DiningComponent tagText={"방문 여부"} reservationInfo={reservationInfo} />

            </style.InnerContainer>
            <style.BottomBarContainer>
                <BottomBar />
            </style.BottomBarContainer>
        </style.TotalContainer>
    )
}
export default MyDiningPage;