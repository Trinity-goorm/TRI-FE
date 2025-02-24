import * as style from "./style/MyDiningPage.sub.js";
import { useState } from "react";
import DiningComponent from "../../components/dining/DiningComponent.jsx";
import DeleteVacancySeat from "../../api/vacancy/delete/DeleteVacancySeat.js";
import Modal from "../../components/modal/Modal.jsx";


const MyDiningVacancy = ({myVacancy}) => {
    const myVacancyList = myVacancy.subscriptionList || [];
    const [isCancel, setIsCancel] = useState(false);
    const [selectedSeatId, setSelectedSeatId] = useState(null);

    const deleteVacancy = async () => {

        if(!selectedSeatId) {
            return;
        }

        try{
            const response = await DeleteVacancySeat(selectedSeatId);
            console.log("빈자리 알림 취소하기 성공", response);
            setIsCancel(false);

        }catch(error){
            console.log("빈자리 알림 취소하기 실패",error);
        }
    };

    const onClickDeleteVacancy = async (id) => {
        await setSelectedSeatId(id);
        setIsCancel(true);
    }



    return (
        <>
            <style.TotalWrapper>
                {myVacancyList.map((reservation, index) => (
                    <DiningComponent key={index} tagText={"알림 대기중"}
                                     reservation={reservation}
                                     onClickFunction={() => onClickDeleteVacancy(reservation.seatNotificationId)}
                    />
                ))}
            </style.TotalWrapper>
            {isCancel && (
                <Modal
                    isOpen={isCancel}
                    onClose={() => setIsCancel(false)}
                    onConfirm = { () => deleteVacancy()}
                    message={"정말로 빈자리 알림을 취소하시겠습니까?"}

                />
            )}
        </>

    )
}

export default MyDiningVacancy;