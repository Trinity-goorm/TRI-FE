import * as style from "./style/MyDiningPage.sub.js";
import DiningComponent from "../../components/dining/DiningComponent.jsx";
import GetUserReservations from "../../api/reservation/get/GetUserReservations.js";
import {useEffect, useState} from "react";

//API
import PostReservationCancel from "../../api/reservation/post/PostReservationCancel.js";
import Modal from "../../components/modal/Modal.jsx";

const MyDiningReservation = () => {
    const [isCancel, setIsCancel] = useState(false);
    const [selectedReservation, setSelectedReservation] = useState(null);
    const userId = localStorage.getItem("userId");
    const [reservations, setReservations] = useState([]);

    const fetchUserReservations = async () => {
        try{
            const response = await GetUserReservations(userId);
            console.log("사용자 예약 정보 불러오기 성공", response);
            setReservations(response.reservations?.filter((res) =>
                res.status === "COMPLETED"
            ));

        }catch(error){
            console.log("사용자 예약 정보 불러오기 실패",error);
        }
    }

    useEffect(() => {
        fetchUserReservations();
    },[]);

    const cancelReservation = async () => {


        if (!selectedReservation) {
            console.log('아이디 없음!');
            return;
        }

        try{
            const response = await PostReservationCancel(selectedReservation);
            console.log("🫵예약 취소 성공", response);
            setIsCancel(false);
            fetchUserReservations();

        }catch(error){
            console.log("👁️예약 취소하기 실패",error)

        }

    }

    const onClickCancel = async (reservationId) => {
        await setSelectedReservation(reservationId);
        setIsCancel(true);
    }


    return (
        <>
            <style.TotalWrapper>
                {reservations.map((reservation, index) => (
                    <DiningComponent key={index} tagText={"방문 예정"}
                                     reservation={reservation}
                                     onCancel={() => onClickCancel(reservation.reservationId)}
                    />
                ))}
            </style.TotalWrapper>
            {isCancel && (
                <Modal
                    isOpen={isCancel}
                    onClose={() => setIsCancel(false)}
                    onConfirm = { () => cancelReservation()}
                    message={"정말로 예약을 취소하시겠습니까?"}
                    innerMessage={""}

                />
            )}
        </>

    )
}

export default MyDiningReservation;