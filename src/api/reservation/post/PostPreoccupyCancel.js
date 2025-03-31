import requestHandler from "../../requestHandler.js";

const PostPreoccupyCancel = async (reservationId) => {
  return requestHandler({
    method: "POST",
    endpoint: `/reservations/preoccupy/cancel?reservationId=${reservationId}`,
    successMessage: "선점 취소 성공",
    errorMessage: "선점 취소 실패",
  });
};

export default PostPreoccupyCancel;
