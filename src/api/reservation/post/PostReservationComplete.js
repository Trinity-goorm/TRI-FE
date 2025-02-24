import requestHandler from "../../requestHandler.js";

const PostReservationComplete = async (reservationId, userId) => {

    return requestHandler({
        method: 'POST',
        endpoint: `/reservations/complete?reservationId=${reservationId}&userId=${userId}`,
        successMessage: "예약 결제 성공",
        errorMessage:"예약 결제 실패",
    })
}

export default PostReservationComplete;