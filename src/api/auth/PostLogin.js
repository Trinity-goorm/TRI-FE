import requestHandler from "../requestHandler";

const PostLogin = (code, fcmToken, timeStamp) => {
  console.log("PostLogin 실행 시작🍎");
  return requestHandler({
    method: "POST",
    data: {fcmToken, timeStamp},
    endpoint: `/users/kakao/login?code=${code}`,
    successMessage: "로그인 성공",
    errorMessage: "로그인 실패", 
  });
};

export default PostLogin;
