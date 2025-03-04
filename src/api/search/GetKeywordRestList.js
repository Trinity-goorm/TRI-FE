import requestHandler from "../requestHandler";

const GetKeywordRestList = (keyword, page, sortType) => {
  return requestHandler({
    method: "POST",
    endpoint: `/search?keyword=${keyword}`,
    data: {
      page,
      sortType,
    },
    successMessage: "검색어로 식당 리스트 가져오기 성공",
    errorMessage: "검색어로 식당 리스트 가져오기 실패",
  });
};

export default GetKeywordRestList;
