import requestHandler from "../requestHandler";

const PostFcmToken = (fcmToken) => {
  requestHandler({
    method: "POST",
    endpoint: "/fcmTokens/register",
    data: {
      fcmToken,
    },
    successMessage: "fcm 토큰 등록 성공",
    errorMessage: "fcm 토큰 등록 실패",
  });
};
export default PostFcmToken;
