import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as style from "./style/Reservation.modal.js";
import ReservationButton from "../../components/button/ReservationButton.jsx";
import CustomButton from "../../components/calendar/CustomCalendar.jsx";
import CustomCalendar from "../../components/calendar/CustomCalendar.jsx";
import ReservationTable from "../../pages/reservation/Reservation.table.jsx";
import ReservationConfirm from "../reservation/Reservation.modal.confirm.jsx";

import ReservationReservation from "../../assets/dummydata/ReservationResponse.js";

const ReservationModal = ({isOpen, closeModal, children, restaurantId}) => {
    const [selectDate, setSelectDate] = useState(new Date());
    const [reservation, setReservation] = useState({
        date: selectDate,
        time: null,
        seatType: null
    });
    const navigate = useNavigate();
    const reservationData = ReservationReservation.groupedTimeSlotResponse;

    const onSelectDateChange = (date) => {
        setReservation((prev) => (
            {
                ...prev,
                date: date,
            }
        ))
    };

    const onSelectTimeChange = (time) => {
        setReservation((prev) => ({
            ...prev,
            time: time,
        }))
    };

    const onSelectSeatChange = (seatType) => {
        setReservation((prev) => ({
            ...prev,
            seatType: seatType,
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
    console.log("예약정보", reservation);


    return (
        <style.Background>
            <style.TotalContainer>
                <style.CalendarContainer>
                    <CustomCalendar onSelectDate={onSelectDateChange} />
                </style.CalendarContainer>
                <style.ReservationContainer>
                    <ReservationTable dataList = {reservationData} onSelectTimeChange={onSelectTimeChange} onSelectSeatChange={onSelectSeatChange} openConfirmModal={openConfirmModal} />
                </style.ReservationContainer>
                <ReservationButton onClick={onClickClose} name={"닫기"} backcolor={"white"} width={"100%"} height={"45px"}  border={"1.5px solid lightgray"} namecolor={"lightgray"} />
            </style.TotalContainer>
        </style.Background>


    )
}


export default ReservationModal;