import requestHandler from "../requestHandler";

const GetMyLikeList = async () => {
  return requestHandler({
    method: "GET",
    endpoint: `/restaurants/like`,
    successMessage: "좋아요 한 식당 리스트 가져오기 성공",
    errorMessage: "좋아요 한 식당 리스트 가져오기 실패",
  });
};

export default GetMyLikeList;
