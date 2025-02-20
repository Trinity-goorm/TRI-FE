import requestHandler from "../requestHandler";

const PostLogout = async (fcmToken) => {
  return requestHandler({
    method: "POST",
    data: { fcmToken },
    endpoint: `/api/users/kakao/logout`,
    successMessage: "로그아웃 성공",
    errorMessage: "로그아웃 실패",
  });
};

export default PostLogout;
