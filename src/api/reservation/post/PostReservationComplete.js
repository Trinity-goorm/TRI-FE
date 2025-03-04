import requestHandler from "../../requestHandler.js";

const PostReservationComplete = async (reservationId) => {
  return requestHandler({
    method: "POST",
    endpoint: `/reservations/complete?reservationId=${reservationId}`,
    successMessage: "예약 결제 성공",
    errorMessage: "예약 결제 실패",
  });
};

export default PostReservationComplete;
