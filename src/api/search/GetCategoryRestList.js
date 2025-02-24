import requestHandler from "../requestHandler";

const GetCategoryRestList = async (categoryId, userId, page, sortType) => {
  return requestHandler({
    method: "POST",
    endpoint: `/restaurants/category/${categoryId}`,
    data: {
      page,
      sortType,
      userId,
    },
    successMessage: "카테고리별 식당 리스트 가져오기 성공",
    errorMessage: "카테고리별 식당 리스트 가져오기 실패",
  });
};

export default GetCategoryRestList;
