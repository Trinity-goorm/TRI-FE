import requestHandler from "../requestHandler";

const PostFcmRenew = (fcmToken, timeStamp) => {
  requestHandler({
    method: "POST",
    endpoint: "/fcmTokens/renew",
    data: {
      fcmToken,
      timeStamp,
    },
    successMessage: "fcm 토큰 재발급 성공",
    errorMessage: "fcm 토큰 재발급 실패",
  });
};

export default PostFcmRenew;
