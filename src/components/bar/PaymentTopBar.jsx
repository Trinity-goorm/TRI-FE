import * as style from "./style/PaymentTopBar.js";
import {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";

//API
import postPreoccupyCancel from "../../api/reservation/post/PostPreoccupyCancel.js";



const PaymentTopBar = ({setIsTimeOver, reservationId}) => {

    const navigate = useNavigate();
    const [timeLeft, setTimeLeft] = useState(60);
    const [isTimeOk, setIsTimeOk] = useState(true);

    useEffect(() => {
        if (timeLeft <= 0) {
            setIsTimeOk(false);
            setIsTimeOver(true);
            return;
        }
        const timer = setInterval(() => {
            setTimeLeft(prevTime => prevTime - 1);
        }, 1000);
        return () => clearInterval(timer);
    }, [timeLeft, navigate]);

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `0${minutes}:${secs < 10 ? "0": ""}${secs}`;
    }
    const onGoBack = async () => {
        if(isTimeOk) {
           try{
               const response = await postPreoccupyCancel(reservationId);
               console.log("예약 선점 취소 성공", response);
           } catch (error){
               console.error("예약 선점 취소 실패", error);
           }
        }
        navigate("/");
    }

    return (
        <style.TopBarContainer>
            <style.RestaurantTitleContainer>
                <style.GoBackButtonContainer onClick={onGoBack}>
                    <span className="material-icons">close</span>
                </style.GoBackButtonContainer>
                <style.RestaurantTitle>
                </style.RestaurantTitle>
            </style.RestaurantTitleContainer>
            <style.TimerContainer>
                <style.Timer isTimeOk={isTimeOk}>
                    {formatTime(timeLeft)}
                </style.Timer>
                <style.TimerExplain>
                    {isTimeOk ? (
                        "2분간 예약 찜! 시간 내 예약을 완료해 주세요!"
                    ): (
                        "예약 찜이 만료되었습니다! 다시 예약해 주세요!"
                    ) }

                </style.TimerExplain>
            </style.TimerContainer>
        </style.TopBarContainer>
    )

}
export default PaymentTopBar;