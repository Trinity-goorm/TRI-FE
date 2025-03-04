import requestHandler from "../../requestHandler.js";

const GetVacancySeats = async () => {
  return requestHandler({
    method: "GET",
    endpoint: `/notifications/seats`,
    successMessage: "빈자리 알림 리스트 가져오기 성공",
    errorMessage: "빈자리 알림 리스트 가져오기 실패",
  });
};

export default GetVacancySeats;
