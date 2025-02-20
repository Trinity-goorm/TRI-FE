import requestHandler from "../../requestHandler.js";

const PostReservationCancel = async (reservationId, userId) => {

    return requestHandler({
        method: 'POST',
        endpoint: `/reservations/cancel?reservationId=${reservationId}&userId=${userId}`,
        successMessage: "예약 결제 취소 성공",
        errorMessage:"예약 결제 취소 실패",
    })
}

export default PostReservationCancel;