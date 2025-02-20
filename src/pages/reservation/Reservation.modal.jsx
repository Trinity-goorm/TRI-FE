import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as style from "./style/Reservation.modal.js";
import ReservationButton from "../../components/button/ReservationButton.jsx";
import CustomCalendar from "../../components/calendar/CustomCalendar.jsx";
import ReservationTable from "../../pages/reservation/Reservation.table.jsx";
import GetAvailableSeat from "../../api/reservation/get/GetAvailableSeat.js";

import ReservationReservation from "../../assets/dummydata/ReservationResponse.js";

//formatDate 변환 함수
const formatDate = (date) => {
    return new Date( date.getTime() + 9 * 60 * 60 * 1000 )
        .toISOString()
        .split("T")[0];
};
const userId = localStorage.getItem("userId");

const ReservationModal = ({name, isOpen, closeModal, children, restaurantId}) => {
    const [selectDate, setSelectDate] = useState(formatDate(new Date()));
    const [isToday, setIsToday] = useState(true);
    const [reservation, setReservation] = useState({
        userId: userId,
        restaurantId: restaurantId,
        selectedDate: selectDate,
        reservationTime: null,
        seatTypeId: null,
        seatType: null,

    });
    const navigate = useNavigate();

    //dummyData
    const reservationData = ReservationReservation.groupedTimeSlotResponse;

    //API 호출
    const fetchReservationData = async (restaurantId, selectDate) => {
        try {
            console.log(restaurantId, selectDate);
            const reservationDataList = await GetAvailableSeat(restaurantId, selectDate);
            console.log("🖐️가져온 예약 가능 좌석",reservationDataList);

        } catch(error) {
            console.error("💀데이터 로드 실패",error);

        }
    }
   //useEffect 모음
    useEffect(() => {
        console.log("🍎예약 정보", reservation);
        if (reservation.seatType) {

            openConfirmModal();
        }
    }, [reservation.seatType]);

    useEffect(() => {
        fetchReservationData(restaurantId, selectDate);
    },[restaurantId, selectDate]);


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

    const onSelectTimeChange = (time) => {
        setReservation((prev) => ({
            ...prev,
            reservationTime: time,
        }))
    };

    const onSelectSeatChange = (seatType) => {
        setReservation((prev) => ({
            ...prev,
            seatType: seatType,
            seatTypeId: seatType.seatTypeId
        }))
    }

    if (!isOpen) return null;

    const openConfirmModal = () => {
        navigate(`/reservation/confirm/${restaurantId}`,
            {
                state: reservation,
            });
    };

    const onClickClose = () => {
        closeModal();
    }



    return (
        <style.Background>
            <style.TotalContainer>
                <style.CalendarContainer>
                    <CustomCalendar onSelectDate={onSelectDateChange} />
                </style.CalendarContainer>
                <style.ReservationContainer>
                    <ReservationTable dataList = {reservationData} onSelectTimeChange={onSelectTimeChange}
                                      onSelectSeatChange={onSelectSeatChange} openConfirmModal={openConfirmModal}
                                      isToday={isToday}
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