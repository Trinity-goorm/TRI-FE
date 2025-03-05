import requestHandler from "../requestHandler";

const DeleteFcmToken = (fcmToken) => {
  requestHandler({
    method: "POST",
    endpoint: "/fcmTokens/delete",
    data: {
      fcmToken,
    },
    successMessage: "fcm 토큰 삭제 성공",
    errorMessage: "fcm 토큰 삭제 실패",
  });
};
export default DeleteFcmToken;
