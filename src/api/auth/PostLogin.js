import requestHandler from "../requestHandler";

const PostLogin = (code, fcmToken, timeStamp) => {
  return requestHandler({
    method: "POST",
    data: { "fcmToken": fcmToken, "timeStamp": timeStamp },
    endpoint: `/users/kakao/login?code=${code}`,
    successMessage: "로그인 성공",
    errorMessage: "로그인 실패",
  });
};

export default PostLogin;
