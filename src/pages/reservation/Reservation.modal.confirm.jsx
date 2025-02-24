import { useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom'
import * as style from "./style/Reservation.modal.confirm.js";
import ReservationButton from "../../components/button/ReservationButton.jsx";
import Modal from "../../../components/Modal/Modal" // CI/CD중 경로 오류가 있어서 고쳤습니다. (24-21:50. by toby)
//API
import postPreoccupy from "../../api/reservation/post/PostPreoccupy.js";
import {useEffect} from "react";


const ReservationConfirm = () => {


    const location = useLocation();
    const reservation = location.state;
    const userId = localStorage.getItem("userId");
    const [isTicketLack, setIsTicketLack] = useState(false);

    const [reservationId, setReservationId] = useState(null);
    const [preoccupyData, setPreoccupyData] = useState({
        userId: userId,
        restaurantId: reservation.restaurantId,
        seatTypeId: reservation.seatTypeId ,
        seatType: reservation.seatType,
        selectedDate: reservation.selectedDate,
        reservationTime: reservation.reservationTime,
    });
    const [reservationData, setReservationData] = useState({
        userId: userId ,
        restaurantId: 2,
        seatTypeId: 2 ,
        seatType: reservation.seatType,
        selectedDate: "2025-02-26",
        reservationTime: "10:00",
        reservationId: null,
    });


    const navigate = useNavigate();




    const onCancel = () => {
        navigate("/");
    }
    const onMovetoPayment = () => {

        navigate("/reservation/payment",
            {
                state: reservationData,
            }
        );
    };


    //API
    const postReservationData = async (data) => {
        try{
            const response = await postPreoccupy(data);
            console.log("☕️예약 선점 성공",response);
            setReservationData( prevData => (
                {
                    ...prevData,
                    reservationId: response.reservationId,
                })
            );
        }catch(error){
            console.error("💀예약 선점 실패", error);
            if (error.response.data.code === "NOT_ENOUGH_REMAINING_TICKETS"){
                setIsTicketLack(true);
            }

        }
    };

    const handleSubmit = async () => {
        await postReservationData(preoccupyData);
    }

    useEffect(() => {
        if (reservationData.reservationId) {
            onMovetoPayment();
        }
    }, [reservationData.reservationId]);


    return (
        <>
            <style.Background>
                <style.TotalContainer>
                    <style.TitleContainer>
                        예약금 안내
                    </style.TitleContainer>
                    <style.TicketInfoContainer>
                        <style.FirstInfoContainer>
                            인원에 상관 없이 티켓이 사용됩니다!
                        </style.FirstInfoContainer>
                        <style.SecondInfoContainer>
                            티켓 10개 차감
                        </style.SecondInfoContainer>
                        <style.ThirdInfoContainer>
                            💵 사용 티켓 금액은 매장에서 결제 시 반환해 드려요!
                        </style.ThirdInfoContainer>
                    </style.TicketInfoContainer>
                    <style.RefundInfoContainer>
                        <style.RefundInfoTitle>
                            환불 정책
                        </style.RefundInfoTitle>
                        <style.RefundInfoContent>
                            - 노쇼 시: 사용 티켓 환불 불가 <br/>
                            - 당일 취소: 사용 티켓 환불 불가 <br/>
                            - 3일 전까지 취소: 사용 티켓 100% 환불
                        </style.RefundInfoContent>
                    </style.RefundInfoContainer>
                    <style.ButtonContainer>
                        <style.ButtonEachContainer onClick={onCancel}>
                            <ReservationButton
                                name={"취소"} width={"200px"} height={"60px"} backcolor={"white"} namecolor={"lightgray"}
                                border={"1px solid lightgray"}/>
                        </style.ButtonEachContainer>
                        <style.ButtonEachContainer onClick={handleSubmit}>
                            <ReservationButton name={"확인"} width={"200px"} height={"60px"} backcolor={"#FF6868"}
                                               namecolor={"white"}/>
                        </style.ButtonEachContainer>
                    </style.ButtonContainer>
                </style.TotalContainer>
            </style.Background>
            {isTicketLack && (
                <Modal
                    isOpen={isTicketLack}
                    onClose={()=>setIsTicketLack(false)}
                    onCancel={()=>setIsTicketLack(false)}
                    message={"티켓이 부족합니다!"}
                    positionx={"center"}
                    positiony={"center"}
                    borderRadius={"20px"}
                    innerMessage={"💵 티켓을 구매해 주세요! 💵"}
                />
            )}
        </>
    )
}
export default ReservationConfirm
