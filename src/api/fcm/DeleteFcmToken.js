import requestHandler from "../requestHandler";

const DeleteFcmToken = (fcmToken) => {
  requestHandler({
    method: "DELETE",
    endpoint: "/fcmTokens/delete",
    data: {
      fcmToken,
    },
    successMessage: "fcm 토큰 등록 성공",
    errorMessage: "fcm 토큰 등록 실패",
  });
};
export default DeleteFcmToken;
