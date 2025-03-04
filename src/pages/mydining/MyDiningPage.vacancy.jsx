import * as style from "./style/MyDiningPage.sub.js";
import { useEffect, useState } from "react";
import VacancyComponent from "../../components/dining/VacancyComponent.jsx";
import DeleteVacancySeat from "../../api/vacancy/delete/DeleteVacancySeat.js";
import Modal from "../../components/modal/Modal.jsx";
import getVacancySeats from "../../api/vacancy/get/GetVacancySeats.js";
import { BsBookmarkDash } from "react-icons/bs";

const MyDiningVacancy = () => {
  const [isCancel, setIsCancel] = useState(false);
  const [selectedSeatId, setSelectedSeatId] = useState(null);
  const [vacancySeats, setVacancySeats] = useState([]);

  const deleteVacancy = async () => {
    if (!selectedSeatId) {
      return;
    }

    try {
      const response = await DeleteVacancySeat(selectedSeatId);
      console.log("빈자리 알림 취소하기 성공", response);
      setIsCancel(false);
      fetchVacancySeats();
    } catch (error) {
      console.log("빈자리 알림 취소하기 실패", error);
    }
  };

  const onClickDeleteVacancy = async (id) => {
    await setSelectedSeatId(id);
    setIsCancel(true);
  };

  const fetchVacancySeats = async () => {
    try {
      const response = await getVacancySeats();
      setVacancySeats(response.subscriptionList);
      console.log("빈자리 불러오기 성공", response);
    } catch (e) {
      console.log("👻빈자리 불러오기 실패", e);
    }
  };

  useEffect(() => {
    fetchVacancySeats();
  }, []);

  return (
    <>
      <style.TotalWrapper>
        {vacancySeats.length > 0 ? (
          vacancySeats.map((reservation, index) => (
            <VacancyComponent
              key={index}
              tagText={"알림 대기중"}
              reservation={reservation}
              onClickFunction={() =>
                onClickDeleteVacancy(reservation.seatNotificationId)
              }
            />
          ))
        ) : (
          <style.NoRestaurantWrapper>
            <style.NoRestaurantIcon>
              <BsBookmarkDash size={60} color={"#dcdcdc"} strokeWidth={0.3} />
            </style.NoRestaurantIcon>
            <style.NoRestaurantMessageFirst>
              빈자리 알림이 없습니다!
            </style.NoRestaurantMessageFirst>
            <style.NoRestaurantMessageSecond>
              신청한 빈자리 알림이 여기에 표시됩니다!
            </style.NoRestaurantMessageSecond>
          </style.NoRestaurantWrapper>
        )}
      </style.TotalWrapper>
      {isCancel && (
        <Modal
          isOpen={isCancel}
          onClose={() => setIsCancel(false)}
          onConfirm={() => deleteVacancy()}
          message={"정말로 빈자리 알림을 취소하시겠습니까?"}
          innerMessage={"💵 빈자리 알림 취소 시 티켓은 반환되지 않습니다! 💵 "}
        />
      )}
    </>
  );
};

export default MyDiningVacancy;
