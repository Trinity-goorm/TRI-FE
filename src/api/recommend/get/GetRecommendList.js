import requestHandler from "../../requestHandler.js";

const GetRecommendList = async () => {
  return requestHandler({
    method: "GET",
    endpoint: `/restaurants/recommendation`,
    successMessage: "추천 식당 리스트 가져오기 성공",
    errorMessage: "추천 식당 리스트 가져오기 실패",
  });
};

export default GetRecommendList;
