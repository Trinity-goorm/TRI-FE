import * as style from "./style/Reservation.payment.js";
import { useLocation, useNavigate } from "react-router-dom";
import PaymentTopBar from "../../components/bar/PaymentTopBar.jsx";
import PaymentBottomBar from "../../components/bar/PaymentBottomBar.jsx";
import {useEffect, useState} from "react";
import { FaCheck } from "react-icons/fa";
//API
import postPreoccupyCancel from "../../api/reservation/post/PostPreoccupyCancel.js";
import postReservationComplete from "../../api/reservation/post/PostReservationComplete.js";


const ReservationPaymentPage = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const reservation = location.state;
    const reservationId = reservation.reservationId;
    const userId = reservation.userId;
    console.log("전달된 예약 정보 🤝",reservationId, userId);

    const [isClick, setIsClick] = useState(false);
    const [isAllCheck, setIsAllCheck] = useState(false);
    const [isFirstCheck, setIsFirstCheck] = useState(false);
    const [isSecondCheck, setIsSecondCheck] = useState(false);
    const [isReservation, setIsReservation] = useState(false);
    const [isTimeOver, setIsTimeOver] = useState(false);

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
    };

    //useEffect
    useEffect(() => {
        if (isAllCheck && isFirstCheck && isSecondCheck && isClick) {
            setIsReservation(true);
        }
    },[isAllCheck, isFirstCheck, isSecondCheck, isClick]);

    useEffect(() => {
        const preoccupyCancel = async () => {
            if(!isTimeOver) return;
            if(!reservationId || !userId) {
                return;
            }

            try{
                alert("⏳ 예약 시간이 만료되었습니다! 다시 예약해 주세요!");
                const response = await postPreoccupyCancel(reservationId, userId);
                console.log("☕ 예약 선점 취소 성공:", response);

                setTimeout(() => {
                    navigate(-1);
                }, 3000);

            }catch(error){
                console.error("💀예약 선점 실패", error);

            }
        }
        preoccupyCancel();
    },[isTimeOver, reservationId, userId]);


    const reservationComplete = async () => {
        if(!isReservation || !reservationId || !userId) return;
        try{
            const response = await postReservationComplete(reservationId, userId);
            console.log("☕ 예약 결제 성공:", response);
            navigate("/");

        }catch(error){
            console.error("💀예약 결제 실패", error);
        }
    }


    const onClickPayment = () => {
        reservationComplete();
    }





    return (
        <style.TotalContainer>
           <style.TopBarContainer>
               <PaymentTopBar setIsTimeOver={setIsTimeOver} />
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
                <PaymentBottomBar reservation={reservation} isReservation={isReservation} onClickPayment={onClickPayment} />
            </style.BottomBarContainer>
        </style.TotalContainer>
    )
}
export default ReservationPaymentPage;