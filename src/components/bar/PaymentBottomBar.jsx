import * as style from "./style/PaymentBottomBar.js";
import ReservationButton from "../button/ReservationButton.jsx";

const PaymentBottomBar = ({reservation, isReservation}) => {


    return (
        <style.BottomBarContainer>
            <style.BottomBarLine>
                <style.BottomBarTitle>
                    예약정보
                </style.BottomBarTitle>
                {reservation.selectedDate} - {reservation.reservationTime} - {reservation.seatType.minCapacity} ~ {reservation.seatType.maxCapacity} 인석
            </style.BottomBarLine>
            <style.BottomBarLine>
                <style.BottomBarTitle>
                    결제금액
                </style.BottomBarTitle>
                티켓 10개
            </style.BottomBarLine>
            {isReservation ?
                <style.ReservationButtonContainer onClick={() => {alert("예약합니다~")}}>
                    <ReservationButton height={"50px"} width={"80%"} name={"예약하기"} namecolor={"white"}/>
                </style.ReservationButtonContainer>
                : <style.ReservationButtonContainer>
                    <ReservationButton height={"50px"} width={"80%"} name={"예약하기"} namecolor={"white"} backcolor={"lightgray"}   />
                </style.ReservationButtonContainer>}

        </style.BottomBarContainer>
    )

}
export default PaymentBottomBar;