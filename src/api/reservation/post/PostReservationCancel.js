import requestHandler from "../../requestHandler.js";

const PostReservationCancel = async (reservationId) => {

    return requestHandler({
        method: 'POST',
        endpoint: `/reservations/cancel?reservationId=${reservationId}`,
        successMessage: "예약 취소 성공",
        errorMessage:"예약 취소 실패",
    })
}

export default PostReservationCancel;