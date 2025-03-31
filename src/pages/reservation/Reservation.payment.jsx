import * as style from "./style/Reservation.payment.js";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import PaymentTopBar from "../../components/bar/PaymentTopBar.jsx";
import PaymentBottomBar from "../../components/bar/PaymentBottomBar.jsx";
import PaymentTicket from "./Reservation.payment.ticket.jsx";
import PaymentAgree from "./Reservation.payment.agree.jsx";
import { useEffect, useState } from "react";
//API
import postPreoccupyCancel from "../../api/reservation/post/PostPreoccupyCancel.js";
import postReservationComplete from "../../api/reservation/post/PostReservationComplete.js";
//Context
import { PaymentProvider } from "../../context/PaymentContext.jsx";
import { PaymentTicketProvider } from "../../context/PaymentTicketContext.jsx";

const ReservationPaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const preoccupyData = location.state;
  const reservationId = preoccupyData.reservationId;
  const [isTimeOver, setIsTimeOver] = useState(false);


    useEffect(() => {
      const handleBack = async () => {
       const confirm = window.confirm("뒤로 가면 예약 선점이 취소됩니다!");
        if (confirm) {
          try{
            const response = await postPreoccupyCancel(reservationId);
            console.log("☕ 뒤로 가기 눌러서 예약 선점 취소 성공:", response);
            navigate("/");

           } catch (error){
            console.error("💀예약 선점 취소 실패", error);
        }
      }
    };

    window.addEventListener("popstate", handleBack);
  return () => {
      window.removeEventListener("popstate", handleBack);
    };
  }, []);


  useEffect(() => {
    const preoccupyCancel = async () => {
      if (!isTimeOver) return;
      if (!reservationId) {
        return;
      }

      try {
        alert("⏳ 예약 시간이 만료되었습니다! 다시 예약해 주세요!");
        const response = await postPreoccupyCancel(reservationId);
        console.log("☕ 예약 선점 취소 성공:", response);

      } catch (error) {
        console.error("💀예약 선점 취소 실패", error);
      }
    };
    preoccupyCancel();
  }, [isTimeOver, reservationId]);

  const reservationComplete = async () => {
    if (!reservationId) {
      console.log("예약 번호가 유효하지 않습니다");
      return
    }
    if (isTimeOver){
      alert("다시 예약을 진행해 주세요!");
    }
    try {
      const response = await postReservationComplete(reservationId);
      console.log("☕ 예약 결제 성공:", response);
      navigate("/");
    } catch (error) {
      console.error("💀예약 결제 실패", error);
    }
  };

  const onClickPayment = () => {
    reservationComplete();
  };

  return (
      <PaymentProvider>
        <PaymentTicketProvider>
          <style.TotalContainer>
            <style.TopBarContainer>
              <PaymentTopBar setIsTimeOver={setIsTimeOver} reservationId={reservationId} />
            </style.TopBarContainer>
            <style.InnerContentContainer>
              <style.ReservationInfoContainer>
                <style.TitleContainer>예약 정보</style.TitleContainer>
                <style.InfoContainer>
                  <style.InfoContext>
                    <style.InfoTitle>날짜</style.InfoTitle>
                    {preoccupyData.selectedDate}
                  </style.InfoContext>
                  <style.InfoContext>
                    <style.InfoTitle>시간</style.InfoTitle>
                    {preoccupyData.reservationTime}
                  </style.InfoContext>
                  <style.InfoContext>
                    <style.InfoTitle>좌석 유형</style.InfoTitle>
                    {preoccupyData.seatType.minCapacity} ~{" "}
                    {preoccupyData.seatType.maxCapacity} 인석
                  </style.InfoContext>
                </style.InfoContainer>
              </style.ReservationInfoContainer>
              <PaymentTicket/>
              <PaymentAgree/>
            </style.InnerContentContainer>

            <style.BottomBarContainer>
              <PaymentBottomBar
                  reservation={preoccupyData}
                  onClickPayment={onClickPayment}
              />
            </style.BottomBarContainer>
          </style.TotalContainer>
        </PaymentTicketProvider>
      </PaymentProvider>
  );
};
export default ReservationPaymentPage;
