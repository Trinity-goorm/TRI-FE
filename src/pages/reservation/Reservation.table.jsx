import * as style from "./style/Reservation.table.js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaBell } from "react-icons/fa";

const ReservationTable = ({dataList, onSelectTimeChange, onSelectSeatChange, openConfirmModal}) => {

    const [selectTime, setSelectTime] = useState(null);
    const [selectSeat, setSelectSeat] = useState(null);

    const navigate = useNavigate();

    const processDataList = (dataList) => {
        return dataList.reduce((acc, item) => {
            acc[item.timeSlot] = item.groupedSeats;
            return acc;
        },{});
    };
    const groupedDataList = processDataList(dataList);

    const handleSelectTimeChange = (newTime) => {
        setSelectTime(newTime);
        onSelectTimeChange(newTime);
    };
    const handleSelectSeatChange = (newSeat) => {
        setSelectSeat(newSeat);
        onSelectSeatChange(newSeat);
        openConfirmModal();

    };



    return(
        <style.TotalContainer>
            <style.TimeSlotTotalContainer>
                {Object.keys(groupedDataList).map((time, index) => (
                    <style.TimeSlotEachContainer key={index} isSelect={time === selectTime} onClick={() => handleSelectTimeChange(time)}>
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