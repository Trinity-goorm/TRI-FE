import * as style from './style/PaymentTopBar.js';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
//import {FaXmark} from "react-icons/fa6";

const PaymentTopBar = ({ setIsTimeOver }) => {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState(30);
  const [isTimeOk, setIsTimeOk] = useState(true);

  useEffect(() => {
    if (timeLeft <= 0) {
      setIsTimeOk(false);
      setIsTimeOver(true);
      return;
    }
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft, navigate]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `0${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };
  const onGoBack = () => {
    navigate(-1);
  };

  return (
    <style.TopBarContainer>
      <style.RestaurantTitleContainer>
        <style.GoBackButtonContainer>
          {/*<FaXmark size={25} onClick={onGoBack} />*/}
        </style.GoBackButtonContainer>
        <style.RestaurantTitle></style.RestaurantTitle>
      </style.RestaurantTitleContainer>
      <style.TimerContainer>
        <style.Timer isTimeOk={isTimeOk}>{formatTime(timeLeft)}</style.Timer>
        <style.TimerExplain>
          {isTimeOk
            ? '2분간 예약 찜! 시간 내 예약을 완료해 주세요!'
            : '예약 찜이 만료되었습니다! 다시 예약해 주세요!'}
        </style.TimerExplain>
      </style.TimerContainer>
    </style.TopBarContainer>
  );
};
export default PaymentTopBar;
