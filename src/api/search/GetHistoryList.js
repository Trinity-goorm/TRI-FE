import requestHandler from "../requestHandler";

const GetHistoryList = (userId) => {
  return requestHandler({
    method: "GET",
    endpoint: `/search/history/${userId}`,
    successMessage: "유저 검색 히스토리 가져오기 성공",
    errorMessage: "검유저 검색 히스토리 가져오기 실패",
  });
};

export default GetHistoryList;
