import * as style from "./style/Reservation.table.js";
import {useEffect, useState} from "react";
import Modal from "../../components/modal/Modal.jsx";
import { useNavigate } from "react-router-dom";
import { FaBell } from "react-icons/fa";
import {ModalContainer} from "../../components/modal/style/Modal.js";

const ReservationTable = ({dataList, onSelectTimeChange, onSelectSeatChange, openConfirmModal, isToday}) => {
    const [selectTime, setSelectTime] = useState(null);
    const [selectSeat, setSelectSeat] = useState(null);
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    const currentMinute = currentTime.getMinutes();

    const navigate = useNavigate();

    const processDataList = (dataList) => {
        return dataList.reduce((acc, item) => {
            acc[item.timeSlot] = item.groupedSeats;
            return acc;
        },{});
    };
    const groupedDataList = processDataList(dataList);


    const filteredTimeList = Object.keys(groupedDataList).filter(item => {
        if (!isToday) return true;

        const [hour, minute] = item.split(":").map(Number);

        return hour > currentHour || (hour === currentHour && minute > currentMinute);
    });

    useEffect(() => {
        if (selectSeat && selectTime) {
            openConfirmModal();
        }
    },[selectSeat, setSelectTime]);


    const handleSelectTimeChange = (newTime) => {
        setSelectTime(newTime);
        onSelectTimeChange(newTime);
    };
    const handleSelectSeatChange = (newSeat) => {
        setSelectSeat(newSeat);
        onSelectSeatChange(newSeat);
    };

    const onClickGoBack = () => {
        navigate(-1);
    }



    return(
        <style.TotalContainer>
            <style.TimeSlotTotalContainer>
                {filteredTimeList.map((time, index) => (
                        <style.TimeSlotEachContainer
                            key={index}
                            isSelect={time === selectTime}
                            onClick = {() => handleSelectTimeChange(time)}
                        >
                            {time}
                        </style.TimeSlotEachContainer>
                    ))}
            </style.TimeSlotTotalContainer>
            <style.SeatTotalContainer>
                {selectTime && groupedDataList[selectTime]?.map((seat, index) => (
                    seat.availableSeats > 0 ? (
                        <style.SeatEachContainer key={index}  onClick={() => handleSelectSeatChange(seat)}>
                            <style.SeatEachTitle>
                                {seat.minCapacity}~{seat.maxCapacity}인 좌석
                            </style.SeatEachTitle>
                            <style.SeatCountContainer>
                                잔여수: {seat.availableSeats} 개
                            </style.SeatCountContainer>
                        </style.SeatEachContainer>
                    ) : (
                        <style.NoSeatEachContainer key={index}>
                            <style.NoSeatEachTitle>
                                {seat.minCapacity}~{seat.maxCapacity}인 좌석
                            </style.NoSeatEachTitle>
                            <style.NoSeatCountContainer>
                                <FaBell size={15} color={"#717171"}/>
                                빈자리 알람
                            </style.NoSeatCountContainer>
                        </style.NoSeatEachContainer>
                    )
                ))}
            </style.SeatTotalContainer>
        </style.TotalContainer>
    )
}
export default ReservationTable;