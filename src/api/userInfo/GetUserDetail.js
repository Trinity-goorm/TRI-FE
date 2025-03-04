import requestHandler from "../requestHandler";

const GetUserDetail = () => {
  return requestHandler({
    method: "GET",
    endpoint: `/users/detail`,
    successMessage: "사용자 정보 가져오기 성공",
    errorMessage: "사용자 정보 가져오기 실패",
  });
};

export default GetUserDetail;
