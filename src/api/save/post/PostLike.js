import requestHandler from "../../requestHandler.js";

const PostLike = async (restaurantId) => {
  return requestHandler({
    method: "POST",
    endpoint: `/restaurants/like/${restaurantId}`,
    successMessage: "찜하기 성공",
    errorMessage: "찜하기 실패",
  });
};

export default PostLike;
