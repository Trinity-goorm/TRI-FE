import requestHandler from "../../requestHandler.js";

const GetUserReservations = () => {
  return requestHandler({
    method: "GET",
    endpoint: `/users/reservations`,
    successMessage: "사용자 예약 정보 가져오기 성공",
    errorMessage: "사용자 예약 정보 가져오기 실패",
  });
};
export default GetUserReservations;
