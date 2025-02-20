import requestHandler from "../requestHandler";

const GetCategoryRestList = async (categoryId, userId, page) => {
  return requestHandler({
    method: "GET",
    endpoint: `/restaurants/category/${categoryId}/${userId}`,
    successMessage: "카테고리별 식당 리스트 가져오기 성공",
    errorMessage: "카테고리별 식당 리스트 가져오기 실패",
  });
};

export default GetCategoryRestList;
