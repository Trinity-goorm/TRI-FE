import { useState, useEffect } from "react";
import {useNavigate, useParams} from "react-router-dom";
import * as style from "./style/Reservation.modal.js";
import ReservationButton from "../../components/button/ReservationButton.jsx";
import CustomCalendar from "../../components/calendar/CustomCalendar.jsx";
import ReservationTable from "../../pages/reservation/Reservation.table.jsx";
import GetAvailableSeat from "../../api/reservation/get/GetAvailableSeat.js";

//Recoil
import {useRecoilValue} from "recoil";
import {userState} from "../../atoms/userState.js";

//formatDate 변환 함수
const formatDate = (date) => {
    return new Date( date.getTime() + 9 * 60 * 60 * 1000 )
        .toISOString()
        .split("T")[0];
};

const ReservationModal = ({name, isOpen, closeModal, children, restaurantId, remoteSelectDate, ...props}) => {

    const userInfo = useRecoilValue(userState);
    const userId = userInfo.userId;
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
    const [availableSeats, setAvailableSeats] = useState([]);

    const navigate = useNavigate();


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
            <style.TotalContainer {...props}>
                <style.CalendarContainer>
                    <CustomCalendar onSelectDate={onSelectDateChange} selectedDate={selectDate} />
                </style.CalendarContainer>
                <style.ReservationContainer>
                    <ReservationTable dataList = {availableSeats} onSelectTimeChange={onSelectTimeChange}
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