import requestHandler from "../requestHandler";

const GetHistoryList = () => {
  return requestHandler({
    method: "GET",
    endpoint: `/search/history`,
    successMessage: "유저 검색 히스토리 가져오기 성공",
    errorMessage: "유저 검색 히스토리 가져오기 실패",
  });
};

export default GetHistoryList;
