import * as style from "./style/Reservation.payment.js";
import { useLocation, useNavigate } from "react-router-dom";
import PaymentTopBar from "../../components/bar/PaymentTopBar.jsx";
import PaymentBottomBar from "../../components/bar/PaymentBottomBar.jsx";
import {useEffect, useState} from "react";
import { FaCheck } from "react-icons/fa";
const ReservationPaymentPage = () => {

    const [isClick, setIsClick] = useState(false);
    const [isAllCheck, setIsAllCheck] = useState(false);
    const [isFirstCheck, setIsFirstCheck] = useState(false);
    const [isSecondCheck, setIsSecondCheck] = useState(false);
    const [isReservation, setIsReservation] = useState(false);

    const onClickTicketUse = () => {
        setIsClick(prev => !prev);
    };
    const onClickAllCheck = () => {
        setIsAllCheck(prev => !prev);
        setIsFirstCheck(prev => !prev);
        setIsSecondCheck(prev => !prev);
    }
    const onClickFirstCheck = () => {
        setIsFirstCheck(prev => !prev);
    }
    const onClickSecondCheck = () => {
        setIsSecondCheck(prev => !prev);
    }
    useEffect(() => {
        if (isAllCheck && isFirstCheck && isSecondCheck && isClick) {
            setIsReservation(true);
        }
    })

    const location = useLocation();
    const reservation = location.state;

    console.log("예약 정보",reservation);


    return (
        <style.TotalContainer>
           <style.TopBarContainer>
               <PaymentTopBar/>
           </style.TopBarContainer>
            <style.InnerContentContainer>
                <style.ReservationInfoContainer>
                    <style.TitleContainer>
                        예약 정보
                    </style.TitleContainer>
                    <style.InfoContainer>
                        <style.InfoContext>
                            <style.InfoTitle>날짜</style.InfoTitle>
                            {reservation.selectedDate}
                        </style.InfoContext>
                        <style.InfoContext>
                            <style.InfoTitle>시간</style.InfoTitle>
                            {reservation.reservationTime}
                        </style.InfoContext>
                        <style.InfoContext>
                            <style.InfoTitle>좌석 유형</style.InfoTitle>
                            {reservation.seatType.minCapacity} ~ {reservation.seatType.maxCapacity} 인석
                        </style.InfoContext>
                    </style.InfoContainer>
                </style.ReservationInfoContainer>
                <style.ReservationInfoContainer>
                    <style.TitleContainer>
                        예약금 결제 방법
                    </style.TitleContainer>
                    <style.TicketUseContainer>
                        <style.TicketUse>
                            <style.TicketUseButton  onClick={onClickTicketUse} isClick={isClick} type="button">
                                <style.TicketUseButtonInside>
                                </style.TicketUseButtonInside>
                            </style.TicketUseButton>
                            티켓 사용
                        </style.TicketUse>
                        <style.TicketExplain>
                            티켓 10개 차감
                        </style.TicketExplain>
                        <style.TicketRefundExplain>
                            💵 티켓 사용 금액은 매장에서 결제시 반환해 드려요!
                        </style.TicketRefundExplain>
                    </style.TicketUseContainer>
                </style.ReservationInfoContainer>
                <style.AgreeContainer>
                    <style.AllAgreeContainer>
                        <style.CheckButton onClick={onClickAllCheck} isCheck={isAllCheck} type="button">
                            <FaCheck size={15} color={"white"}/>
                        </style.CheckButton>
                        모두 동의합니다.
                    </style.AllAgreeContainer>
                    <style.RuleContainer>
                        <style.CheckButton onClick={onClickFirstCheck} isCheck={isFirstCheck} type="button">
                            <FaCheck size={15} color={"white"}/>
                        </style.CheckButton>
                        취소 및 환불 정책 동의
                    </style.RuleContainer>
                    <style.RefundRuleContainer>
                        - 노쇼 시: 사용 티켓 환불 불가 <br/>
                        - 당일 취소: 사용 티켓 환불 불가 <br/>
                        - 3일 전까지 취소: 사용 티켓 100% 환불
                    </style.RefundRuleContainer>

                    <style.RuleContainer>
                        <style.CheckButton onClick={onClickSecondCheck} isCheck={isSecondCheck} type="button">
                            <FaCheck size={15} color={"white"}/>
                        </style.CheckButton>
                        개인정보 제3자 제공 동의
                    </style.RuleContainer>

                </style.AgreeContainer>
            </style.InnerContentContainer>
            <style.BottomBarContainer>
                <PaymentBottomBar reservation={reservation} isReservation={isReservation} />
            </style.BottomBarContainer>
        </style.TotalContainer>
    )
}
export default ReservationPaymentPage;