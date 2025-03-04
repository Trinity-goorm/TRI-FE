import requestHandler from "../../requestHandler.js";

const GetLikeRestaurants = async () => {
  return requestHandler({
    method: "GET",
    endpoint: `/restaurants/like`,
    successMessage: "찜한 리스트 가져오기 성공",
    errorMessage: "찜한 리스트 가져오기 실패",
  });
};

export default GetLikeRestaurants;
