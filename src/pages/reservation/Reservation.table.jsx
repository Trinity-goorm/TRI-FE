import * as style from "./style/Reservation.table.js";
import { useEffect, useState } from "react";
import Modal from "../../components/modal/Modal.jsx";
import { useNavigate } from "react-router-dom";
import { ModalContainer } from "../../components/modal/style/Modal.js";
//API
import PostVacancySeat from "../../api/vacancy/post/PostVacancySeat.js";


const ReservationTable = ({
  dataList,
  onSelectTimeChange,
  onSelectSeatChange,
  openConfirmModal,
  isToday,
}) => {

  const [selectTime, setSelectTime] = useState(null);
  const [selectSeat, setSelectSeat] = useState(null);
  const [vacancySeatId, setVacancySeatId] = useState(null);

  const currentTime = new Date();
  const currentHour = currentTime.getHours();
  const currentMinute = currentTime.getMinutes();
  const navigate = useNavigate();

  const processDataList = (dataList) => {
    return dataList.reduce((acc, item) => {
      acc[item.timeSlot] = item.groupedSeats;
      return acc;
    }, {});
  };
  const groupedDataList = processDataList(dataList);

  const filteredTimeList = Object.keys(groupedDataList).filter((item) => {
    if (!isToday) return true;

    const [hour, minute] = item.split(":").map(Number);

    return hour > currentHour + 1;
  });

  useEffect(() => {
    if (selectSeat && selectTime) {
      openConfirmModal();
    }
  }, [selectSeat, setSelectTime]);

  useEffect(() => {
    if (vacancySeatId) {
      (async () => {
        try {
          const response = await PostVacancySeat(vacancySeatId);
          console.log("⭐️ 빈자리 알림 신청 성공:", response);
          alert("빈자리 알림이 신청되었습니다!");
        } catch (error) {
          console.error("👻 빈자리 알림 신청 실패:", error);
        }
      })();
    }
  }, [vacancySeatId]);

  const handleSelectTimeChange = (newTime) => {
    setSelectTime(newTime);
    onSelectTimeChange(newTime);
  };
  const handleSelectSeatChange = (newSeat) => {
    setSelectSeat(newSeat);
    onSelectSeatChange(newSeat);
  };

  const handleSelectVacancySeat = (seatId) => {
    setVacancySeatId(seatId);
  };

  return (
    <style.TotalContainer>
      <style.TimeSlotTotalContainer>
        {filteredTimeList.map((time, index) => (
          <style.TimeSlotEachContainer
            key={index}
            isSelect={time === selectTime}
            onClick={() => handleSelectTimeChange(time)}
          >
            {time}
          </style.TimeSlotEachContainer>
        ))}
      </style.TimeSlotTotalContainer>
      <style.SeatTotalContainer>
        {selectTime &&
          groupedDataList[selectTime]?.map((seat, index) =>
            seat.availableSeats > 0 ? (
              <style.SeatEachContainer
                key={index}
                onClick={() => handleSelectSeatChange(seat)}
              >
                <style.SeatEachTitle>
                  {seat.minCapacity}~{seat.maxCapacity}인 좌석
                </style.SeatEachTitle>
                <style.SeatCountContainer>
                  잔여수: {seat.availableSeats} 개
                </style.SeatCountContainer>
              </style.SeatEachContainer>
            ) : (
              <style.NoSeatEachContainer
                key={index}
                onClick={() => handleSelectVacancySeat(seat.seatId)}
              >
                <style.NoSeatEachTitle>
                  {seat.minCapacity}~{seat.maxCapacity}인 좌석
                </style.NoSeatEachTitle>
                <style.NoSeatCountContainer>
                  <span className="material-icons-outlined" style={{fontSize:"20px"}}>notifications</span>
                  빈자리 알림
                </style.NoSeatCountContainer>
              </style.NoSeatEachContainer>
            )
          )}
      </style.SeatTotalContainer>
    </style.TotalContainer>
  );
};
export default ReservationTable;
