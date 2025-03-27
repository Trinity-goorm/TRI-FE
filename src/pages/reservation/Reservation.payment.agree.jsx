import * as style from "./style/Reservation.payment.js";
import {useEffect, useState} from "react";
import ReservationPaymentPage from "./Reservation.payment.jsx";
import { usePaymentContext } from "../../context/PaymentContext.jsx";
import { usePaymentTicketContext } from "../../context/PaymentTicketContext.jsx";

const PaymentAgree = () => {
    const { setIsReservation } = usePaymentContext();
    const { isTicketUse, setIsTicketUse } = usePaymentTicketContext();

    const [isAllCheck, setIsAllCheck] = useState(false);
    const [isFirstCheck, setIsFirstCheck] = useState(false);
    const [isSecondCheck, setIsSecondCheck] = useState(false);

    const onClickAllCheck = () => {
        const newCheckValue = !isAllCheck;
        setIsAllCheck(newCheckValue);
        setIsFirstCheck(newCheckValue);
        setIsSecondCheck(newCheckValue);
    };
    const onClickFirstCheck = () => {
        const newCheckValue = !isFirstCheck;
        setIsFirstCheck(newCheckValue);
        setIsAllCheck(newCheckValue);
    };
    const onClickSecondCheck = () => {
        const newCheckValue = !isSecondCheck;
        setIsSecondCheck(newCheckValue);
        setIsAllCheck(newCheckValue);

    };
    useEffect(() => {
        if(isFirstCheck && isSecondCheck){
            setIsAllCheck(true);
        } else {
            setIsAllCheck(false);
        }
    },[isFirstCheck, isSecondCheck]);

    useEffect(() => {
        if(isAllCheck && isTicketUse) {
            setIsReservation(true);
        } else {

            setIsReservation(false);
        }
    },[isAllCheck, isTicketUse]);

    return (

        <style.AgreeContainer>
            <style.AllAgreeContainer>
                <style.CheckButton
                    onClick={onClickAllCheck}
                    isCheck={isAllCheck}
                    type="button"
                >
                    <span className="material-icons" style={{fontSize: "20px", color: "white",}}>done</span>
                </style.CheckButton>
                모두 동의합니다.
            </style.AllAgreeContainer>
            <style.RuleContainer>
                <style.CheckButton
                    onClick={onClickFirstCheck}
                    isCheck={isFirstCheck}
                    type="button"
                >
                    <span className="material-icons" style={{fontSize: "20px", color: "white",}}>done</span>
                </style.CheckButton>
                취소 및 환불 정책 동의
            </style.RuleContainer>
            <style.RefundRuleContainer>
                - 노쇼 시: 사용 티켓 환불 불가 <br/>
                - 당일 취소: 사용 티켓 환불 불가 <br/>- 3일 전까지 취소: 사용 티켓
                100% 환불
            </style.RefundRuleContainer>

            <style.RuleContainer>
                <style.CheckButton
                    onClick={onClickSecondCheck}
                    isCheck={isSecondCheck}
                    type="button"
                >
                    <span className="material-icons" style={{fontSize: "20px", color: "white",}}>done</span>
                </style.CheckButton>
                개인정보 제3자 제공 동의
            </style.RuleContainer>
        </style.AgreeContainer>
    )
}

export default PaymentAgree;