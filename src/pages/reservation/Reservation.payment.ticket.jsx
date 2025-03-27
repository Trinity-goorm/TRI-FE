import * as style from "./style/Reservation.payment.ticket.js";
import { usePaymentTicketContext } from "../../context/PaymentTicketContext.jsx"

const PaymentTicket = () => {

    const { isTicketUse, setIsTicketUse } = usePaymentTicketContext();

    const onClickTicketUse = () => {
        const newIsTicketUse = !isTicketUse;
        setIsTicketUse(newIsTicketUse);
    };

    return (
        <style.ReservationInfoContainer>
            <style.TitleContainer>예약금 결제 방법</style.TitleContainer>
            <style.TicketUseContainer>
                <style.TicketUse>
                    <style.TicketUseButton
                        onClick={onClickTicketUse}
                        isClick={isTicketUse}
                        type="button"
                    >
                        <style.TicketUseButtonInside></style.TicketUseButtonInside>
                    </style.TicketUseButton>
                    티켓 사용
                </style.TicketUse>
                <style.TicketExplain>티켓 10개 차감</style.TicketExplain>
                <style.TicketRefundExplain>
                    💵 티켓 사용 금액은 매장에서 결제시 반환해 드려요!
                </style.TicketRefundExplain>
            </style.TicketUseContainer>
        </style.ReservationInfoContainer>
    )
};

export default PaymentTicket;