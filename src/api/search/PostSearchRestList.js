import requestHandler from "../requestHandler";

const PostSearchRestList = async (keyword, sortType, page) => {
  return requestHandler({
    method: "POST",
    data: { page, sortType, keyword },
    endpoint: `/api/search/total`,
    successMessage: "식당 검색 리스트 가져오기 성공",
    errorMessage: "식당 검색ㅌ 리스트 가져오기 실패",
  });
};

export default PostSearchRestList;
