import { useLocation, useNavigate } from 'react-router-dom'
import * as style from "./style/Reservation.modal.confirm.js";
import ReservationButton from "../../components/button/ReservationButton.jsx";


const ReservationConfirm = () => {

    const location = useLocation();
    const reservation = location.state;
    console.log("전달된 예약 내용",reservation);
    const navigate = useNavigate();

    const onCancel = () => {
        navigate("/");
    }
    const onMovetoPayment = () => {

        navigate("/reservation/payment",
            {
                state: reservation
            }
        );
    }
    return (
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
                            name={"취소"} width={"200px"} height={"60px"} backcolor={"white"} namecolor={"lightgray"} border={"1px solid lightgray"}/>
                    </style.ButtonEachContainer>
                    <style.ButtonEachContainer onClick={onMovetoPayment}>
                        <ReservationButton name={"확인"} width={"200px"} height={"60px"} backcolor={"#FF6868"} namecolor={"white"} />
                    </style.ButtonEachContainer>
                </style.ButtonContainer>
            </style.TotalContainer>
        </style.Background>
    )
}
export default ReservationConfirm