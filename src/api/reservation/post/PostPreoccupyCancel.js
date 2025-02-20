import requestHandler from "../../requestHandler.js";

const PostPreoccupy = async (reservationId, userId) => {

    return requestHandler({
        method: 'POST',
        endpoint: `/reservations/preoccupy/cancel?reservationId=${reservationId}&userId=${userId}`,
        successMessage: "선점 성공",
        errorMessage:"선점 실패"
    })
}

export default PostPreoccupy;