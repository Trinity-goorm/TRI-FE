import { useState, useEffect } from "react";
import {useNavigate, useParams} from "react-router-dom";
import * as style from "./style/Reservation.modal.js";
import ReservationButton from "../../components/button/ReservationButton.jsx";
import CustomCalendar from "../../components/calendar/CustomCalendar.jsx";
import ReservationTable from "../../pages/reservation/Reservation.table.jsx";
import GetAvailableSeat from "../../api/reservation/get/GetAvailableSeat.js";

//Recoil
import {useRecoilValue, useSetRecoilState} from "recoil";
import {userState} from "../../atoms/userState.js";
import { reservationState } from "../../atoms/reservationState";



//formatDate 변환 함수
const formatDate = (date) => {
    return new Date( date.getTime() + 9 * 60 * 60 * 1000 )
        .toISOString()
        .split("T")[0];
};

const ReservationModal = ({name, isOpen, closeModal, children, restaurantId, remoteSelectDate, ...props}) => {


    const [selectDate, setSelectDate] = useState(formatDate(new Date()));
    const [isToday, setIsToday] = useState(true);

    const setReservation = useSetRecoilState(reservationState);
    useEffect(() => {
        if (restaurantId) {
            setReservation({
                restaurantId,
                selectedDate: selectDate,
                reservationTime: null,
                seatTypeId: null,
                seatType: null,
            });
        }
    }, [restaurantId, selectDate]);

    const [availableSeats, setAvailableSeats] = useState([]);

    //API 호출
    const fetchReservationData = async (restaurantId, selectDate) => {
        try {
            console.log(restaurantId, selectDate);
            const response = await GetAvailableSeat(restaurantId, selectDate);
            console.log("🖐️가져온 예약 가능 좌석",response);
            setAvailableSeats(response.groupedTimeSlotResponse);


        } catch(error) {
            console.error("💀데이터 로드 실패",error);

        }
    };



    useEffect(() => {
        fetchReservationData(restaurantId, selectDate);
    },[restaurantId, selectDate]);

    useEffect(() => {
        if(remoteSelectDate) {
            setSelectDate(remoteSelectDate);
        }
    }, [remoteSelectDate]);



  const onSelectDateChange = (date) => {
        const formattedDate = formatDate(date);
        setReservation((prev) => (
            {
                ...prev,
                selectedDate: formattedDate,
            }
        ));
        setSelectDate(formattedDate);
        setIsToday(date.toDateString() === new Date().toDateString());
    };


    if (!isOpen) {
        return null
    }

    const onClickClose = () => {
        closeModal();
    }



    return (
        <style.Background>
            <style.TotalContainer {...props} isOpen={isOpen}>
                <style.CalendarContainer>
                    <CustomCalendar onSelectDate={onSelectDateChange} selectedDate={selectDate} />
                </style.CalendarContainer>
                <style.ReservationContainer>
              <ReservationTable dataList = {availableSeats}
                                      isToday={isToday}
                                      restaurantId={restaurantId}
                    />
                </style.ReservationContainer>
                <style.CloseButtonContainer onClick={onClickClose}>
                    <ReservationButton  name={"닫기"} backcolor={"white"} width={"100%"} height={"50px"}  border={"1px solid lightgray"} namecolor={"lightgray"} />
                </style.CloseButtonContainer>
            </style.TotalContainer>
        </style.Background>


    )
}


export default ReservationModal;

